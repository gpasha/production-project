import { counterActions, counterReducer } from './CounterSlice'

describe('CounterSlice', () => {
    test('increment', () => {
        const state = { value: 10 }
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
    })
    test('decrement', () => {
        const state = { value: 10 }
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
    })
    test('increment without state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
    })
    test('decrement without state', () => {
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 })
    })
})
