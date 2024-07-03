import { vi } from 'vitest'

vi.mock('./apiService', () => {
  return {
    interceptors: {
      request: {
        use: vi.fn((onFulfilled: (config: any) => any) => {
          const mockConfig = {
            headers: {
              Authorization: 'Bearer mocked_token',
            },
          }
          return Promise.resolve(onFulfilled(mockConfig))
        }),
      },
    },
  }
})
