/* eslint-disable react/display-name */
import { ModsType, classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autofocus?: boolean
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props

    const inputRef = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [curetPosition, setCuretPosition] = useState(0)

    const isShowedCaret = isFocused && !readonly

    const onFocus = () => {
        setIsFocused(true)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onSelect = (e: any) => {
        setCuretPosition(e?.target?.selectionStart || 0)
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (typeof value === 'number' && !e.target.value.match(/^\d+$/)) {
            return
        }
        onChange?.(e.target.value)
        setCuretPosition(e.target.value.length)
    }

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            inputRef.current?.focus()
        }
    }, [autofocus])

    const mods: ModsType = {
        [cls.readonly]: readonly
    }

    return <div className={classNames(cls.InputWrapper, mods, [className])}>
        {placeholder && <div className={cls.placeholder}>
            {placeholder + ' >'}
        </div>}
        <div className={cls.caretWrapper}>
            <input
                ref={inputRef}
                type={type}
                value={value}
                onChange={changeHandler}
                className={cls.input}
                onFocus={onFocus}
                onBlur={onBlur}
                onSelect={onSelect}
                readOnly={readonly}
                {...otherProps}
            />
            {isShowedCaret && <span
                className={cls.caret}
                style={{ left: `${curetPosition * 9.6}px` }}
            />}
        </div>
    </div>
})
