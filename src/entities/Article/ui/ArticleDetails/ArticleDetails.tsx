import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slices/ArticleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { memo, useEffect } from 'react'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetailsSelectors'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text'
import { Skeleton } from 'shared/ui/Skeleton'

interface ArticleDetailsProps {
    className?: string
    articleId: string
}

export const ArticleDetails = memo(({ className, articleId }: ArticleDetailsProps) => {
    const { t } = useTranslation('article')
    const dispath = useAppDispatch()
    let content

    // const isLoading = useSelector(getArticleDetailsIsLoading)
    const isLoading = true
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        )
    } else if (error) {
        content = (
            <Text
                title={t('Произошла ошибка при загрузке')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        )
    } else {
        content = (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {t('Детальная страница статьи')}
            </div>
        )
    }

    useEffect(() => {
        dispath(fetchArticleById(articleId))
    }, [dispath, articleId])

    return (
        <DynamicModuleLoader
            reducers={{ articleDetails: articleDetailsReducer }}
            removeAfterUnmount={true}
        >
            {content}
        </DynamicModuleLoader>
    )
})
