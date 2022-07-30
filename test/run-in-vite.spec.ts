import { runInVite } from '../src/run-in-vite'

describe('runInVite', () => {
  it('works', async () => {
    const { page, close } = await runInVite()
    const result = await page.evaluate(() => 'hello world')
    expect(result).toEqual('hello world')
    await close()
  })

  // it('include', async () => {
  //   const result = await runInVite(
  //     page => page.evaluate(() => (window as any).foo),
  //     {
  //       include: `window.foo = 'foo'`,
  //     }
  //   )
  //   expect(result).toEqual('foo')
  // })

  // it('root', async () => {
  //   const result = await runInVite(
  //     page => page.evaluate(() => (window as any).foo),
  //     {
  //       root: path.resolve(path.join(__dirname, 'fixture')),
  //       include: `import { foo } from './foo.ts'; window.foo = foo`,
  //     }
  //   )
  //   expect(result).toEqual('foo')
  // })

  // it('server ignores query parameters', async () => {
  //   const result = await runInVite(
  //     page => page.evaluate(() => (window as any).query),
  //     {
  //       root: path.resolve(path.join(__dirname, 'fixture')),
  //       include: `import { query } from './query.ts?some-query'; window.query = query`,
  //     }
  //   )
  //   expect(result).toEqual('some-query')
  // })

  // it('errors', async () => {
  //   await expect(
  //     runInVite(page =>
  //       page.evaluate(() => {
  //         throw new Error('problem')
  //       })
  //     )
  //   ).rejects.toThrow('problem')
  // })

  // it('errors on filename', async () => {
  //   await expect(
  //     runInVite(
  //       page =>
  //         page.evaluate(() => {
  //           throw new Error('problem')
  //         }),
  //       {
  //         root: path.resolve(path.join(__dirname, 'fixture')),
  //         include: `import './non-existant.ts'`,
  //       }
  //     )
  //   ).rejects.toThrow('ERR_ABORTED')
  // })

  // it('errors on network errors', async () => {
  //   await expect(
  //     runInVite(page =>
  //       page.evaluate(() => {
  //         fetch('./non-existant')
  //       }), {
  //       root: path.resolve(path.join(__dirname, 'fixture')),
  //     })
  //   ).rejects.toThrow('ERR_ABORTED')
  // })
})
