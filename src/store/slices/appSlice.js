
// src/store/slices/appSlice.js
import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    settings: {
      language: 'en',
      timezone: 'UTC',
      dateFormat: 'MM/DD/YYYY',
      currency: 'USD',
    },
    cache: {},
    lastActivity: null,
    version: '1.0.0',
  },
  reducers: {
    updateSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload }
    },
    setCache: (state, action) => {
      state.cache[action.payload.key] = {
        data: action.payload.data,
        timestamp: Date.now(),
      }
    },
    clearCache: (state, action) => {
      if (action.payload) {
        delete state.cache[action.payload]
      } else {
        state.cache = {}
      }
    },
    updateLastActivity: (state) => {
      state.lastActivity = Date.now()
    },
    resetApp: (state) => {
      state.cache = {}
      state.lastActivity = null
    },
  },
})

export const {
  updateSettings,
  setCache,
  clearCache,
  updateLastActivity,
  resetApp,
} = appSlice.actions

export default appSlice.reducer