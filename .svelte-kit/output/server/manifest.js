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
		client: {"start":"_app/immutable/entry/start.D_w1hRPW.js","app":"_app/immutable/entry/app.CIpse0vl.js","imports":["_app/immutable/entry/start.D_w1hRPW.js","_app/immutable/chunks/entry.2Dw-utaK.js","_app/immutable/chunks/scheduler.XzE2Oj-3.js","_app/immutable/chunks/index.BhAzLAJ-.js","_app/immutable/chunks/paths.eKMWO32O.js","_app/immutable/entry/app.CIpse0vl.js","_app/immutable/chunks/scheduler.XzE2Oj-3.js","_app/immutable/chunks/index.Cd6LO77w.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
