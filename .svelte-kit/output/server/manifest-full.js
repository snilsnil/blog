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
		client: {"start":"_app/immutable/entry/start.D25_DZ2b.js","app":"_app/immutable/entry/app.E6kV6-5Y.js","imports":["_app/immutable/entry/start.D25_DZ2b.js","_app/immutable/chunks/entry.D0boEnIw.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.oX31WzpR.js","_app/immutable/chunks/paths.SMJX9Lxe.js","_app/immutable/entry/app.E6kV6-5Y.js","_app/immutable/chunks/scheduler.Dw93JyHj.js","_app/immutable/chunks/index.CuDBO9JZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/justChat",
				pattern: /^\/justChat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/justChat/[id]",
				pattern: /^\/justChat\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/story",
				pattern: /^\/story\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/story/[id]",
				pattern: /^\/story\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/test/[id]",
				pattern: /^\/test\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
