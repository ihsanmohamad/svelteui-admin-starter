import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			optimizeDeps: {
				include: [production && '@carbon/charts'],
			},
			ssr: {
				noExternal: [production && '@carbon/charts', 'carbon-components'].filter(Boolean),
			},
		},
	}
};

export default config;
