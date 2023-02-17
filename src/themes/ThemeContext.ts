import { createContext } from 'react'

export const enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

export const LOCALSTORAGE_THEME_KEY = 'theme'

type ThemeContextProps = {
    theme?: Theme
    changeTheme?: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({})

export default ThemeContext