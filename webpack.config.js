const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(gif|png|ico|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader','css-loader','sass-loader'],
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            //     exclude: /node_modules/,
            //     use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            //   }
        ],
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    performance: {
        hints: 'error',
        maxEntrypointSize: 580000,
        maxAssetSize: 580000,  
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },
};