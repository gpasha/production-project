import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions, type BuildPath } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const buildPlugins = (
    path: BuildPath, isDev: boolean, apiUrl: string, project: BuildOptions['project']
): webpack.WebpackPluginInstance[] => {
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: path.html
    })

    const progressPlugin = new webpack.ProgressPlugin()

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
    })

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
        __API__: JSON.stringify(apiUrl),
        __PROJECT__: JSON.stringify(project)
    })

    // const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({ openAnalyzer: false })

    const plugins = []

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
    }

    return [
        htmlWebpackPlugin,
        progressPlugin,
        miniCssExtractPlugin,
        definePlugin,
        // bundleAnalyzerPlugin,
        ...plugins
    ]
}
