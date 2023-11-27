import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  form: undefined,
  error: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
    // FETCH Profile Data
    .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
    })
    .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
    })
    .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
    })
    // UPDATE Profile Data
    .addCase(updateProfileData.pending, (state, action) => {
      state.error = undefined
      state.isLoading = true
    })
    .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
        state.readonly = true
    })
    .addCase(updateProfileData.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
    })
  }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
