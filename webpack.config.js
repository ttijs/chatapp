const path = require('path');


module.exports = {
    mode: "development",
    entry: {
        main: './src/main.js',
        },
    output: {
        path: path.join(__dirname, 'public/assets'),
    },
}