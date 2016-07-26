module.exports = {
    entry  : './src/main.js',
    output : {
        path     : __dirname,
        filename : 'myaccount.dist.js'
    },
    module : {
        loaders: [ { 
                test   : /.js$/,
                loader : 'babel-loader' 
            }
        ]
    }
};