import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from './Navbar'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: { /* layout: 'centered' */ },
    tags: ['autodocs'],
    decorators: [
        RouteDecorator
    ]
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}
