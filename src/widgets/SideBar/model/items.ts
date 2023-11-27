import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

export interface SideBarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SideBarItemsList: SideBarItemType[] = [
    {
        path: RoutePaths.main,
        text: 'Главная',
        Icon: MainIcon
    },
    {
        path: RoutePaths.about,
        text: 'О',
        Icon: AboutIcon
    },
    {
        path: RoutePaths.profile,
        text: 'Страница профиля',
        Icon: ProfileIcon,
        authOnly: true
    }
]
