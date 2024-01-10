import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'

const initState = {
    loginForm: {
        username: 'User',
        password: '12345',
        isLoading: false
    }
}

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    decorators: [
        RouteDecorator,
        StoreDecorator(initState)
    ]
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
}

export const withErrorLight: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                ...initState.loginForm,
                error: 'Error message...'
            }
        })
    ]
}

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                ...initState.loginForm,
                isLoading: true
            }
        })
    ]
}
