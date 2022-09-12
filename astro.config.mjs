import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import preprocess from "svelte/types/compiler/preprocess";

// https://astro.build/config

const defaultOptions =
{
	preprocess: [
		preprocess({
			scss: {
				renderSync: true,
			},
			typescript: true,
		})
	]
};
export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte(defaultOptions)],
});
