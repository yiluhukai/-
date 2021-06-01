module.exports = {
	presets: [
		[
			'@babel/env',
			{
				useBuiltIns: 'usage',
				corejs: {
					version: 3
				}
			}
		],
		'@babel/typescript'
	]
}
