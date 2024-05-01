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
		client: {"start":"_app/immutable/entry/start.D_9MjedA.js","app":"_app/immutable/entry/app.C2f4nzIF.js","imports":["_app/immutable/entry/start.D_9MjedA.js","_app/immutable/chunks/entry.D5uN92Ae.js","_app/immutable/chunks/scheduler.GLPJa163.js","_app/immutable/chunks/paths.DDwzawPs.js","_app/immutable/entry/app.C2f4nzIF.js","_app/immutable/chunks/scheduler.GLPJa163.js","_app/immutable/chunks/index.D57UU_7x.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
