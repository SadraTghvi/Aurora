// types
import { Configuration } from 'webpack'

// styles
import { BuildStyle } from './config/style'

// plugins
import HtmlWP from 'html-webpack-plugin'

// path
import { resolve } from 'path'
import { APP_DIR, PUBLIC_DIR } from './config/path'

// Main configs
import Main from './main'

const BuildConfig: Configuration = {
    ...Main,
    mode: 'production',
    module: {
        rules: [...Main.module!.rules!, BuildStyle],
    },
    plugins: [
        ...Main.plugins!,
        new HtmlWP({
            filename: resolve(PUBLIC_DIR, 'index.html'),
            template: resolve(APP_DIR, 'template/index.html'),
            inject: true,
            publicPath: '/dist/',
        }),
    ],
    optimization: {
        emitOnErrors: false,
        chunkIds: 'deterministic',
        minimize: true,
        splitChunks: {
            chunks: 'all',
            maxSize: 200000,
        },
    },
}

export default BuildConfig
