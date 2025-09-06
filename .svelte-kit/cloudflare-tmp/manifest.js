export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["LICENSE","blogs/building-responsive-designs.md","blogs/getting-started-with-svelte.md","blogs/typescript-tips-tricks.md","favicon.svg","images/me.jpeg","robots.txt"]),
	mimeTypes: {".md":"text/markdown",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.OwXLGObN.js",app:"_app/immutable/entry/app.hAmfO45F.js",imports:["_app/immutable/entry/start.OwXLGObN.js","_app/immutable/chunks/DL1wsAiU.js","_app/immutable/chunks/BGUtlhja.js","_app/immutable/chunks/Dy5sc_B2.js","_app/immutable/chunks/11a8K_GH.js","_app/immutable/entry/app.hAmfO45F.js","_app/immutable/chunks/Dy5sc_B2.js","_app/immutable/chunks/11a8K_GH.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BGUtlhja.js","_app/immutable/chunks/CDz-J7qv.js","_app/immutable/chunks/DnNOXbbZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base_path = "";
