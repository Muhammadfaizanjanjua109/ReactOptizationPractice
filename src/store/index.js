// src/store/index.js
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import uiSlice from './slices/uiSlice'
import appSlice from './slices/appSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    ui: uiSlice,
    app: appSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})