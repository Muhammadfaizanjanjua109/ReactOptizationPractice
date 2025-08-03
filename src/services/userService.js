
// src/services/userService.js
import { apiService } from './api'

export const userService = {
  getUsers: async (params = {}) => {
    try {
      const response = await apiService.get('/users', { params })
      return response.data
    } catch (error) {
      throw error
    }
  },

  getUser: async (id) => {
    try {
      const response = await apiService.get(`/users/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  createUser: async (userData) => {
    try {
      const response = await apiService.post('/users', userData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  updateUser: async (id, userData) => {
    try {
      const response = await apiService.put(`/users/${id}`, userData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  deleteUser: async (id) => {
    try {
      const response = await apiService.delete(`/users/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  getProfile: async () => {
    try {
      const response = await apiService.get('/users/profile')
      return response.data
    } catch (error) {
      throw error
    }
  },

  updateProfile: async (profileData) => {
    try {
      const response = await apiService.put('/users/profile', profileData)
      return response.data
    } catch (error) {
      throw error
    }
  }
}