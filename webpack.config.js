module.exports = {
	entry: './app/app.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'jsx-loader' }
		]
	}
};