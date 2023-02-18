import { Configuration } from 'webpack'
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths, isDev } = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(isDev)
        },
        resolve: buildResolvers(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        optimization: {
            runtimeChunk: 'single',
        },
    }
}