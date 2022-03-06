// types
// import { Configuration } from 'webpack'

// styles
import { DevStyle } from './config/style'

// path
import { APP_DIR } from './config/path'
import { resolve } from 'path'

// plugins
import HtmlWP from 'html-webpack-plugin'

// base configs
import Main from './main'

const BACKEND = 'http://localhost:8000'

const DevConfig = {
    ...Main,
    mode: 'development',
    module: {
        rules: [...Main.module!.rules!, DevStyle],
    },
    plugins: [
        ...Main.plugins!,
        new HtmlWP({
            filename: 'index.html',
            template: resolve(APP_DIR, 'template/index.html'),
            inject: true,
            publicPath: '/',
            minify: false,
        }),
    ],
    devtool: 'source-map',
    devServer: {
        port: 8000,
        hot: true, // true = full reload
        historyApiFallback: true,
        compress: true,
        client: {
            logging: 'none',
            reconnect: 7,
        },
        proxy: {
            '/api': BACKEND,
            '/m': BACKEND,
            '/s': BACKEND,
            '/favicon.ico': BACKEND,
            '/admin': BACKEND,
        },
    },
}

export default DevConfig
