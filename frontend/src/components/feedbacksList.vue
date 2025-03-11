<template>
  <div class="feedback-container">
    <article class="feedback-card" v-for="fb in feedbacks">
      <h4>Имя: {{ fb.nickname }}</h4>
      <h5>{{ fb.feedback_text }}</h5>
    </article>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const appStore = useAppStore()
const { feedbacks } = storeToRefs(appStore)

onMounted(async () => {
  await appStore.fetchFeedbacks()
})
</script>

<style>
.feedback-card {
  min-width: fit-content;
  width: 50%;
  padding: 10px;
  color: var(--color-text-white);
}
.feedback-card h4 {
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