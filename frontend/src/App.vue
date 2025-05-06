<script setup>
import { RouterLink, RouterView } from 'vue-router'
import employeeList from '@/components/employeeList.vue'
</script>

<template>
  <div class="app-container">
    <div class="header-container">
      <header>
        <RouterLink to="/auth">
          <img alt="logo" src="@/assets/logo.png" width="100px" />
        </RouterLink>
        <h1>Ветеринарная клиника - Zoo Cure</h1>

        <div class="wrapper">
          <nav>
            <RouterLink to="/">Новости</RouterLink>
            <RouterLink to="/photoGallery">Фотогаллерея</RouterLink>
            <RouterLink to="/aboutUs">О нас</RouterLink>
            <RouterLink to="/contactUs">Контакты</RouterLink>
            <RouterLink to="/feedback">Отзывы</RouterLink>
          </nav>
        </div>
      </header>
      <h1>Наши врачи</h1>
      <div class="horizontalScroll">
        <employeeList />
      </div>
    </div>
    <main>
      <RouterView />
    </main>
    <footer>
      <h5>
        Доверьте здоровье вашего питомца профессионалам нашей ветклиники "ZooCure" – мы всегда рядом, когда нужна
        ветеринарная помощь.
      </h5>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header-container {
  height: 40%;
  color: var(--color-text-white);
  text-align: center;
  place-items: center;
  background-image: url(@/assets/background.png);
  background-position: top;
  background-size: cover;
}
header {
  gap: 40px;
  padding: 20px;
  line-height: 1.5;
}
.horizontalScroll {
  width: 100%;
  overflow-x: auto;
}

nav {
  width: 100%;
  font-size: 18pt;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text-white);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-background-mute);
}

nav a:first-of-type {
  border: 0;
}

main {
  padding: 50px 100px;
  flex: 1;
}

footer {
  min-height: 10vh;
  text-align: center;
  padding-top: 15px;
  font-size: 18pt;
  color: var(--color-background);
  background-color: var(--vt-c-text-light-2);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: row;
    place-items: center;
  }

  nav {
    display: inline;
    margin-left: -1rem;
    font-size: 1.3rem;
    font-weight: bolder;
  }
}
</style>
