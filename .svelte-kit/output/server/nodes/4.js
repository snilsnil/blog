import * as server from '../entries/pages/justChat/_id_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/justChat/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/justChat/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.t6nx5pwd.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CuDBO9JZ.js"];
export const stylesheets = ["_app/immutable/assets/4.Fi6maGoh.css"];
export const fonts = [];
