import path from 'path'
import { Configuration } from 'webpack'
import 'webpack-dev-server'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildOptions } from './config/build/types/config'

export default (env: BuildEnv) => {


    const mode = env.mode || 'development'
    const PORT = env.port || 3030

    const isDev = mode === 'development'

    const configurationOptions: BuildOptions = {
        mode: mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html')
        },
        isDev,
        port: PORT
    }

    const config: Configuration = buildWebpackConfig(configurationOptions)

    return config
}