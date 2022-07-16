import { sveltekit } from '@sveltejs/kit/vite';

const production = process.env.NODE_ENV === 'production';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
    optimizeDeps: {
        include: [production && '@carbon/charts'],
    },
    ssr: {
        noExternal: [production && '@carbon/charts', 'carbon-components'].filter(Boolean),
    },
};

export default config;
