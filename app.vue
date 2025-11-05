<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
// Базовый app.vue файл для Nuxt 4
</script>

<style lang="stylus">
@import "/styles/mixins.styl"
@import "/styles/normalize.styl"
@import "/styles/fonts.styl"
@import "/styles/variables.styl"
@import "/styles/global.styl"

.container
  margin: 0 auto
  max-width: 1200px
  padding: 0 20px

.page-container
  margin: 0 auto
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center
</style>
