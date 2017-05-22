const path = require('path');

module.exports = {
    entry: './app/index.js',
    output:{
        filename: '../app.min.js',
        path: path.resolve(__dirname,'../dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    }
};