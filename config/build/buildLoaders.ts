import type webpack from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
    const SVGLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const scssLoader = buildCssLoader(isDev)

    const typescriptPlugin = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    return [
        typescriptPlugin,
        scssLoader,
        SVGLoader,
        fileLoader
    ]
}
