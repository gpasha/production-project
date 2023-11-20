import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from './Navbar'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: { /* layout: 'centered' */ },
    tags: ['autodocs'],
    decorators: [
        RouteDecorator,
        StoreDecorator({})
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

export const Auth: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: {
                authData: {}
            }
        })
    ]
}
