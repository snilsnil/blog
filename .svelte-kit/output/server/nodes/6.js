

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/story/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.gMRNczio.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.CMGKFrQR.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.BqG78BkN.js"];
export const stylesheets = ["_app/immutable/assets/3.BgeIdpdG.css"];
export const fonts = [];
