import { memo, type ButtonHTMLAttributes, type FC, ReactNode } from 'react'
import { ModsType, classNames } from 'shared/lib/classNames/classNames'
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
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.M,
        square,
        disabled = false,
        children,
        ...otherProps
    } = props

    const mods: ModsType = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    return <button
        className={classNames(cls.Button, mods, [className])}
        disabled={disabled}
        {...otherProps}
    >
        {children}
    </button>
})
