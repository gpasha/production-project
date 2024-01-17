import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Articles.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlesProps {
    className?: string
}

const Articles = ({ className }: ArticlesProps) => {
    const { t } = useTranslation('article')
    return <div className={classNames(cls.Article, {}, [className])}>
        {t('Статья')}
    </div>
}

export default memo(Articles)
