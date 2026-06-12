<template>
	<div class="about-main-art-group">
		<img class="about-main-art-line" :src="themeStore.isDark ? $asset('/svg/about-line-light.svg') : $asset('/svg/about-line-dark.svg')" alt="">
		<img class="about-main-art-center" :src="$asset('/svg/about-center-decor.svg')" alt="">
		<img class="about-main-art-line" :src="themeStore.isDark ? $asset('/svg/about-line-light.svg') : $asset('/svg/about-line-dark.svg')" alt="">
	</div>
</template>

<script setup>
import { useThemeStore } from '~/stores/theme'

const { $asset } = useNuxtApp()
const themeStore = useThemeStore()
</script>
