<template>
	<div class="about-marquee">
		<div class="about-marquee__track">
			<span class="about-marquee__inner" aria-hidden="true">
				<span class="about-marquee__item">life content</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
				<span class="about-marquee__item">education</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
				<span class="about-marquee__item">comfortable classes</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
				<span class="about-marquee__item">working rhythm</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
				<span class="about-marquee__item">magical moments</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
				<span class="about-marquee__item">student years</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
			</span>
			<span class="about-marquee__inner" aria-hidden="true">
				<span class="about-marquee__item">life content</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
				<span class="about-marquee__item">education</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
				<span class="about-marquee__item">comfortable classes</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
				<span class="about-marquee__item">working rhythm</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
				<span class="about-marquee__item">magical moments</span>
				<img class="about-marquee__bant" :src="isDark ? $asset('/pictures-about/bant-light.png') : $asset('/pictures-about/bant-dark.png')" alt="">
			</span>
		</div>
	</div>
</template>

<script setup>
import { useThemeStore } from '~/stores/theme'
import { storeToRefs } from 'pinia'

const { $asset } = useNuxtApp()
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
</script>

<style lang="stylus">
@keyframes marquee {
  from {
    transform translateX(0)
  }
  to {
    transform translateX(-50%)
  }
}

.about-marquee {
  width 100%
  overflow hidden
  background var(--main)
  padding 22px 0

  &__track {
    display flex
    width max-content
    animation marquee 45s linear infinite
  }

  &__inner {
    display flex
    align-items flex-start
    white-space nowrap
  }

  &__item {
    font-family var(--main-font-edwardianscript)
    font-size 4rem
    color var(--brown)
    padding 0 50px
  }

  &__bant {
    flex-shrink 0
    width 129px
    height 136px
    object-fit contain
  }
}
</style>
