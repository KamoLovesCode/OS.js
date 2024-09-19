const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // Replace OptimizeCSSAssetsPlugin

const mode = process.env.NODE_ENV || 'development';
const minimize = mode === 'production';
const plugins = [];

if (mode === 'production') {
  // We now use CssMinimizerPlugin to optimize and minimize CSS
  plugins.push(new CssMinimizerPlugin({
    minimizerOptions: {
      preset: [
        'default',
        { discardComments: { removeAll: true } },
      ],
    },
  }));
}

module.exports = {
  mode,
  devtool: 'source-map', // Keep source maps for easier debugging
  entry: [
    path.resolve(__dirname, 'index.js'),
  ],
  output: {
    library: 'osjsClient',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    sourceMapFilename: '[file].map',
    filename: '[name].js', // This works well if you have multiple entry points
  },
  optimization: {
    minimize,
    minimizer: [
      `...`, // Include default minimizers (like Terser for JS)
      new CssMinimizerPlugin() // Minimizes CSS in production
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    ...plugins
  ],
  module: {
    rules: [
      // Rule for images and fonts
      {
        test: /\.(svg|png|jpe?g|gif|webp|woff|woff2|ttf|eot)$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]', // Include hash in filename to avoid caching issues
              outputPath: 'assets/', // Save images/fonts in the 'assets' directory
              publicPath: 'assets/', // Update the public path for proper URL reference after build
            }
          }
        ]
      },
      // Rule for SCSS/CSS files
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, // Use style-loader in dev mode for HMR
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // Rule for JS files
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)\/(?!@osjs)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
