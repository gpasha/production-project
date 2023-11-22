import { Counter } from 'entities/Counter'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const Main = memo(() => {
    const { t } = useTranslation('main')
    return (
        <>
            <div>{t('Главная страница')}</div>
            <Counter />
        </>
    )
})

export default Main
