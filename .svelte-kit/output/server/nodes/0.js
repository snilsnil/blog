import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C8cfABok.js","_app/immutable/chunks/scheduler.XzE2Oj-3.js","_app/immutable/chunks/index.DOqjEd-6.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.B6awgoGI.js","_app/immutable/chunks/index.BhAzLAJ-.js"];
export const stylesheets = ["_app/immutable/assets/0.NoLKdpfa.css"];
export const fonts = [];
