import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_API_TOKEN as string

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

interface ApiResponse {
  data: any
}

interface ErrorResponse {
  error: string
}

export const get = async (
  url: string
): Promise<ApiResponse | ErrorResponse> => {
  try {
    const response = await axiosInstance.get<ApiResponse>(url)
    return { data: response.data }
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unknown Error' }
  }
}
