// src/store/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    currentUser: null,
    filters: {
      search: '',
      status: 'all',
      role: 'all',
    },
    pagination: {
      page: 1,
      limit: 10,
      total: 0,
    },
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id)
      if (index !== -1) {
        state.users[index] = action.payload
      }
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload)
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload }
    },
    clearUsers: (state) => {
      state.users = []
      state.currentUser = null
    },
  },
})

export const {
  setUsers,
  addUser,
  updateUser,
  removeUser,
  setCurrentUser,
  setFilters,
  setPagination,
  clearUsers,
} = userSlice.actions

export default userSlice.reducer