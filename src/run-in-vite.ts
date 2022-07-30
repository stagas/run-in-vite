import puppeteer from 'puppeteer'
import pretty, { print } from 'puppeteer-pretty-console'
import { mergeConfig } from 'vite'
import { open, Options as ServerSetup, ViteServer } from 'vite-open'

export * from 'vite-open'

export type { PluginOption } from 'vite'
export type { puppeteer }

export interface RunInViteInstance {
  server: ViteServer
  browser: puppeteer.Browser
  page: puppeteer.Page
  close: () => Promise<void>
  flush: () => Promise<void>
}

export interface ClientSetup extends ServerSetup {
  include?: string
  html?: string
  // close?: boolean
  // maxAttempts?: number
  // gotoTimeout?: number
  headless?: boolean
  watch?: boolean
  // onServer?: (server: ViteServer) => Promise<void>
  consoleFilter?: (args: any[]) => any[]
  launchOptions?: Parameters<typeof puppeteer.launch>[0]
}

export const runInVite: (setup?: Partial<ClientSetup>) => Promise<RunInViteInstance> = async (setup = {}) => {
  // let errorHook!: (error: Error) => void
  // const errorPromise = new Promise<void>((_, reject) => (errorHook = reject))

  if (setup.quiet == null && process.env.NODE_ENV === 'test')
    setup.quiet = true

  const responses: ServerSetup['responses'] = setup.responses ??= {}

  responses['/'] = {
    fn: (server, req, res) => {
      server.transformIndexHtml(
        req.url!,
        setup.html
          || /*html*/ `<html><head></head><body style="background: #222"><script type="module" src="client.js"></script></body></html>`
      ).then(result => {
        res.end(result)
      })
    },
  }

  responses['/client.js'] = {
    type: 'application/javascript',
    content: (setup.include ?? '') + ';typeof ready === \'function\' && ready()',
  }

  setup.viteOptions = mergeConfig(setup.viteOptions ?? {}, {
    server: setup.watch ? {} : {
      hmr: false,
      watch: {
        ignored: ['*'],
      },
    },
  })

  const server = await open({
    ...setup,
    responses,
    https: true,
    noOpen: true,
    file: 'client.js',
    root: setup.root ?? process.cwd(),
  })

  // await setup.onServer?.(server)
  // server.vite.httpServer!.on('error', console.error)
  // server.vite.httpServer!.on('clientError', console.error)

  setup.launchOptions ??= {}
  setup.launchOptions.headless ??= setup.headless ?? true
  setup.launchOptions.args ??= []
  setup.launchOptions.args = [
    ...new Set([
      ...setup.launchOptions.args,
      '--disable-background-timer-throttling',
      '--disable-default-apps',
      '--disable-device-discovery-notifications',
      '--disable-popup-blocking',
      '--disable-renderer-backgrounding',
      '--disable-translate',
      '--no-default-browser-check',
      '--no-first-run',
      // '--single-process',
      '--ignore-certificate-errors',
      '--allow-insecure-localhost',
      '--use-fake-device-for-media-stream',
      '--use-fake-ui-for-media-stream',
      '--autoplay-policy=no-user-gesture-required',
    ]),
  ]
  const browser = await puppeteer.launch(setup.launchOptions)

  const close = async () => {
    // flush console up to this point
    await flush()

    // wait for console to flush
    await new Promise(resolve => setTimeout(resolve, 20))

    try {
      await browser.close()
      await server.vite.close()
    } catch {}

    // wait for vite to close
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  const flush = async () => {
    // by awaiting a void print call, we essentially wait
    // for the console queue to flush
    await print(async () => {})
  }

  const pages = await browser.pages()
  const page = pages[0]

  // page.on('error', console.error)
  // page.on('pageerror', console.error)
  // page.on('requestfailed', console.error)

  pretty(page, setup.consoleFilter)

  return {
    server,
    browser,
    page,
    close,
    flush,
  }
}

export default runInVite
