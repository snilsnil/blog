

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BcMvOtg5.js","_app/immutable/chunks/scheduler.GLPJa163.js","_app/immutable/chunks/index.D57UU_7x.js","_app/immutable/chunks/await_block.0xz5QGGD.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/paths.DDwzawPs.js"];
export const stylesheets = ["_app/immutable/assets/3.CKnFrPaM.css"];
export const fonts = [];
