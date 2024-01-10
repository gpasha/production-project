import { type Configuration } from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'

export function buildWebpackConfig (options: BuildOptions): Configuration {
    const { mode, paths, isDev, apiUrl, project } = options
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(paths, isDev, apiUrl, project),
        module: {
            rules: buildLoaders(isDev)
        },
        resolve: buildResolvers(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    }
}
