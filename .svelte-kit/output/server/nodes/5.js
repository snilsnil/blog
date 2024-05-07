

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CS9TV4Sg.js","_app/immutable/chunks/scheduler.XzE2Oj-3.js","_app/immutable/chunks/index.Cd6LO77w.js","_app/immutable/chunks/await_block.Ct6sfPlq.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.BkygpmBn.js"];
export const stylesheets = ["_app/immutable/assets/3.CKnFrPaM.css"];
export const fonts = [];
