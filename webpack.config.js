var webpack = require("webpack");
var path = require("path");
module.exports = {
	entry: "./app/app.js",
	output: {
		path: path.join(__dirname, "assets"),
		publicPath: "assets/",
		filename: "web.js",
		sourceMapFilename: "[id].[hash].map",
		chunkFilename: "[id].[hash].js",
		jsonpCallback: "a"
	},
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json-loader" },
			{ test: /\.jade$/, loader: "jade-loader" },
			{ test: /\.css$/,  loader: "style-loader!css-loader" },
			{ test: /\.less$/,  loader: "style-loader!css-loader!less-loader" },
			{ test: /\.png$/,  loader: "url-loader?limit=5000&minetype=image/png" }
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	amd: {
		jQuery: true
	},
	cache: true
};