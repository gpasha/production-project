import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article/index'
import { useParams } from 'react-router-dom'

interface ArticleDetailsProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation('article')
    const { id: articleId } = useParams()

    if (!articleId) {
        return <div className={classNames(cls.ArticleDetail, {}, [className])}>
            {t('Статья не найдена')}
        </div>
    }

    return <div className={classNames(cls.ArticleDetail, {}, [className])}>
        <ArticleDetails articleId={articleId} />
    </div>
}

export default memo(ArticleDetailsPage)
