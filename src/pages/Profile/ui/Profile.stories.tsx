import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import Profile from './Profile'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarLink from 'shared/assets/tests/avatar-image.jpg'

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
    title: 'pages/Profile',
    component: Profile,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({
            profile: {
                form: initData
                // isLoading: true,
                // readonly: true
            }
        })
    ]
} satisfies Meta<typeof Profile>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT)
        // StoreDecorator({
        //     profile: {
        //         form: initData,
        //         isLoading: false,
        //         readonly: true
        //     }
        // })
    ]
}

// export const Dark: Story = {
//     args: {},
//     decorators: [
//         ThemeDecorator(Theme.DARK)
//     ]
// }
