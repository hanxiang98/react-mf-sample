const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = options => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      publicPath: "auto",
      uniqueName: "mfe4"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
        {
          test: /\.css$/, // Regex to test for .css files
          use: ['style-loader', 'css-loader'], // Loaders to handle CSS files
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          use: ['url-loader?limit=100000']
        }
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        
        // For remotes (please adjust)
        name: "react",
        library: { type: "var", name: "react" },
        filename: "remoteEntry.js", // <-- Meta Data
        exposes: {
            './web-components': './src/App.js',
        },        
        shared: ["react", "react-dom", "react-router-dom"]
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './*.html'
          }
        ]
      })
    ],
    devServer: {
      port: 3000
    }
  }
}
