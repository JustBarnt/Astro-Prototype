import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import preprocess from "svelte-preprocess";
// https://astro.build/config

export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte({
		preprocess: [
			preprocess({
				scss: {
					prependData: `@import './src/sass/variables.scss';`,
					renderSync:true,
				}
			}),
		],
	})],
});
