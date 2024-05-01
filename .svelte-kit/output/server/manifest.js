export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "blog/_app",
	assets: new Set([".nojekyll","close.png","favicon.png","github.png","icon.png","malgun.ttf","menu.png","robots.txt","search.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BS-Ce7B7.js","app":"_app/immutable/entry/app.DhpFS5QJ.js","imports":["_app/immutable/entry/start.BS-Ce7B7.js","_app/immutable/chunks/entry.DJe7PAMz.js","_app/immutable/chunks/scheduler.GLPJa163.js","_app/immutable/chunks/paths.BjDkVf2I.js","_app/immutable/entry/app.DhpFS5QJ.js","_app/immutable/chunks/scheduler.GLPJa163.js","_app/immutable/chunks/index.D57UU_7x.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
