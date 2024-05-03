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
		client: {"start":"_app/immutable/entry/start.ct7ZwcHG.js","app":"_app/immutable/entry/app.BdWp4Xb0.js","imports":["_app/immutable/entry/start.ct7ZwcHG.js","_app/immutable/chunks/entry.5htXQVmP.js","_app/immutable/chunks/scheduler.XzE2Oj-3.js","_app/immutable/chunks/index.BhAzLAJ-.js","_app/immutable/chunks/paths.B6awgoGI.js","_app/immutable/entry/app.BdWp4Xb0.js","_app/immutable/chunks/scheduler.XzE2Oj-3.js","_app/immutable/chunks/index.DOqjEd-6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
