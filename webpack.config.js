const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[hash:12].js",
    chunkFilename: "[name].[hash:10].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          }
          // { loader: "postcss-loader" }
        ]
      },
      {
        test: /\.less$/,
        exclude: path.resolve(__dirname, "./src/components/App.less"),
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "less-loader",
            options: {
              // modifyVars: {
              //   "primary-color": "#1DA57A",
              //   "link-color": "#1DA57A",
              //   "border-radius-base": "2px"
              // },
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, "./src/components/App.less"),
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "less-loader",
            options: {
              // modifyVars: {
              //   "primary-color": "#1DA57A",
              //   "link-color": "#1DA57A",
              //   "border-radius-base": "2px"
              // },
              javascriptEnabled: true
            }
          }
          // {
          //   loader: "postcss-loader"
          // }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          reuseExistingChunk: true
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};
