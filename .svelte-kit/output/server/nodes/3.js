

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/story/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.nR72iZIx.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CuDBO9JZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.CYraYg_c.js"];
export const stylesheets = ["_app/immutable/assets/3.BgeIdpdG.css"];
export const fonts = [];
