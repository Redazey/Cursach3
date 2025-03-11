<template>
  <div class="news-container">
    <article class="news-card" v-for="n in news" :key="n.id">
      <img :src="n.image_path" @error="handleImageError" height="200px" loading="lazy" />
      <h4>{{ n.title }}</h4>
      <h5>{{ n.content }}</h5>
      <h5>{{ n.publication_date }}</h5>
    </article>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import placeholderImg from '@/assets/news_placeholder.png'

const appStore = useAppStore()
const { news } = storeToRefs(appStore)

const handleImageError = (event) => {
  event.target.src = placeholderImg
}

onMounted(async () => {
  await appStore.fetchNews()
})
</script>

<style>
.news-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.news-card {
  text-align: center;
  box-shadow: 3px 3px 5px var(--color-border);
  border: 1px var(--color-border) solid;
  background-color: var(--vt-c-white);
  color: var(--color-text);
  min-height: fit-content;
}
.news-card h4 {
  font-weight: bolder;
}
</style>
