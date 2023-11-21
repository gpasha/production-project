import axios from 'axios'
import { LoginErrors, loginByUsername } from './loginByUsername'
// import { Dispatch } from '@reduxjs/toolkit'
// import { StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

// v.1 (without TestAsyncThunk class)
// describe('loginByUsername', () => {
//     let dispatch: Dispatch
//     let getState: () => StateSchema

//     beforeEach(() => {
//         dispatch = jest.fn()
//         getState = jest.fn()
//     })

//     test('success login', async () => {
//         const userData = {
//             id: '123',
//             username: 'Username'
//         }
//         mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))
//         const action = loginByUsername({
//             username: 'Username',
//             password: '123'
//         })
//         const result = await action(dispatch, getState, undefined)

//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
//         expect(dispatch).toHaveBeenCalledTimes(3)
//         expect(mockedAxios.post).toHaveBeenCalled()
//         expect(result.meta.requestStatus).toBe('fulfilled')
//         expect(result.payload).toEqual(userData)
//     })

//     test('error login', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
//         const action = loginByUsername({
//             username: 'Username',
//             password: '123'
//         })
//         const result = await action(dispatch, getState, undefined)
//         expect(dispatch).toHaveBeenCalledTimes(2)
//         expect(mockedAxios.post).toHaveBeenCalled()
//         expect(result.meta.requestStatus).toBe('rejected')
//         expect(result.payload).toEqual(LoginErrors.USERNAME_OR_PASSWORD)
//     })
// })

// v.2 (with TestAsyncThunk class)
describe('loginByUsername', () => {
    test('success login', async () => {
        const userData = {
            id: '123',
            username: 'Username'
        }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callAsyncThunk({
            username: 'Username',
            password: '123'
        })
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userData)
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callAsyncThunk({
            username: 'Username',
            password: '123'
        })
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual(LoginErrors.USERNAME_OR_PASSWORD)
    })
})
