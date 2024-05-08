export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "blog/_app",
	assets: new Set([".nojekyll","close.png","favicon.png","github.png","icon.png","malgun.ttf","menu.png","robots.txt","search.png","test.json","wheniwasyourmain.png","wheniwasyourmain.png:Zone.Identifier"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".txt":"text/plain",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.-I35zmTC.js","app":"_app/immutable/entry/app.BCoP3ys4.js","imports":["_app/immutable/entry/start.-I35zmTC.js","_app/immutable/chunks/entry.CXnQ0uvn.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.oX31WzpR.js","_app/immutable/chunks/paths.CYraYg_c.js","_app/immutable/entry/app.BCoP3ys4.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CuDBO9JZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
