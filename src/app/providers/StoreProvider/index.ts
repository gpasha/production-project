import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore, AppDispatch } from './config/store'
import { type StateSchema } from './config/StateSchema'
import { ReduxStoreWithManager, ThunkConfig } from './config/StateSchema'

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type ReduxStoreWithManager,
    type AppDispatch,
    type ThunkConfig
}
