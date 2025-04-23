<template>
  <div class="feedback-container">
    <article class="feedback-card" v-for="fb in feedbacks" :key="fb.id">
      <h3>Имя: {{ fb.nickname }}</h3>
      <p>{{ fb.feedback_text }}</p>
      <button v-if="jwtToken" @click="deleteFeedbackClick(fb.id)">Удалить</button>
    </article>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const appStore = useAppStore()
const { feedbacks, jwtToken } = storeToRefs(appStore)

const deleteFeedbackClick = async(id) => {
  
}

onMounted(async () => {
  await appStore.fetchFeedbacks()
})
</script>

<style>
.feedback-card {
  width: 50%;
  padding: 10px;
  color: var(--color-text-white);
}
.feedback-card h3 {
  border-bottom: 1px var(--color-background-mute) solid;
  margin-bottom: 20px;
}
.feedback-container {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
</style>