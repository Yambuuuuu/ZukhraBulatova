<template>
  <div class="error-container">
    <h1>{{ error.statusCode === 404 ? 'Страница не найдена' : 'Произошла ошибка' }}</h1>
    <p>{{ error.message }}</p>
    <button @click="handleError">Вернуться на главную</button>
  </div>
</template>

<script setup>
// В Nuxt 4 обработка ошибок изменилась
const props = defineProps({
  error: Object
})

const router = useRouter()

const handleError = () => {
  router.push('/')
}
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  min-height: 70vh;
}

h1 {
  font-size: 3rem;
  color: #e74c3c;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

button {
  padding: 0.75rem 2rem;
  background-color: #3b8070;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2c6157;
}
</style>
