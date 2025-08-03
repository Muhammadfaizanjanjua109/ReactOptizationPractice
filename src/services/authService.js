// src/services/authService.js
import { apiService } from './api'

export const authService = {
  login: async (credentials) => {
    try {
      const response = await apiService.post('/auth/login', credentials)
      return response.data
    } catch (error) {
      throw error
    }
  },

  register: async (userData) => {
    try {
      const response = await apiService.post('/auth/register', userData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  logout: async () => {
    try {
      await apiService.post('/auth/logout')
    } catch (error) {
      console.error('Logout error:', error)
    }
  },

  refreshToken: async () => {
    try {
      const response = await apiService.post('/auth/refresh')
      return response.data
    } catch (error) {
      throw error
    }
  }
}
