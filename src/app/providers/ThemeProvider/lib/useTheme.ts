import { useContext } from 'react'
import ThemeContext, { LOCALSTORAGE_THEME_KEY, Theme } from './ThemeContext'

type ThemeResult = {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): ThemeResult => {
    const { theme, changeTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const updatedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        changeTheme(updatedTheme)
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, updatedTheme)
    }

    return {
        theme,
        toggleTheme
    }
}