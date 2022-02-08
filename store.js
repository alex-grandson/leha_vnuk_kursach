import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { reptiloidAPI } from './pages/api/reptiloidAPI'

export const store = configureStore({
  reducer: {
    [reptiloidAPI.reducerPath]: reptiloidAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reptiloidAPI.middleware),
})

setupListeners(store.dispatch)