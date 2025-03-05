import axios from 'axios'
import { defineStore } from 'pinia'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
})

export const useAppStore = defineStore('app', {
  state: () => ({
    news: [],
    employees: [],
    animals: [],
  }),
  
  getters: {
    getNews: (state) => {state.news},
    getEmployee: (state) => {state.employees},
    getAnimals: (state) => {state.animals},
  },
  
  actions: {
    async fetchNews() {
      try {
        const response = await api.get('news')
        this.news = response.data
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при получении данных:', err)
      } finally {
        this.loading = false
      }
    },
    async fetchEmployee() {
      try {
        const response = await api.get('employee')
        this.employees = response.data
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при получении данных:', err)
      } finally {
        this.loading = false
      }
    },
    async fetchAnimals() {
      try {
        const response = await api.get('animals')
        this.animals = response.data
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
        console.error('Ошибка при получении данных:', err)
      } finally {
        this.loading = false
      }
    }
  }
})