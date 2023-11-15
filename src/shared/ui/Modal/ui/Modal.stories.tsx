import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Text...'
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
}

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Text...',
        className: 'app_dark_theme'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}
