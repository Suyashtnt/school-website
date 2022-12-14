import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		importAssets({
			sources: (defSrc) => [
				...defSrc,
				{
					tag: 'Image',
					srcAttributes: ['src']
				}
			]
		}),
		preprocess(),
	],

	kit: {
		adapter: adapter({
			edge: true
		})
	}
};

export default config;
