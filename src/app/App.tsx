import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider/index'
import { About } from 'pages/About'
import { Main } from 'pages/Main'

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
                <Route path='/about' element={<About />} />
                <Route path='/' element={<Main />} />
            </Routes>
        </Suspense>
    </div>
}