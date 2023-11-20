import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import Main from './Main'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'pages/Main',
    component: Main,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'User',
                password: '12345'
            }
        })
    ]
} satisfies Meta<typeof Main>

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
