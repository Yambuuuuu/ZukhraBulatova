<template>
	<div class="layout">
		<Header />
		<main class="main-content">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup>
import Header from '~/components/UI/Header.vue'
import Footer from '~/components/UI/Footer.vue'
</script>

<style lang="stylus">
.layout
  min-height: 100vh
  display: flex
  flex-direction: column

.main-content
  flex: 1

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
