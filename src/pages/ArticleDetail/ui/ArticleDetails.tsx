import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticleDetailsProps {
    className?: string
}

const ArticleDetails = ({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation('article')
    return <div className={classNames(cls.ArticleDetail, {}, [className])}>
        {t('Детальная страница статьи')}
    </div>
}

export default memo(ArticleDetails)
