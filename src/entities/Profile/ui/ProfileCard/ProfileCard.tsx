import { ModsType, classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'
import { Profile } from 'entities/Profile/model/types/profile'
import { Loader } from 'shared/ui/Loader'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text'
import { Avatar } from 'shared/ui/Avatar/ui/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    updateProfileFirstName?: (value?: string) => void
    updateProfileLastName?: (value?: string) => void
    updateProfileAge?: (value?: string) => void
    updateProfileCity?: (value?: string) => void
    updateProfileAvatar?: (value?: string) => void
    updateProfileUsername?: (value?: string) => void
    updateProfileCurrency?: (value?: Currency) => void
    updateProfileCountry?: (value?: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        updateProfileFirstName,
        updateProfileLastName,
        updateProfileAge,
        updateProfileCity,
        updateProfileAvatar,
        updateProfileUsername,
        updateProfileCurrency,
        updateProfileCountry
    } = props

    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={error}
                    text={t('Перезагрузите страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const mods: ModsType = {
        [cls.editing]: !readonly
    }

    return <div className={classNames(cls.ProfileCard, mods, [className])}>
        <div className={cls.data}>
            {data?.avatar && <div className={cls.avatarWrapper}>
                <Avatar src={data?.avatar} />
            </div>
            }
            <Input
                placeholder={t('Ваше имя')}
                value={data?.first}
                className={cls.input}
                readonly={readonly}
                onChange={updateProfileFirstName}
            />
            <Input
                placeholder={t('Ваша фамилия')}
                value={data?.lastname}
                className={cls.input}
                readonly={readonly}
                onChange={updateProfileLastName}
            />
            <Input
                placeholder={t('Ваш возраст')}
                value={data?.age}
                className={cls.input}
                readonly={readonly}
                onChange={updateProfileAge}
            />
            <Input
                placeholder={t('Ваш город')}
                value={data?.city}
                className={cls.input}
                readonly={readonly}
                onChange={updateProfileCity}
            />
            <Input
                placeholder={t('Ваш аватар')}
                value={data?.avatar}
                className={cls.input}
                readonly={readonly}
                onChange={updateProfileAvatar}
            />
            <Input
                placeholder={t('Ваше имя пользователя')}
                value={data?.username}
                className={cls.input}
                readonly={readonly}
                onChange={updateProfileUsername}
            />
            <CurrencySelect
                value={data?.currency}
                className={cls.input}
                readonly={readonly}
                onChange={updateProfileCurrency}
            />
            <CountrySelect
                value={data?.country}
                className={cls.input}
                readonly={readonly}
                onChange={updateProfileCountry}
            />
        </div>
    </div>
}
