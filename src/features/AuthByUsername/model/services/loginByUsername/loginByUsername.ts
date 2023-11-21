import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import { USER_LOCASTORAGE_KEY } from 'shared/consts/localstorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export enum LoginErrors {
    USERNAME_OR_PASSWORD = 'Not correct username or password'
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error()
            }

            const userData: User = {
                id: response?.data?.id,
                username: response?.data?.username
            }

            localStorage.setItem(USER_LOCASTORAGE_KEY, JSON.stringify(userData))

            thunkAPI.dispatch(userActions.setAuthData(userData))

            return response.data
        } catch (error) {
            console.log('error: ', error)
            return thunkAPI.rejectWithValue(LoginErrors.USERNAME_OR_PASSWORD)
        }
    }
)
