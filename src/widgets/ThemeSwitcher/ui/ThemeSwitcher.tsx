import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <LightThemeIcon /> : <DarkThemeIcon />}
        </Button>
    )
}