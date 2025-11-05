<template>
  <div class="container">
    <h1>Welcome to ZB Project</h1>
    <p>This is the homepage of your project.</p>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Главная'
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
