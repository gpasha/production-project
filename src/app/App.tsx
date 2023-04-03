import { Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider/index'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'


export const App = () => {

    const { theme } = useTheme()

    return (
        <div className={classNames('app', { selected: true, hovered: false }, [theme, 'cls2', 'cls3'])}>
            <Navbar />
            <Suspense fallback={<h1>Loading...</h1>}>
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
