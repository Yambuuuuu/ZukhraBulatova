<template>
  <div class="container">
    <h1>{{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2>
    <NuxtLink to="/">Вернуться на главную</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
h1 {
  font-size: 50px;
  color: #35495e;
}
h2 {
  margin-bottom: 20px;
}
</style>
