import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { updateProfileData } from './updateProfileData'
import { ProfileErrors } from '../../types/profile'

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

describe('updateProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: userData
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ data: userData }))
        const result = await thunk.callAsyncThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userData)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: userData
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callAsyncThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ProfileErrors.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...userData,
                    lastname: ''
                }
            }
        })
        const result = await thunk.callAsyncThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ProfileErrors.INCORRECT_USERDATA])
    })
})
