module.exports = {
    
    entry: "./src/app.js",
    output: {
        path: 'deploy',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
            
        ],
        
    }
};