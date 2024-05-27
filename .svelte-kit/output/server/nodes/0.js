import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.DPem2LmI.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.CMGKFrQR.js","_app/immutable/chunks/paths.BqG78BkN.js"];
export const stylesheets = ["_app/immutable/assets/0.D39DPtt9.css"];
export const fonts = [];
