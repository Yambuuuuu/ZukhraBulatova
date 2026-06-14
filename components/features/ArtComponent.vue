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

  +below(1500px) {
    margin-top -18px;
    gap 10px
  }

  +below(800px) {
    margin-top -13px;
    gap 10px
  }

  +below(500px) {
    margin-top -13px;
    gap 5px
  }
}

.art-line {
  +below(1500px) {
    width 150px
    height 1px
  }

  +below(800px) {
    width 45px
    height 1px
  }

  +below(500px) {
    width 38px
    height 1px
  }

  +below(400px) {
    display none
  }
}

.art-center {
  +below(1500px) {
    width 150px
    height 36px
  }

  +below(800px) {
    width 107px
    height 29px
  }
}
</style>
