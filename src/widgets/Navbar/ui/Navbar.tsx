import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.navLinks}>
            <AppLink
                to='/'
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
            >
                Home
            </AppLink>
            <AppLink
                to='/about'
                theme={AppLinkTheme.SECONDARY}
            >
                About
            </AppLink>
        </div>
    </div>
}
