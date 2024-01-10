import { useContext } from 'react'
import ThemeContext, { LOCALSTORAGE_THEME_KEY, Theme } from './ThemeContext'

interface ThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): ThemeResult => {
    const { theme, changeTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        let updatedTheme: Theme
        switch (theme) {
            case Theme.DARK:
                updatedTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                updatedTheme = Theme.ORANGE
                break
            case Theme.ORANGE:
                updatedTheme = Theme.DARK
                break
            default:
                updatedTheme = Theme.LIGHT
                break
        }
        changeTheme?.(updatedTheme)
        document.body.className = updatedTheme
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, updatedTheme)
    }

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    }
}
