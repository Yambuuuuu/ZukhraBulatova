<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
import { useThemeStore } from '~/stores/theme'
import { onMounted } from 'vue'

// Инициализация темы
const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})

useSeoMeta({
  title: 'Zukhra Bulatova',
  ogTitle: 'Zukhra Bulatova',
  description: 'Сайт Зухры Булатовой',
  ogDescription: 'Сайт Зухры Булатовой',
  ogImage: '/svg/logo.svg',
})
</script>

<style lang="stylus">
@import "/styles/mixins.styl"
@import "/styles/normalize.styl"
@import "/styles/fonts.styl"
@import "/styles/variables.styl"
@import "/styles/global.styl"

.container {
	margin 0 auto
	width: 100%
	padding: 0 var(--side-padding)
	overflow visible
	max-width: calc(var(--container-width) + var(--side-padding) * 2)

	+below(1025px) {
		padding: 0 var(--side-mobile-padding)
	}
}

</style>
