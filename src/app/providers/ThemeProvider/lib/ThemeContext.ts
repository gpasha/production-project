import { createContext } from 'react'

export const enum Theme {
    DARK = 'app_dark_theme',
    LIGHT = 'app_light_theme'
}

export const LOCALSTORAGE_THEME_KEY = 'theme'

interface ThemeContextProps {
    theme?: Theme
    changeTheme?: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({})

export default ThemeContext
