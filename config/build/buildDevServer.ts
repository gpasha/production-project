import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => {
    return {
        port: port,
        // static: './build', // if include - do not work i18n 
        open: true,
        historyApiFallback: true
    }
}