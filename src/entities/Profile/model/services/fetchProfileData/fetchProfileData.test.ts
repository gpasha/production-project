import { fetchProfileData } from './fetchProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const userData = {
    first: 'Pavel',
    lastname: 'Glebik',
    age: 25,
    currency: Currency.BYN,
    country: Country.BELARUS,
    city: 'Minsk',
    username: 'PavelAdmin'
}

jest.mock('axios')

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data: userData }))
        const result = await thunk.callAsyncThunk()

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userData)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callAsyncThunk()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
