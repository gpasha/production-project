import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './SideBar.module.scss'
import { useTranslation } from 'react-i18next'

interface SideBarProps {
    className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button
                data-testid='sidebar-toggle'
                onClick={() => { setCollapsed(prev => !prev) }}
            >
                {t('Свернуть')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>)
}
