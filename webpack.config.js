const path = require("path");

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"},
                    
                ]
            },{
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {loader: "url-loader"},
                    {loader: "img-loader"},
                ],
            }
        ]
    },
};