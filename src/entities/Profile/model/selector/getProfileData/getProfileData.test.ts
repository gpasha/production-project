import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const initData = {
    first: 'Pavel',
    lastname: 'Glebik',
    age: 25,
    currency: Currency.BYN,
    country: Country.BELARUS,
    city: 'Minsk',
    username: 'PavelAdmin'
}

describe('getProfileData', () => {
    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: initData
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(initData)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
