

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/story/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DWBqlsXI.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CuDBO9JZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.BuhuVrrT.js"];
export const stylesheets = ["_app/immutable/assets/3.BgeIdpdG.css"];
export const fonts = [];
