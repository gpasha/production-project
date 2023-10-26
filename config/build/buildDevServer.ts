import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { type BuildOptions } from './types/config'

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => {
    return {
        port,
        // static: './build', // if include - do not work i18n
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
