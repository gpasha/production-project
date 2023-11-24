import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selector/getProfileData/getProfileData'
import { getProfileIsLoading } from '../../model/selector/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selector/getProfileError/getProfileError'
import { Text } from 'shared/ui/Text/ui/Text'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    return <div className={classNames(cls.ProfileCard, {}, [className])}>
        <div className={cls.header}>
            <Text title={t('Профиль')} className={cls.title} />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.editBtn}
            >
                {t('Редактировать')}
            </Button>
        </div>
        <div className={cls.data}>
            <Input
                placeholder={t('Ваше имя')}
                value={data?.first}
                className={cls.input}
            />
            <Input
                placeholder={t('Ваша фаамилия')}
                value={data?.lastname}
                className={cls.input}
            />
        </div>
    </div>
}
