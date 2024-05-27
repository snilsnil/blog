import * as server from '../entries/pages/story/_id_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/story/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/story/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.TMJ4iFvh.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.CMGKFrQR.js"];
export const stylesheets = ["_app/immutable/assets/4.CeAGyePF.css"];
export const fonts = [];
