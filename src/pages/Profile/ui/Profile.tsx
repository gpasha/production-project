import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useEffect } from 'react'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileCard, fetchProfileData, getProfileForm, getProfileError, getProfileIsLoading, getProfileReadonly, profileActions, profileReducer, getProfileValidateErrors } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text'
import { ProfileErrors } from 'entities/Profile/model/types/profile'

interface ProfileProps {
    className?: string
}

const initReducers = {
    profile: profileReducer
}

const Profile = memo(({ className }: ProfileProps) => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorTranslates = {
        [ProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
        [ProfileErrors.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ProfileErrors.INCORRECT_USERDATA]: t('Имя и Фамилия обязательны'),
        [ProfileErrors.NO_DATA]: t('Данные не указаны'),
        [ProfileErrors.SERVER_ERROR]: t('Ошибка сервера')
    }

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData())
        }
    }, [dispatch])

    const updateProfileFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value ?? '' }))
    }, [dispatch])

    const updateProfileLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value ?? '' }))
    }, [dispatch])

    const updateProfileAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: value ? Number(value) : 0 }))
    }, [dispatch])

    const updateProfileCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value ?? '' }))
    }, [dispatch])

    const updateProfileAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
    }, [dispatch])

    const updateProfileUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value ?? '' }))
    }, [dispatch])

    const updateProfileCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency: currency ?? Currency.BYN }))
    }, [dispatch])

    const updateProfileCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country: country ?? Country.BELARUS }))
    }, [dispatch])

    return <DynamicModuleLoader reducers={initReducers} removeAfterUnmount>
        <div className={classNames('', {}, [className])}>
            <ProfilePageHeader isLoading={isLoading} />
            {validateErrors?.length && validateErrors.map(err => (
                <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslates[err]} />
            ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                updateProfileFirstName={updateProfileFirstName}
                updateProfileLastName={updateProfileLastName}
                updateProfileAge={updateProfileAge}
                updateProfileCity={updateProfileCity}
                updateProfileAvatar={updateProfileAvatar}
                updateProfileUsername={updateProfileUsername}
                updateProfileCurrency={updateProfileCurrency}
                updateProfileCountry={updateProfileCountry}
            />
        </div>
    </DynamicModuleLoader>
})

export default Profile
