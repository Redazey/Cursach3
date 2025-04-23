<template>
  <div class="feedback-container">
    <h1>Отзывы</h1>
    <FeedbacksList />
    <FeedbackTextArea />
  </div>
</template>

<script setup>
import FeedbacksList from '@/components/feedbacksList.vue'
import FeedbackTextArea from '@/components/feedbackTextArea.vue'
</script>
