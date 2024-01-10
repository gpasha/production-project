import { About } from 'pages/About'
import { Main } from 'pages/Main'
import { NotFound } from 'pages/NotFound'
import { Profile } from 'pages/Profile'
import { type RouteProps } from 'react-router-dom'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'notFound'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <Main />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <About />
    },
    [AppRoutes.PROFILE]: {
        path: RoutePaths.profile,
        element: <Profile />,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.notFound,
        element: <NotFound />
    }
}
