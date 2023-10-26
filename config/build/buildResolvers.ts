import type webpack from 'webpack'
import { type BuildPath } from './types/config'

export const buildResolvers = ({ src }: BuildPath): webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}
