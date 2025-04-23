<template>
  <div class="news-container">
    <article class="news-card" v-if="jwtToken">
      <form @submit.prevent="addNews">
        <div class="file-upload">
          <h4>Изображение новости</h4>
          <img
            v-if="new_news.image_path != ''"
            @error="handleImageError"
            height="200px"
            :src="appStore.fetchImage(new_news.image_path)"
          />
          <input type="file" @change="onChange" accept=".jpg,.jpeg,.png" />
          <div v-if="new_news.image_path == ''">Файл не выбран</div>
        </div>
        <input
          v-model="new_news.title"
          type="text"
          required
          maxlength="50"
          placeholder="Заголовок статьи"
        />
        <textarea
          v-model="new_news.content"
          type="text"
          required
          maxlength="50"
          placeholder="Текст статьи"
        />
        <button type="submit">Добавить новость</button>
      </form>
    </article>
    <article class="news-card" v-for="n in news" :key="n.id">
      <img
        :src="appStore.fetchImage(n.image_path)"
        @error="handleImageError"
        height="200px"
        loading="lazy"
      />
      <h2>{{ n.title }}</h2>
      <h3>{{ n.content }}</h3>
      <label>Дата публикации: {{ n.publication_date }}</label>
      <button v-if="jwtToken" @click="deleteNews(n.id)">Удалить новость</button>
    </article>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import placeholderImg from '@/assets/news_placeholder.png'

const appStore = useAppStore()
const { news, jwtToken } = storeToRefs(appStore)

// Реактивный объект для формы
const new_news = ref({
  image_path: '',
  title: '',
  content: '',
})

const resetForm = () => {
  new_news.value = {
    image_path: '',
    title: '',
    content: '',
  }
}

const addNews = async () => {
  await appStore.createNews(new_news.value)
  resetForm()
}

const deleteNews = async (id) => {
  await appStore.deleteNews(id)
}

const onChange = async (e) => {
  const file = e.target.files[0]
  const uploadedFile = await appStore.createFile(file)
  new_news.value.image_path = uploadedFile.path
  console.log(uploadedFile.path)
}

const handleImageError = (e) => {
  e.target.src = placeholderImg
}

onMounted(async () => {
  await appStore.fetchNews()
})
</script>

<style>
.news-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}
@media (min-width: 1024px) {
  .news-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}
.news-card {
  text-align: center;
  box-shadow: 3px 3px 5px var(--color-border);
  border: 1px var(--color-border) solid;
  background-color: var(--vt-c-white);
  color: var(--color-text);
  min-height: fit-content;
}
.news-card h2 {
  font-weight: bolder;
}
</style>
