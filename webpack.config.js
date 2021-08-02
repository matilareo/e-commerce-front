const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: ["babel-polyfill", "./src/index.jsx"],
    resolve: {
        alias: {
            Actions: path.resolve(__dirname, "src/actions/"),
            Components: path.resolve(__dirname, "src/components/"),
            Containers: path.resolve(__dirname, "src/containers/"),
            Assets: path.resolve(__dirname, "src/assets/"),
            Util: path.resolve(__dirname, "src/util/"),
            Pages: path.resolve(__dirname, "src/pages/"),
            Constants: path.resolve(__dirname, "src/constants/"),
            Helpers: path.resolve(__dirname, "src/helpers/"),
            Api: path.resolve(__dirname, "src/api/"),
            // Apollo: path.resolve(__dirname, 'src/apollo'),
            // Queries: path.resolve(__dirname, 'src/apollo/queries'),
            Services: path.resolve(__dirname, "src/services"),
            CustomHooks: path.resolve(__dirname, "src/custom-hooks"),
            Store: path.resolve(__dirname, "src/store"),
        },
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                //Order matters!
                test: /\.(c|sc|sa)ss$/,
                use: [
                    "style-loader", //5. inject CSS to page
                    "css-loader", //4. translates CSS into CommonJS modules
                    "sass-loader", //1. compiles Sass to CSS
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|png|jpg|gif|jpeg)$/,
                use: {
                    loader: "url-loader",
                },
            },
        ],
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "./build"),
        filename: "[name].[contenthash].js",
    },
    // devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "./build"),
        port: 8000,
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            inject: "body",
            favicon: "./src/assets/logo_icon.png",
        }),
    ],
};
