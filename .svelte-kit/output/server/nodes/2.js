import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.DAflmgsA.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CuDBO9JZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.SMJX9Lxe.js"];
export const stylesheets = ["_app/immutable/assets/2.CmCvvGLy.css"];
export const fonts = [];
