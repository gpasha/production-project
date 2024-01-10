import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../type/user'
import { USER_LOCASTORAGE_KEY } from 'shared/consts/localstorage'

const initialState: UserSchema = {
  _inited: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const userData = localStorage.getItem(USER_LOCASTORAGE_KEY)
      if (userData) state.authData = JSON.parse(userData)
      state._inited = true
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCASTORAGE_KEY)
    }
  }
})

export const { actions: userActions, reducer: userReducer } = userSlice
