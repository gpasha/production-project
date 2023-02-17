import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'
import { AboutAsync } from './pages/About/AboutAsync'
import { MainAsync } from './pages/Main/MainAsync'
import { useTheme } from './themes/useTheme'
import { classNames } from './helpers/classNames/classNames'

export const App = () => {

    const { theme, toggleTheme } = useTheme()

    return <div className={classNames('app', { selected: true, hovered: false }, [theme, 'cls2', 'cls3'])}>
        <div>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
        <Link to='/'>Home</Link>
        {' / '}
        <Link to='/about'>About</Link>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path='/about' element={<AboutAsync />} />
                <Route path='/' element={<MainAsync />} />
            </Routes>
        </Suspense>
    </div>
}