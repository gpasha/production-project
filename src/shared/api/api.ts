import axios from 'axios'
import { USER_LOCASTORAGE_KEY } from 'shared/consts/localstorage'

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCASTORAGE_KEY) ?? ''
    }
})
