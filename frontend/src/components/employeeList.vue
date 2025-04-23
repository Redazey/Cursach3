<template>
  <div class="employee-container">
    <article class="employee-card" v-if="jwtToken">
      <form @submit.prevent="sendForm" class="form">
        <div class="form-group">
          <div class="file-upload">
            <img
              v-if="new_employee.image_path != ''"
              @error="handleImageError"
              height="150px"
              :src="appStore.fetchImage(new_employee.image_path)"
            />
            <input type="file" @change="onChange" accept=".jpg,.jpeg,.png" />
            <div v-if="new_employee.image_path == ''">Файл не выбран</div>
          </div>
          <input
            id="firstname"
            v-model="new_employee.first_name"
            type="text"
            required
            maxlength="50"
            placeholder="Имя"
          />
          <input
            id="lastname"
            v-model="new_employee.last_name"
            type="text"
            required
            maxlength="50"
            placeholder="Фамилия"
          />
          <input
            id="middlename"
            v-model="new_employee.middle_name"
            type="text"
            maxlength="50"
            placeholder="Отчество"
          />
          <input
            id="email"
            v-model="new_employee.email"
            type="email"
            maxlength="50"
            placeholder="E-mail"
          />
          <input
            id="phone"
            v-model="new_employee.phone"
            type="text"
            maxlength="50"
            placeholder="Phone"
          />
        </div>
        <button type="submit" :disabled="!isFormValid">Добавить</button>
      </form>
    </article>
    <article class="employee-card" v-for="employee in employees" :key="employee.id">
      <img
        :src="appStore.fetchImage(employee.image_path)"
        @error="handleImageError"
        height="150px"
        loading="lazy"
      />
      <h2>
        {{
          `${employee.first_name} ${employee.last_name} ${employee.middle_name != null ? employee.middle_name : ''}`
        }}
      </h2>
      <h3>{{ employee.email }}</h3>
      <h3>{{ employee.phone }}</h3>
      <button v-if="jwtToken" @click="deleteEmployeeClick(employee.id)">Удалить</button>
    </article>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import placeholderImg from '@/assets/news_placeholder.png'

const appStore = useAppStore()
const { employees, jwtToken } = storeToRefs(appStore)

// Реактивный объект для формы
const new_employee = ref({
  image_path: '',
  first_name: '',
  last_name: '',
  middle_name: '',
  email: '',
  phone: '',
})

const onChange = async (e) => {
  const file = e.target.files[0]
  const uploadedFile = await appStore.createFile(file)
  new_employee.value.image_path = uploadedFile.path
}

const handleImageError = (e) => {
  e.target.src = placeholderImg
}

onMounted(async () => {
  await appStore.fetchEmployee()
})

const deleteEmployeeClick = async (id) => {
  await appStore.deleteEmployee(id)
}

const resetForm = () => {
  new_employee.value = {
    image_path: '',
    first_name: '',
    last_name: '',
    middle_name: '',
    email: '',
    phone: '',
  }
}
const isFormValid = computed(() => {
  return (
    new_employee.value.first_name.trim().length > 0 &&
    new_employee.value.last_name.trim().length > 0 &&
    new_employee.value.middle_name.trim().length > 0 &&
    new_employee.value.email.trim().length > 0 &&
    new_employee.value.phone.trim().length > 0
  )
})
const sendForm = async () => {
  await appStore.createEmployee(new_employee.value)
  resetForm()
}
</script>

<style>
.employee-card input {
  background-color: transparent;
  border: 0px;
  border-radius: 0px;
  color: var(--color-text-white);
  border-bottom: 1px var(--color-background-mute) solid;
}

.employee-container {
  background-color: transparent;
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px;
  margin-left: 10px;
}

.employee-card {
  height: 100%;
}

.employee-card h2 {
  font-weight: bolder;
}
</style>
