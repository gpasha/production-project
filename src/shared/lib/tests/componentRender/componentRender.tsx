import { render } from '@testing-library/react'
import React, { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18nForTests'

interface RenderWithRouterOptions {
    initialRoute?: string
}

export const componentRender = (component: ReactNode, options: RenderWithRouterOptions = {}) => {
    const { initialRoute = '/' } = options
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
