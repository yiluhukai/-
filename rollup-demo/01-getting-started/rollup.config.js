// @ts-check
/**
 *
 * @type {import("rollup").RollupOptions}
 */
module.exports = {
	input: './src/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife'
	}
}
