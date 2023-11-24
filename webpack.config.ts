import path from 'path'
import { type Configuration } from 'webpack'
import 'webpack-dev-server'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildOptions } from './config/build/types/config'

export default (env: BuildEnv) => {
    const mode = env.mode || 'development'
    const PORT = env.port || 3030

    const isDev = mode === 'development'
    const apiUrl = env.apiUrl || 'http://localhost:8000'

    const configurationOptions: BuildOptions = {
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src')
        },
        isDev,
        port: PORT,
        apiUrl
    }

    const config: Configuration = buildWebpackConfig(configurationOptions)

    return config
}
