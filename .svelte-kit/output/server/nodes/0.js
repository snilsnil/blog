import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CrXxj6Yk.js","_app/immutable/chunks/scheduler.GLPJa163.js","_app/immutable/chunks/index.D57UU_7x.js","_app/immutable/chunks/paths.Ck7wBQuR.js"];
export const stylesheets = ["_app/immutable/assets/0.CGfZ5M0_.css"];
export const fonts = [];
