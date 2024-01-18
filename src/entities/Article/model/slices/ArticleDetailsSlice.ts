import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { Article } from '../types/article'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  data: undefined,
  error: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // FETCH Profile Data
    .addCase(fetchArticleById.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
    })
    .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false
        state.data = action.payload
    })
    .addCase(fetchArticleById.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
    })
  }
})

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice
