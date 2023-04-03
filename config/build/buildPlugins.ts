import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildPath } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugins = (path: BuildPath, isDev: boolean): webpack.WebpackPluginInstance[] => {

    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: path.html
    })

    const progressPlugin = new webpack.ProgressPlugin()

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
    })

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev)
    })

    return [
        htmlWebpackPlugin,
        progressPlugin,
        miniCssExtractPlugin,
        definePlugin
    ]
}