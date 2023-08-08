const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.e2371223.js","app":"_app/immutable/entry/app.e8c1731e.js","imports":["_app/immutable/entry/start.e2371223.js","_app/immutable/chunks/scheduler.9a81c55c.js","_app/immutable/chunks/singletons.6929efeb.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.e8c1731e.js","_app/immutable/chunks/scheduler.9a81c55c.js","_app/immutable/chunks/index.f4ce9c2c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-760513b3.js')),
			__memo(() => import('./chunks/1-fb33f57d.js')),
			__memo(() => import('./chunks/4-a99a68c3.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/","/about","/sverdle/how-to-play"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
