import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ProfileCard } from './ProfileCard'
import AvatarLink from 'shared/assets/tests/avatar-image.jpg'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const initData = {
    first: 'Pavel',
    lastname: 'Glebik',
    age: 25,
    currency: Currency.BYN,
    country: Country.BELARUS,
    city: 'Minsk',
    username: 'PavelAdmin',
    avatar: AvatarLink
}

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs']
} satisfies Meta<typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        data: initData
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
}

export const Dark: Story = {
    args: {
        data: initData
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const withLoading: Story = {
    args: {
        isLoading: true
    }
}

export const withError: Story = {
    args: {
        error: 'Ошибка'
    }
}
