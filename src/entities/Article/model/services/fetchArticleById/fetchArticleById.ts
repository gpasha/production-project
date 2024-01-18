import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from '../../types/article'

export enum ProfileErrors {
    NOT_EXIST = 'Not exist such profile'
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Article>('/articles/' + articleId)
            console.log('response: ', response)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.log('error: ', error)
            return rejectWithValue(ProfileErrors.NOT_EXIST)
        }
    }
)
