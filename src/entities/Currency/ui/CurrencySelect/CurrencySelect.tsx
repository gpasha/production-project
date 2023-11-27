import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select'
import { SelectOptions } from 'shared/ui/Select/ui/Select'
import { memo, useCallback } from 'react'
import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
    readonly?: boolean
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
}

const currencyOptions: SelectOptions[] = [
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { readonly, className, value, onChange } = props
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return <Select
        readonly={readonly}
        className={classNames('', {}, [className])}
        label={t('Выбери валюту')}
        options={currencyOptions}
        value={value}
        onChange={onChangeHandler}
    />
})
