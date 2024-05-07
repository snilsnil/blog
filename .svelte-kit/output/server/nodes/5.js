

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ATllSAqa.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.gJx79kEZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.Bn51tNmJ.js"];
export const stylesheets = ["_app/immutable/assets/3.CKnFrPaM.css"];
export const fonts = [];
