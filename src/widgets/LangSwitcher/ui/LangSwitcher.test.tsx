import React, { screen } from '@testing-library/react'
import { LangSwitcher } from './LangSwitcher'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('LangSwitcher', () => {
    test('exist LangSwitcher component', () => {
        // v.1
        // render(<LangSwitcher />)
        // v.2
        // const LangSwitcherComponent = withTranslation()(LangSwitcher)
        // render(<LangSwitcherComponent />)
        // v.3
        renderWithTranslation(<LangSwitcher />)
        expect(screen.getByTestId('langSwitcher')).toBeInTheDocument()
        screen.debug()
    })
})
