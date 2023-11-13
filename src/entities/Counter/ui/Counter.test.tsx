import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'
import { fireEvent, screen } from '@testing-library/react'

describe('Counter', () => {
    test('Shoud be counter value', () => {
        componentRender(
            <Counter />,
            {
                initialState: {
                    counter: {
                        value: 10
                    }
                }
            }
        )
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
    })
    test('Increment', () => {
        componentRender(
            <Counter />,
            {
                initialState: {
                    counter: {
                        value: 10
                    }
                }
            }
        )
        fireEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
    })
    test('Decrement', () => {
        componentRender(
            <Counter />,
            {
                initialState: {
                    counter: {
                        value: 10
                    }
                }
            }
        )
        fireEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
    })
})
