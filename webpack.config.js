const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    home: "./src/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./assets/[name].js"
  },
  mode: "production",

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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              sources:true
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.(sa|sc)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./assets/images",
              name: "[name].[ext]"
            }
          }
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts"
            }
          }
        ]
      }
    ]
  },

  externals: {
    jquery: "jQuery"
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      filename: "style.css"
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["home", "vendors"]
    }),
    




  ],
  devtool: "",
  devServer: {
    contentBase: path.join(__dirname, "dist")
  }
};