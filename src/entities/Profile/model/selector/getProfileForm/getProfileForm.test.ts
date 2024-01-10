import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const initData = {
    first: 'Pavel',
    lastname: 'Glebik',
    age: 25,
    currency: Currency.BYN,
    country: Country.BELARUS,
    city: 'Minsk',
    username: 'PavelAdmin'
}

describe('getProfileForm', () => {
    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: initData
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(initData)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
