import type { Preview } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    decorators: [
      StyleDecorator,
      ThemeDecorator(Theme.LIGHT),
      RouteDecorator
    ]
  }
}

export default preview
