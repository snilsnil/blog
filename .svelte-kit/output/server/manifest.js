export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "blog/_app",
	assets: new Set([".nojekyll","close.png","data.json","favicon.png","github.png","icon.png","malgun.ttf","menu.png","robots.txt","search.png","wheniwasyourmain.png","wheniwasyourmain.png:Zone.Identifier"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".ttf":"font/ttf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DUaJytgr.js","app":"_app/immutable/entry/app.CJGolDX7.js","imports":["_app/immutable/entry/start.DUaJytgr.js","_app/immutable/chunks/entry.Dnvk_ogn.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.oX31WzpR.js","_app/immutable/chunks/paths.NyALLgaN.js","_app/immutable/entry/app.CJGolDX7.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CuDBO9JZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
