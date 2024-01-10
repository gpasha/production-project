import { getUserInited } from 'entities/User'
import { Suspense, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

export const AppRouter = memo(() => {
    const { t } = useTranslation()

    const inited = useSelector(getUserInited)

    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<h1><PageLoader /></h1>}>
                <div className='page-wrapper'>
                    {route.element}
                </div>
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route?.authOnly
                        ? <RequireAuth>{element}</RequireAuth>
                        : element
                }
            />
        )
    }, [])

    return (
        <Routes>
            {inited && Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
})
