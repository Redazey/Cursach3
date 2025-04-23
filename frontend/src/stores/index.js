import router from '@/router'
import { cookies_consts } from '@/utils/cookie_constants'
import { getCookie, setCookie } from '@/utils/cookieUtils'
import axios from 'axios'
import { defineStore } from 'pinia'

const BASE_URL = 'http://localhost:3001/'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
})

api.interceptors.request.use(
  (config) => {
    config.metadata = { startTime: new Date() }
    const token = getCookie(cookies_consts.jwt)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    const duration = new Date() - response.config.metadata.startTime
    console.log(`[${response.config.url}] ответ за ${duration} мс`)
    return response
  },
  (error) => {
    const duration = new Date() - error.config.metadata.startTime
    console.warn(`[${error.config.url}] ошибка за ${duration} мс`)
    return Promise.reject(error)
  }
)

export const useAppStore = defineStore('app', {
  state: () => ({
    news: [],
    employees: [],
    animals: [],
    feedbacks: [],
    jwtToken: null,
    loading: false,
    error: null,
  }),

  getters: {
    getNews: (state) => state.news,
    getEmployee: (state) => state.employees,
    getAnimals: (state) => state.animals,
    getFeedbacks: (state) => state.feedbacks,
    getJwtToken: (state) => state.jwtToken,
  },

  actions: {
    async fetchNews() {
      try {
        let { data } = await api.get('news')
        this.news = data
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при получении данных:', err)
      } finally {
        this.loading = false
      }
    },
    async createNews(newsData) {
      try {
        await api.post('news/create', newsData)
        await this.fetchNews()
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при отправки данных:', err)
      } finally {
        this.loading = false
      }
    },
    async deleteNews(id) {
      try {
        await api.post('news/delete/' + id)
        await this.fetchNews()
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при отправки данных:', err)
      } finally {
        this.loading = false
      }
    },

    async fetchEmployee() {
      try {
        let { data } = await api.get('employee')
        this.employees = data
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при получении данных:', err)
      } finally {
        this.loading = false
      }
    },
    async createEmployee(employeeData) {
      try {
        await api.post('employee/create', employeeData)
        await this.fetchEmployee()
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при отправки данных:', err)
      } finally {
        this.loading = false
      }
    },
    async deleteEmployee(id) {
      try {
        await api.post('employee/delete/' + id)
        await this.fetchEmployee()
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при отправки данных:', err)
      } finally {
        this.loading = false
      }
    },
    async fetchFeedbacks() {
      try {
        let { data } = await api.get('feedbacks')
        this.feedbacks = data
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при получении данных:', err)
      } finally {
        this.loading = false
      }
    },
    async createFeedback(createFeedback) {
      try {
        await api.post('feedbacks/create', createFeedback)
        await this.fetchFeedbacks()
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при отправки данных:', err)
      } finally {
        this.loading = false
      }
    },
    async deleteFeedback(id) {
      try {
        await api.post('feedbacks/delete/' + id)
        await this.fetchFeedbacks()
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при отправки данных:', err)
      } finally {
        this.loading = false
      }
    },
    async auth(authData) {
      try {
        let { data } = await api.post('auth', { ...authData })
        this.jwtToken = data
        setCookie(cookies_consts.jwt, data.jwtToken, 14)
        router.push(this.returnUrl || '/')
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при отправки данных:', err)
      } finally {
        this.loading = false
      }
    },
    fetchImage(path) {
      const normalizedPath = path.replace(/\\/g, '/')
      const url = new URL(normalizedPath, BASE_URL)
      return url.toString()
    },
    async createFile(file) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const { data } = await api.post('/file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        return data
      } catch (error) {
        console.error('Error creating user:', error)
      }
    },
  },
})
