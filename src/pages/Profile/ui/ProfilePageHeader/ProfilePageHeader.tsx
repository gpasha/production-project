import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback } from 'react'

interface ProfilePageHeaderProps {
    className?: string
    isLoading?: boolean
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className, isLoading } = props
    const { t } = useTranslation('profile')

    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileReadonly)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
        <Text
            title={t('Профиль')}
            className={cls.title}
        />
        {readonly
            ? <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.editBtn}
                onClick={onEdit}
                disabled={isLoading}
            >
                {t('Редактировать')}
            </Button>
            : <><Button
                theme={ButtonTheme.OUTLINE_RED}
                className={cls.editBtn}
                onClick={onCancelEdit}
                disabled={isLoading}
            >
                {t('Отменить')}
            </Button>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.saveBtn}
                    onClick={onSave}
                    disabled={isLoading}
                >
                    {t('Сохранить')}
                </Button>

            </>
        }
    </div>
}
