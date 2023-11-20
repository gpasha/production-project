import { Suspense, useEffect } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import { PageLoader } from 'widgets/PageLoader'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

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
