import { About } from 'pages/About'
import { Main } from 'pages/Main'
import { NotFound } from 'pages/NotFound'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <Main />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <About />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.notFound,
        element: <NotFound />
    }
}
