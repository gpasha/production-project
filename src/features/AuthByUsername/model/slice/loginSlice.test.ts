import { DeepPartial } from '@reduxjs/toolkit'
import { loginActions, loginReducer } from './loginSlice'
import { LoginSchema } from '../types/loginSchema'

describe('loginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'Username' }
        expect(
            loginReducer(
                (state as LoginSchema),
                loginActions.setUsername('Username1234')
            )
        ).toEqual({ username: 'Username1234' })
    })
    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '12345' }
        expect(
            loginReducer(
                (state as LoginSchema),
                loginActions.setPassword('123456789')
            )
        ).toEqual({ password: '123456789' })
    })
})
