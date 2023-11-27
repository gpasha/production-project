import { ModsType, classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { useTranslation } from 'react-i18next'
import { CSSProperties, memo, useMemo } from 'react'

interface AvatarProps {
    src?: string
    className?: string
    size?: number
    alt?: string
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, size, alt } = props
    const { t } = useTranslation()
    const mods: ModsType = {}

    const styles = useMemo<CSSProperties>(() => ({
        width: size ?? 100,
        height: size ?? 100
    }), [size])

    return <img
        alt={alt ?? ''}
        src={src}
        className={classNames(cls.Avatar, mods, [className])}
        style={styles}
    />
})
