<template>
	<div class="art-group">
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

<style lang="stylus" scoped>
.art-group {
  display flex
  flex 1
  justify-content center
  align-items center
  gap 30px
  margin-top -25px
}
</style>
