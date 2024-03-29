import type { Meta, StoryObj } from '@storybook/react'
import { SideBar } from './SideBar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'widgets/SideBar',
    component: SideBar,
    parameters: { /* layout: 'centered' */ },
    tags: ['autodocs'],
    decorators: [
        RouteDecorator,
        StoreDecorator({
            user: {}
        })
    ]
} satisfies Meta<typeof SideBar>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
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

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {}
            }
        })
    ]
}

export const NoAuth: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}
