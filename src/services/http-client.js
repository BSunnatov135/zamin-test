import axios from 'axios'
import {  QueryClient } from 'react-query'
export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_V1,
})

export const requestAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_V2,
})

const errorHandler = (error) => {
  console.log('error', error)
  if (error && error.response) {
  }

  return Promise.reject(error.response)
}

// request.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${
//       store.getState().common.accessToken
//     }`
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

request.interceptors.response.use((response) => {
  return response.data.data
}, errorHandler)
requestAuth.interceptors.response.use((response) => response.data, errorHandler)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})