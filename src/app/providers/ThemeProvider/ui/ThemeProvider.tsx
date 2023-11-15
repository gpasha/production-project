import { type FC, useMemo, useState } from 'react'
import ThemeContext, { LOCALSTORAGE_THEME_KEY, Theme } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
  const changeTheme = (theme: Theme) => { setTheme(theme) }

  const defaultValues = useMemo(() => ({
    theme, changeTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultValues}>
      {children}
    </ThemeContext.Provider>
  )
}
