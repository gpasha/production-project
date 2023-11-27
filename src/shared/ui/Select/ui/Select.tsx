import { ModsType, classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    readonly?: boolean
    className?: string
    label?: string
    options?: SelectOptions[]
    value?: string
    onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
    const { readonly, className, label, options, value, onChange } = props

    const optionsList = useMemo(() => (
        options?.map(opt => (
            <option
                key={opt.value}
                value={opt.value}
                className={cls.option}
            >
                {opt.content}
            </option>
        ))
    ), [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const mods: ModsType = {}

    return <div className={classNames(cls.wrapper, mods, [className])}>
        {label && <span className={cls.label}>{label + ' >'}</span>}
        <select
            disabled={readonly}
            className={cls.select}
            value={value}
            onChange={onChangeHandler}
        >
            {optionsList}
        </select>
    </div>
})
