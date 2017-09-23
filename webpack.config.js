var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function (env) {

    var hmrMode = env ? env.hmr === true : false;

    var port = '9898';
    var baseUrl = hmrMode ? 'http://localhost:' + port + '/' : '';

    var config = {
        entry: {
            app: [
                "./src/app/app.module.ts"
            ]
        },
        output: {
            path: __dirname,
            filename: 'dist/js/[name].bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template:'./index.template.ejs',
                inject: true    
            })
        ],
        resolve: {
            extensions: [ '.ts', '.tsx', ".js", ".json"]
        },
        module: {
            rules: [
                { test: /\.ts$/, loaders: ['ts-loader'] }, //configuration in tsconfig.json
                { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015'], compact: false } },
                { test: /\.html$/, loader: 'html-loader' },
                { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
                { test: /\.(gif|jpg|png|ico)$/, loader: 'url-loader', options: { limit: 65000, name: './dist/assets/[name].[ext]' } },
                { test: /\.svg$/, loader: 'url-loader', options: { limit: 65000, mimetype: 'image/svg+xml', name: './dist/assets/[name].[ext]' } },
                { test: /\.woff$/, loader: 'url-loader', options: { limit: 65000, mimetype: 'application/font-woff', name: './dist/fonts/[name].[ext]' } },
                { test: /\.woff2$/, loader: 'url-loader', options: { limit: 65000, mimetype: 'application/font-woff2', name: './dist/fonts/[name].[ext]' } },
                { test: /\.[ot]tf$/, loader: 'url-loader', options: { limit: 65000, mimetype: 'application/octet-stream', name: './dist/fonts/[name].[ext]' } },
                { test: /\.eot$/, loader: 'url-loader', options: { limit: 65000, mimetype: 'application/vnd.ms-fontobject', name: './dist/fonts/[name].[ext]' } },
                { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] },
            ]
        }
    };

    if(hmrMode){ //Hot Module Replacement mode
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
        config.output.publicPath = baseUrl; 
        //config.devtool = 'source-map'; 
        config.devServer = {
            inline: true,
            port: port,
            hot: true
        };
    } 

    return config;
};