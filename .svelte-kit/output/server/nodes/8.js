import * as server from '../entries/pages/test/_id_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/test/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.37dP08mC.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CuDBO9JZ.js"];
export const stylesheets = ["_app/immutable/assets/4.CeAGyePF.css"];
export const fonts = [];
