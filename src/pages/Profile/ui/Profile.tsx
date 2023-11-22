import { classNames } from 'shared/lib/classNames/classNames'
// import cls from './Profile.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

interface ProfileProps {
    className?: string
}

const initReducers = {
    profile: profileReducer
}

const Profile = memo(({ className }: ProfileProps) => {
    const { t } = useTranslation()
    return <DynamicModuleLoader reducers={initReducers} removeAfterUnmount>
        <div className={classNames('', {}, [className])}>
            {t('Страница профиля')}
        </div>
    </DynamicModuleLoader>
})

export default Profile
