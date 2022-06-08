import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/list'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
