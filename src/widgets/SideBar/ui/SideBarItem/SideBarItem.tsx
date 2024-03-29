import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SideBarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { SideBarItemType } from 'widgets/SideBar/model/items'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

interface SideBarItemProps {
    item: SideBarItemType
    collapsed: boolean
}

export const SideBarItem = memo((props: SideBarItemProps) => {
    const { item, collapsed } = props
    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    )
})
