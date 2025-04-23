<template>
  <form @submit.prevent="sendForm" class="form">
    <div class="form-group">
      <label for="login">login</label>
      <input
        id="login"
        v-model="auth.login"
        type="text"
        required
        maxlength="50"
        placeholder="login"
      />
    </div>

    <div class="form-group">
      <label for="password">password</label>
      <input
        id="password"
        v-model="auth.password"
        type="text"
        required
        maxlength="50"
        placeholder="password"
      />
    </div>

    <button type="submit" :disabled="!isFormValid">Войти</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores'

const appStore = useAppStore()

// Реактивный объект для формы
const auth = ref({
  login: '',
  password: '',
})

// Валидация формы
const isFormValid = computed(() => {
  return auth.value.login.trim().length > 0 && auth.value.password.trim().length > 0
})

// Метод сброса формы
const resetForm = () => {
  auth.value = {
    login: '',
    password: '',
  }
}

const sendForm = async () => {
  await appStore.auth(auth.value)
  resetForm()
}
</script>
