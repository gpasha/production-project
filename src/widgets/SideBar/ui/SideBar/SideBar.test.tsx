import React, { fireEvent, screen } from '@testing-library/react'
import { SideBar } from './SideBar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('SideBar', () => {
    test('exist SideBar component', () => {
        // v.1
        // render(<SideBar />)
        // v.2
        // const SideBarComponent = withTranslation()(SideBar)
        // render(<SideBarComponent />)
        // v.3
        renderWithTranslation(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()
    })

    test('test toggle', () => {
        renderWithTranslation(<SideBar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        screen.debug()

    })
})
