<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    <h2>{{ error.message }}</h2>
    <NuxtLink to="/" class="home-link">Вернуться на главную</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  min-height: 60vh;
}

h1 {
  font-size: 3rem;
  color: #e74c3c;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.home-link {
  padding: 0.75rem 2rem;
  background-color: #3b8070;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #2c6157;
}
</style>
