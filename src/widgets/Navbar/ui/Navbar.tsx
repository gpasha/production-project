import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.navLinks}>
            {/* <BugButton /> */}
        </div>
    </div>
}
