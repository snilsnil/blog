import * as server from '../entries/pages/test/_id_/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/test/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/6.B5W5uRt2.js","_app/immutable/chunks/scheduler.XzE2Oj-3.js","_app/immutable/chunks/index.Cd6LO77w.js"];
export const stylesheets = ["_app/immutable/assets/4.Bn63zfL3.css"];
export const fonts = [];
