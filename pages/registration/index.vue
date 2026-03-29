<template>
  <div class="container">
    <h1>О проекте</h1>
    <p>Это тестовая страница для проверки работы маршрутизации.</p>
    <NuxtLink to="/">Вернуться на главную</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'О проекте'
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
