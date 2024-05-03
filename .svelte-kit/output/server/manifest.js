export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "blog/_app",
	assets: new Set([".nojekyll","close.png","favicon.png","github.png","icon.png","malgun.ttf","menu.png","robots.txt","search.png","wheniwasyourmain.png:Zone.Identifier"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DA6SaMNi.js","app":"_app/immutable/entry/app.8TYIWK79.js","imports":["_app/immutable/entry/start.DA6SaMNi.js","_app/immutable/chunks/entry.kUNLVEh2.js","_app/immutable/chunks/scheduler.XzE2Oj-3.js","_app/immutable/chunks/index.BhAzLAJ-.js","_app/immutable/chunks/paths.DPwZMURT.js","_app/immutable/entry/app.8TYIWK79.js","_app/immutable/chunks/scheduler.XzE2Oj-3.js","_app/immutable/chunks/index.Cd6LO77w.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
