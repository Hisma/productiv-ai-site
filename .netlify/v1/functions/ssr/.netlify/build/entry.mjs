import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BlM15tR4.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.4_@netlify+blobs@8.2.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@astrojs+starlight@0.34.0_astro@5.7.4_@netlify+blobs@8.2.0_jiti@2.4.2_lightningcss@1.29_84e9ee44b39e7d0ef9b3f9b9b64ffb96/node_modules/@astrojs/starlight/routes/static/404.astro", _page1],
    ["node_modules/.pnpm/@astrojs+starlight@0.34.0_astro@5.7.4_@netlify+blobs@8.2.0_jiti@2.4.2_lightningcss@1.29_84e9ee44b39e7d0ef9b3f9b9b64ffb96/node_modules/@astrojs/starlight/routes/static/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "8d6100be-9832-47be-a325-e0d5f7a12e7a"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
