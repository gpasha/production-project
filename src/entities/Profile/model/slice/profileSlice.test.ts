import { ProfileErrors, ProfileSchema } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initData = {
    first: 'Pavel',
    lastname: 'Glebik',
    age: 25,
    currency: Currency.BYN,
    country: Country.BELARUS,
    city: 'Minsk',
    username: 'PavelAdmin'
}

describe('profileSlice', () => {
    test('setReadOnly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(
            profileReducer(
                (state as ProfileSchema),
                profileActions.setReadOnly(true)
            )
        ).toEqual({ readonly: true })
    })

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data: initData, form: { username: '' } }
        expect(
            profileReducer(
                (state as ProfileSchema),
                profileActions.cancelEdit()
            )
        ).toEqual({
            readonly: true,
            data: initData,
            form: initData
         })
    })

    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'OldUsername' } }
        expect(
            profileReducer(
                (state as ProfileSchema),
                profileActions.updateProfile({ username: 'NewUsername' })
            )
        ).toEqual({
            form: { username: 'NewUsername' }
         })
    })

    test('updateProfile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ProfileErrors.SERVER_ERROR]
        }
        expect(
            profileReducer(
                (state as ProfileSchema),
                updateProfileData.pending
            )
        ).toEqual({
            isLoading: true,
            validateErrors: undefined
         })
    })

    test('updateProfile service fulfild', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        }
        expect(
            profileReducer(
                (state as ProfileSchema),
                updateProfileData.fulfilled(initData, '')
            )
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            data: initData,
            form: initData
         })
    })
})
