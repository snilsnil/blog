

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/justChat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.03buTbWb.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CuDBO9JZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.DGEW-r1d.js"];
export const stylesheets = ["_app/immutable/assets/3.BgeIdpdG.css"];
export const fonts = [];
