import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { User, userActions } from 'entities/User'
import { USER_LOCASTORAGE_KEY } from 'shared/consts/localstorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export enum LoginErrors {
    USERNAME_OR_PASSWORD = 'Not correct username or password'
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.post<User>('/login', authData)

            if (!response.data) {
                throw new Error()
            }

            const userData: User = {
                id: response?.data?.id,
                username: response?.data?.username
            }

            localStorage.setItem(USER_LOCASTORAGE_KEY, JSON.stringify(userData))

            dispatch(userActions.setAuthData(userData))

            // extra.navigate('/about')
            return response.data
        } catch (error) {
            console.log('error: ', error)
            return rejectWithValue(LoginErrors.USERNAME_OR_PASSWORD)
        }
    }
)
