import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => {
    const { t } = useTranslation()
    return (
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
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
}
