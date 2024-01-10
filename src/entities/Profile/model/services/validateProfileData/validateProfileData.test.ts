import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { validateProfileData } from './validateProfileData'
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

describe('fetchProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(userData)

        expect(result).toEqual([])
    })

    test('without firstname and last name', async () => {
        const result = validateProfileData({
            ...userData,
            first: '',
            lastname: ''
        })

        expect(result).toEqual([ProfileErrors.INCORRECT_USERDATA])
    })

    test('without age', async () => {
        const result = validateProfileData({
            ...userData,
            age: undefined
        })

        expect(result).toEqual([ProfileErrors.INCORRECT_AGE])
    })

    test('incorrect country', async () => {
        const result = validateProfileData({
            ...userData,
            country: undefined
        })

        expect(result).toEqual([ProfileErrors.INCORRECT_COUNTRY])
    })

    test('without data', async () => {
        const result = validateProfileData()

        expect(result).toEqual([ProfileErrors.NO_DATA])
    })

    test('empty object', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ProfileErrors.INCORRECT_USERDATA,
            ProfileErrors.INCORRECT_AGE,
            ProfileErrors.INCORRECT_COUNTRY
        ])
    })
})
