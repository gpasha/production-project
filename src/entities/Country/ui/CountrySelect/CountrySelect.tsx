import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select'
import { SelectOptions } from 'shared/ui/Select/ui/Select'
import { memo, useCallback } from 'react'
import { Country } from '../../model/types/country'

interface CountrySelectProps {
    readonly?: boolean
    className?: string
    value?: Country
    onChange?: (value: Country) => void
}

const countryOptions: SelectOptions[] = [
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.POLAND, content: Country.POLAND },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.USA, content: Country.USA }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { readonly, className, value, onChange } = props
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return <Select
        readonly={readonly}
        className={classNames('', {}, [className])}
        label={t('Выбери страну')}
        options={countryOptions}
        value={value}
        onChange={onChangeHandler}
    />
})
