import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider/index'
import { About } from 'pages/About'
import { Main } from 'pages/Main'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

export const App = () => {

    const { theme } = useTheme()

    return <div className={classNames('app', { selected: true, hovered: false }, [theme, 'cls2', 'cls3'])}>
        <ThemeSwitcher />
        <Navbar />
        <AppRouter />
    </div>
}
