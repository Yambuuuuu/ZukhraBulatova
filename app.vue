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
