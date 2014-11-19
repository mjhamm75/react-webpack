module.exports = {
	entry: './app/js/app.js',
	output: {
		filename: 'build/bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'jsx-loader' }
		]
	}
};