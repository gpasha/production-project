import type { Meta, StoryObj } from '@storybook/react'
import { SideBar } from './SideBar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'widgets/SideBar',
    component: SideBar,
    parameters: { /* layout: 'centered' */ },
    tags: ['autodocs']
} satisfies Meta<typeof SideBar>

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