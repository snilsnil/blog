import * as server from '../entries/pages/search/_slug_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/search/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.ab91noWT.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.CMGKFrQR.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.BqG78BkN.js"];
export const stylesheets = ["_app/immutable/assets/5.CcPMOqg_.css"];
export const fonts = [];
