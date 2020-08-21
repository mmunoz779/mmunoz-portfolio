module.exports = {
    publicPath: "/",
    outputDir: "docs",
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        devServer: {
            allowedHosts: [
                'www.mmunoz.space',
                'localhost',
                '127.0.0.1',
                '::1',
                '192.168.1.50'
            ]
        }
    }
}