// var values = require('postcss-modules-values')


// // 插件，完整版的对css转化的操作【css-modules在typescript之下】
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {


    entry: "./src/components/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        extensions: ['.ts', ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // 原有的针对  tsx，转化为jsx，再转化为js的操作
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },

            // // 最新的，针对css转化的操作
            // {
            //     test: /\.css$/,
            //     loader:"style-loader!css-loader?modules"
            // },


            // 测试一下，完整版的对css转化的操作【css-modules在typescript之下】
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: {
            //             loader: 'style-loader',
            //             options: {
            //                 insertAt: 'top'
            //             }
            //         },
            //         use: [
            //             {
            //                 loader: 'typings-for-css-modules-loader',
            //                 options: {
            //                     modules: true,
            //                     namedExport: true,
            //                     camelCase: true,
            //                     minimize: true,
            //                     localIdentName: "[local]_[hash:base64:5]"
            //                 }
            //             },
            //         ]
            //     })
            // },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "typings-for-css-modules-loader",
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            minimize: true,
                            localIdentName: "[path][name]_____[local]---[hash:base64:8]"
                        }
                    },
                    // {
                    //     loader: "postcss-loader"
                    // },
                ]
            },
        ]
    },

    // 试验1
    // postcss: [
    //     values
    // ],


    // 试验3
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warning: false
    //         }
    //     })
    // ],


    // 试验4
    // optimization: {
    //     minimizer: [
    //       new UglifyJSPlugin({
    //         mangle: {
    //           keep_fnames: true,
    //         },
    //       }),
    //     ],
    //   },

    // 试验2
    // //  为了postcss-modules-values，新添加
    // plugins: [
    //     new webpack.LoaderOptionsPlugin({
    //         options: {
    //             postcss: [
    //                 values
    //             ],
    //         }
    //     })
    // ],



    // // 插件，完整版的对css转化的操作【css-modules在typescript之下】
    // plugins: [
    //     new ExtractTextPlugin({
    //         filename: (getPath) => {
    //             return getPath('../css/[name].css').replace('css/js', 'css');
    //         },
    //         allChunks: true
    //     }),
    // ],

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }


}