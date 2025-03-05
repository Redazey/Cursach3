<template>
  <div class="employee-container">
    <article class="employee-card" v-for="employee in employees" :key="employee.id">
      <h4>
        {{
          `${employee.first_name} ${employee.last_name} ${employee.middle_name != null ? employee.middle_name : ''} `
        }}
      </h4>
      <h5>{{ employee.email }}</h5>
      <h5>{{ employee.phone }}</h5>
    </article>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const appStore = useAppStore()
const { employees } = storeToRefs(appStore)

onMounted(async () => {
  await appStore.fetchEmployee()
})
</script>

<style>
.employee-container {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px;
  margin-left: 10px;
}
.employee-card {
  height: 150px;
}
.employee-card h4 {
  font-weight: bolder;
}
</style>
