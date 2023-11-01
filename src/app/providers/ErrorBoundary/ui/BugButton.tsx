import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

export const BugButton = () => {
    const { t } = useTranslation()
    const [isError, setIsError] = useState(false)

    const throwError = () => {
        setIsError(prev => !prev)
    }

    useEffect(() => {
        if (isError) throw new Error()
    }, [isError])

    return <Button onClick={throwError}>
        {t('Выбросить ошибку')}
    </Button>
}
