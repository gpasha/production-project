import { classNames } from 'shared/lib/classNames/classNames'
// import cls from './Profile.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useEffect } from 'react'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfileProps {
    className?: string
}

const initReducers = {
    profile: profileReducer
}

const Profile = memo(({ className }: ProfileProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return <DynamicModuleLoader reducers={initReducers} removeAfterUnmount>
        <div className={classNames('', {}, [className])}>
            <ProfileCard />
        </div>
    </DynamicModuleLoader>
})

export default Profile
