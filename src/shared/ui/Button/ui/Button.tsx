import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'cleaInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    square?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        size = ButtonSize.M,
        square,
        children,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: square
    }

    return <button
        className={classNames(cls.Button, mods, [className])}
        {...otherProps}
    >
        {children}
    </button>
}
