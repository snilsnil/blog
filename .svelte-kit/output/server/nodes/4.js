import * as server from '../entries/pages/story/_id_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/story/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/story/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.kntgHXMd.js","_app/immutable/chunks/scheduler.GLPJa163.js","_app/immutable/chunks/index.D57UU_7x.js"];
export const stylesheets = ["_app/immutable/assets/4.Bn63zfL3.css"];
export const fonts = [];
