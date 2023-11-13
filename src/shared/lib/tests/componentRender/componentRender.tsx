import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18nForTests'
import { DeepPartial } from '@reduxjs/toolkit'

interface RenderWithRouterOptions {
    initialRoute?: string
    initialState?: DeepPartial<StateSchema>
}

export const componentRender = (component: ReactNode, options: RenderWithRouterOptions = {}) => {
    const { initialRoute = '/', initialState } = options
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
