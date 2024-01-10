import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ProfileErrors } from '../../types/profile'

describe('getProfileError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ProfileErrors.SERVER_ERROR]
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(['SERVER_ERROR'])
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
