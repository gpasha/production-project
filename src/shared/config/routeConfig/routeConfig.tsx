import { About } from 'pages/About'
import { Articles } from 'pages/Article'
import { ArticleDetails } from 'pages/ArticleDetail'
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
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    //
    NOT_FOUND = 'notFound'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // :id
    //
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
    [AppRoutes.ARTICLES]: {
        path: RoutePaths.articles,
        element: <Articles />,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: RoutePaths.article_details + ':id',
        element: <ArticleDetails />,
        authOnly: true
    },
    //
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.notFound,
        element: <NotFound />
    }
}
