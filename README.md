<h1>
run-in-vite <a href="https://npmjs.org/package/run-in-vite"><img src="https://img.shields.io/badge/npm-v0.0.2-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-104-FFF.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

runs a single function in vite using puppeteer

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i run-in-vite </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add run-in-vite </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add run-in-vite</code>
</td></tr></table>
</h4>

## API

<p>  <details id="ClientSetup$9" title="Interface" ><summary><span><a href="#ClientSetup$9">#</a></span>  <code><strong>ClientSetup</strong></code>    </summary>  <a href="src/run-in-vite.ts#L19">src/run-in-vite.ts#L19</a>  <ul>        <p>  <details id="headless$12" title="Property" ><summary><span><a href="#headless$12">#</a></span>  <code><strong>headless</strong></code>    </summary>  <a href="src/run-in-vite.ts#L25">src/run-in-vite.ts#L25</a>  <ul><p>boolean</p>        </ul></details><details id="html$11" title="Property" ><summary><span><a href="#html$11">#</a></span>  <code><strong>html</strong></code>    </summary>  <a href="src/run-in-vite.ts#L21">src/run-in-vite.ts#L21</a>  <ul><p>string</p>        </ul></details><details id="include$10" title="Property" ><summary><span><a href="#include$10">#</a></span>  <code><strong>include</strong></code>    </summary>  <a href="src/run-in-vite.ts#L20">src/run-in-vite.ts#L20</a>  <ul><p>string</p>        </ul></details><details id="launchOptions$17" title="Property" ><summary><span><a href="#launchOptions$17">#</a></span>  <code><strong>launchOptions</strong></code>    </summary>  <a href="src/run-in-vite.ts#L29">src/run-in-vite.ts#L29</a>  <ul><p><span>PuppeteerLaunchOptions</span></p>        </ul></details><details id="watch$13" title="Property" ><summary><span><a href="#watch$13">#</a></span>  <code><strong>watch</strong></code>    </summary>  <a href="src/run-in-vite.ts#L26">src/run-in-vite.ts#L26</a>  <ul><p>boolean</p>        </ul></details><details id="consoleFilter$14" title="Method" ><summary><span><a href="#consoleFilter$14">#</a></span>  <code><strong>consoleFilter</strong></code><em>(args)</em>    </summary>  <a href="src/run-in-vite.ts#L28">src/run-in-vite.ts#L28</a>  <ul>    <p>    <details id="args$16" title="Parameter" ><summary><span><a href="#args$16">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p>any  []</p>        </ul></details>  <p><strong>consoleFilter</strong><em>(args)</em>  &nbsp;=&gt;  <ul>any  []</ul></p></p>    </ul></details></p></ul></details><details id="RunInViteInstance$1" title="Interface" ><summary><span><a href="#RunInViteInstance$1">#</a></span>  <code><strong>RunInViteInstance</strong></code>    </summary>  <a href="src/run-in-vite.ts#L11">src/run-in-vite.ts#L11</a>  <ul>        <p>  <details id="browser$3" title="Property" ><summary><span><a href="#browser$3">#</a></span>  <code><strong>browser</strong></code>    </summary>  <a href="src/run-in-vite.ts#L13">src/run-in-vite.ts#L13</a>  <ul><p><span>Browser</span></p>        </ul></details><details id="page$4" title="Property" ><summary><span><a href="#page$4">#</a></span>  <code><strong>page</strong></code>    </summary>  <a href="src/run-in-vite.ts#L14">src/run-in-vite.ts#L14</a>  <ul><p><span>Page</span></p>        </ul></details><details id="server$2" title="Property" ><summary><span><a href="#server$2">#</a></span>  <code><strong>server</strong></code>    </summary>  <a href="src/run-in-vite.ts#L12">src/run-in-vite.ts#L12</a>  <ul><p><span>ViteServer</span></p>        </ul></details><details id="close$5" title="Method" ><summary><span><a href="#close$5">#</a></span>  <code><strong>close</strong></code><em>()</em>    </summary>  <a href="src/run-in-vite.ts#L15">src/run-in-vite.ts#L15</a>  <ul>    <p>      <p><strong>close</strong><em>()</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;void&gt;</ul></p></p>    </ul></details><details id="flush$7" title="Method" ><summary><span><a href="#flush$7">#</a></span>  <code><strong>flush</strong></code><em>()</em>    </summary>  <a href="src/run-in-vite.ts#L16">src/run-in-vite.ts#L16</a>  <ul>    <p>      <p><strong>flush</strong><em>()</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;void&gt;</ul></p></p>    </ul></details></p></ul></details><details id="runInVite$18" title="Function" ><summary><span><a href="#runInVite$18">#</a></span>  <code><strong>runInVite</strong></code><em>(setup)</em>    </summary>  <a href="src/run-in-vite.ts#L32">src/run-in-vite.ts#L32</a>  <ul>    <p>    <details id="setup$20" title="Parameter" ><summary><span><a href="#setup$20">#</a></span>  <code><strong>setup</strong></code>    </summary>    <ul><p><span>Partial</span>&lt;<a href="#ClientSetup$9">ClientSetup</a>&gt;</p>        </ul></details>  <p><strong>runInVite</strong><em>(setup)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;<a href="#RunInViteInstance$1">RunInViteInstance</a>&gt;</ul></p></p>    </ul></details></p>

## Credits

- [puppeteer](https://npmjs.org/package/puppeteer) by [The Chromium Authors](https://github.com/puppeteer) &ndash; A high-level API to control headless Chrome over the DevTools Protocol
- [puppeteer-pretty-console](https://npmjs.org/package/puppeteer-pretty-console) by [stagas](https://github.com/stagas) &ndash; helper that setups console output for puppeteer
- [vite](https://npmjs.org/package/vite) by [Evan You](https://github.com/vitejs) &ndash; Native-ESM powered web dev build tool
- [vite-open](https://npmjs.org/package/vite-open) by [stagas](https://github.com/stagas) &ndash; Open any file directly in a Vite dev server.

## Contributing

[Fork](https://github.com/stagas/run-in-vite/fork) or [edit](https://github.dev/stagas/run-in-vite) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
