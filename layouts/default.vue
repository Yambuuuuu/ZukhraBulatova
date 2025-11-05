<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/" class="nav-link">Главная</NuxtLink>
        <NuxtLink to="/about" class="nav-link">О проекте</NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>© {{ new Date().getFullYear() }} ZB Project</p>
    </footer>
  </div>
</template>

<script setup>
// В Nuxt 3+ не требуется объявлять name для layout
</script>

<style>
header {
  padding: 20px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
}

nav {
  display: flex;
  justify-content: center;
}

.nav-link {
  margin: 0 15px;
  color: #3b8070;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
