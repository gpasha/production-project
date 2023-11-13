import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const Main = () => {
    const { t } = useTranslation('main')
    return (
        <>
            <div>{t('Главная страница')}</div>
            <Counter />
        </>
    )
}
export default Main
