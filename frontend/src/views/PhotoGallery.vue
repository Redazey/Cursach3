<template>
  <div class="photo-gallery">
    <h1 class="gallery-title">Фотогалерея ZooCure</h1>

    <Carousel :items-to-show="1" :autoplay="5000" :wrap-around="true">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel-item">
          <img :src="slide.image" :alt="slide.caption" />
          <div class="caption">{{ slide.caption }}</div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { photo1, photo2, photo3, photo4 } from '@/assets/photogallery'

// Данные для карусели
const slides = [
  { image: photo1, caption: 'Стоматология для животных' },
  { image: photo2, caption: 'Клиника для животных Ярославль' },
  { image: photo3, caption: 'Груминг домашних животных' },
  { image: photo4, caption: 'Наша современная клиника' },
]
</script>

<style scoped>
.photo-gallery {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.gallery-title {
  text-align: center;
  margin-bottom: 1.5rem;
}

.carousel-item {
  position: relative;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  color: white;
  text-align: center;
}

@media (max-width: 640px) {
  .carousel-item {
    height: 300px;
  }
}
</style>
