/**
 * ============================================
 * API Utility — Axios Instance
 * ============================================
 * 
 * Centralized Axios instance with:
 *   - Base URL configuration
 *   - Request/response interceptors
 *   - Auth token injection
 *   - Error formatting
 * 
 * All API calls in the app go through this instance
 * for consistent behavior and error handling.
 */

import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  // In production, this would be the deployed backend URL
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — attach auth token if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('admin-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — normalize error messages
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong';
    
    return Promise.reject({ message, status: error.response?.status });
  }
);

export default api;
