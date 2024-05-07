

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/story/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Cgzi8RsD.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.gJx79kEZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.Bn51tNmJ.js"];
export const stylesheets = ["_app/immutable/assets/3.CKnFrPaM.css"];
export const fonts = [];
