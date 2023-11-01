import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.navLinks}>
            <AppLink
                to='/'
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
            >
                {t('Главная')}
            </AppLink>
            <AppLink
                // eslint-disable-next-line i18next/no-literal-string
                to='/about'
                theme={AppLinkTheme.SECONDARY}
            >
                {t('О')}
            </AppLink>
        </div>
    </div>
}
