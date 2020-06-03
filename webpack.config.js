const path = require('path');


module.exports = {
    mode: "development",
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
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader",
                loader: "css-loader",
            }


        ]
    }

}