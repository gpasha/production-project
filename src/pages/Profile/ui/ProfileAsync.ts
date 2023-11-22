import { lazy } from 'react'

export const ProfileAsync = lazy(async () => await import('./Profile'))
