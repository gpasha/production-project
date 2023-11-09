import { type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator = (StoryComponent: StoryFn) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
)
