import { Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider/index'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import { PageLoader } from 'widgets/PageLoader'

export const App = () => {
    return (
        <div className={classNames('app', { selected: true, hovered: false }, ['cls2', 'cls3'])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
