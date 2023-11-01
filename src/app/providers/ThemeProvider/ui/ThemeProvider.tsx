import { type FC, useMemo, useState } from 'react'
import ThemeContext, { LOCALSTORAGE_THEME_KEY, Theme } from '../lib/ThemeContext'

const initTheme = localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(initTheme)
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
