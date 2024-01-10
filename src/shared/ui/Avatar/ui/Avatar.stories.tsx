import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarLink from 'shared/assets/tests/avatar-image.jpg'

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {},
    tags: ['autodocs']
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        src: AvatarLink,
        size: 150
    }
}

export const Small: Story = {
    args: {
        src: AvatarLink,
        size: 50
    }
}
