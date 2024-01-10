import webpack from 'webpack'
import { type BuildPath } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    // eslint-disable-next-line no-param-reassign
    if (config.module?.rules) {
        config.module.rules = config?.module?.rules?.map((rule: any) => {
            // if ((rule.test as string).includes('svg')) {
            // eslint-disable-next-line @typescript-eslint/prefer-includes
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i }
            }
            return rule
        })
    }

    config.module?.rules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    })

    config.module?.rules?.push(buildCssLoader(true))

    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(config.mode === 'development'),
            __API__: '',
            __PROJECT__: JSON.stringify('storybook')
        })
    )

    return config
}
