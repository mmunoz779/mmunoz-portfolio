const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    outputDir: "docs",
    publicPath: process.env.NODE_ENV === "production" ? "/mmunoz-portfolio" : "/",
    configureWebpack: config => {
        // config.resolve = {alias: {'vue$': 'vue/dist/vue.esm.js'}};
        if (process.env.NODE_ENV === 'production') {
            config.devtool = '#source-map';
            // http://vue-loader.vuejs.org/en/workflow/production.html
            config.plugins = (config.plugins || []).concat([
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: '"production"'
                    }
                }),
                new webpack.LoaderOptionsPlugin({
                    minimize: true,
                    minimizer: [new TerserPlugin({
                        cache: true,
                        parallel: true,
                        minify: (file, sourceMap) => {
                            const extractedComments = [];

                            // Custom logic for extract comments

                            const { map, code } = require('terser')
                                .minify(file, {
                                    compress: { toplevel: true}
                                });

                            return { map, code, extractedComments };
                        }
                    })]
                })
            ]);
        } else {
            config.devServer = {
                allowedHosts: [
                    'www.mmunoz.space',
                    'localhost',
                    '127.0.0.1',
                    '::1',
                    '192.168.1.50'
                ]
            };
        }
    }
}