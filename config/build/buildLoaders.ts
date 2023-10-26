import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'

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

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__local--[hash:base64:8]' : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ]
    }

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
