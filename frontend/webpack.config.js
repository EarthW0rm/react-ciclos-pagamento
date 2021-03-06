const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = function(env) {

    return {
        entry: './src/index.jsx'
        , output:{
            path: __dirname + '/dist'
            , filename: './app-[hash].js'
        }
        ,performance: { hints: false }
        ,devServer:{
            port: 81
            , contentBase: './dist'
        }
        , resolve:{
            extensions: ['.js', '.jsx', '.scss', '.css', '.html', 'jpg']
            , alias: {
                mods: __dirname + '/node_modules'
            }
        }    
        , module: {
            rules: [
                {
                    test: /\.js[x]$/
                    , exclude: /(node_modules|bower_components)/
                    , use: [
                        {
                            loader: 'babel-loader'
                            , options: {
                                presets: ['es2015', 'react']
                                , plugins: ['transform-object-rest-spread']
                            }
                        }
                    ]
                }
                ,{
                    test: /\.css$/
                    , use: ExtractTextPlugin.extract({
                        use: [ 'css-loader']
                    })
                }
                ,{
                    test: /\.scss$/
                    , exclude: /(node_modules|bower_components)/
                    , use: ExtractTextPlugin.extract({
                        use: ['css-loader', 'sass-loader']
                    })
                }            
                ,{
                    test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/
                    , use: [
                        {
                        loader: "file-loader",
                        }
                    ]
                }
                
                ,{
                    test: /\.html$/
                    , exclude: /(node_modules|bower_components)/
                    , use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                    ]
                }
                ,{
                    test: /\.(png|jp(e*)g)$/,  
                    use: [{
                        loader: 'url-loader',
                        options: { 
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'dist/images/[hash]-[name].[ext]'
                        } 
                    }]
                }
            ]
        }
        , plugins: [
            new ExtractTextPlugin({
                filename: 'app-[hash].css'
                , allChunks: true
            })
            , new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html",
                favicon: 'src/app-icon.ico',
            })
            , new webpack.DefinePlugin({
                'process.env': {
                    'API_URL': JSON.stringify(env.API_URL)
                }
            })
            , new webpack.ProvidePlugin({
                $: 'mods/jquery/dist/jquery.js',
                jQuery: 'mods/jquery/dist/jquery.js',
                'window.jQuery': 'mods/jquery/dist/jquery.js'
            })
        ]
    }
};