

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/story/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.NF506Vp3.js","_app/immutable/chunks/scheduler.XzE2Oj-3.js","_app/immutable/chunks/index.Cd6LO77w.js","_app/immutable/chunks/await_block.Ct6sfPlq.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.eKMWO32O.js"];
export const stylesheets = ["_app/immutable/assets/3.CKnFrPaM.css"];
export const fonts = [];
