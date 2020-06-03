const path = require('path');


module.exports = {
    mode: "development",
    watch: true,
    entry: {
        main: './src/main.js',
        },
    output: {
        path: path.join(__dirname, 'public/assets'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ]
            },

        ]
    }

}