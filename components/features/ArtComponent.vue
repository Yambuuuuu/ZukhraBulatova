<template>
	<div class="art">
		<img class="art-line" :src="themeStore.isDark ? $asset('/svg/about-line-light.svg') : $asset('/svg/about-line-dark.svg')" alt="">
		<img class="art-center" :src="$asset('/svg/about-center-decor.svg')" alt="">
		<img class="art-line" :src="themeStore.isDark ? $asset('/svg/about-line-light.svg') : $asset('/svg/about-line-dark.svg')" alt="">
	</div>
</template>

<script setup>
import { useThemeStore } from '~/stores/theme'

const { $asset } = useNuxtApp()
const themeStore = useThemeStore()
</script>

<style scoped lang="stylus">
.art {
	display flex
	flex 1
	justify-content center
	align-items center
	gap 30px
}

</style>