//import vercel from "@sveltejs/adapter-vercel";
import adapter from "@sveltejs/adapter-auto";
//import staticAdapter from "@sveltejs/adapter-static";

import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$atoms: "./src/lib/components/atoms",
			$molecules: "./src/lib/components/molecules",
			$organisms: "./src/lib/components/organisms",
			$templates: "./src/lib/components/templates",
			$pages: "./src/lib/components/pages",
			$routes: "./src/routes",
			$stores: "./src/lib/stores",
			$types: "./src/lib/types",
			$utils: "./src/lib/utils",
		},
	},
};

export default config;
