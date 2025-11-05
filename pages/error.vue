<template>
  <div class="container">
    <h1>{{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2>
    <nuxt-link to="/">Вернуться на главную</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
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
