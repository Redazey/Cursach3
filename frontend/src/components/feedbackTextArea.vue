<template>
  <form @submit.prevent="sendForm" class="form">
    <div class="form-group">
      <label for="nickname">Никнейм</label>
      <input
        id="nickname"
        v-model="feedback.nickname"
        type="text"
        required
        maxlength="50"
        placeholder="Введите ваше имя"
      />
    </div>

    <div class="form-group">
      <label for="feedback-text">Текст отзыва</label>
      <textarea
        id="feedback-text"
        v-model="feedback.feedback_text"
        required
        maxlength="500"
        placeholder="Введите ваш отзыв"
      ></textarea>
    </div>

    <button type="submit" :disabled="!isFormValid">Отправить отзыв</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores'

const appStore = useAppStore()

// Реактивный объект для формы
const feedback = ref({
  nickname: '',
  feedback_text: '',
})

// Валидация формы
const isFormValid = computed(() => {
  return feedback.value.nickname.trim().length > 0 && feedback.value.feedback_text.trim().length > 0
})

// Метод сброса формы
const resetForm = () => {
  feedback.value = {
    nickname: '',
    feedback_text: '',
  }
}

const sendForm = async () => {
  await appStore.createFeedback(feedback.value)
  resetForm()
}
</script>
