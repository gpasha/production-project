import { getUserAuthData } from 'entities/User'
import { Suspense, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = memo(() => {
    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => (
        Object.values(routeConfig).filter(route => !(route.authOnly && !isAuth))
    ), [isAuth])

    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={
                    <div className='page-wrapper'>
                        <Suspense fallback={<h1><PageLoader /></h1>}>
                            {element}
                        </Suspense>
                    </div>
                } />
            ))}
        </Routes>
    )
})
