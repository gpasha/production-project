import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs']
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        label: 'Select country',
        options: [
            {
                value: '123',
                content: '123'
            },
            {
                value: '1234',
                content: '1234'
            },
            {
                value: '12345',
                content: '12345'
            }
        ]
    }
}
