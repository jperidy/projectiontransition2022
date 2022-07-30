module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parser: "@babel/eslint-parser",
	parserOptions: {
		requireConfigFile: false,
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	babelOptions: {
		plugins: ['@babel/plugin-syntax-import-assertions'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
