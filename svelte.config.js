import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$actions: 'src/actions',
			$constants: 'src/constants',
			$database: 'src/database',
			$routes: 'src/routes',
			$services: 'src/services',
			$utils: 'src/utils',
			$src: 'src'
		}
	}
};

export default config;
