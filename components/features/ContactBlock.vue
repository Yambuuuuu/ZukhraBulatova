<template>
	<a
		class="contacts-content-right-block"
		:href="link"
		target="_blank"
		rel="noopener noreferrer"
	>
		<img
			class="contacts-content-right-block__frame"
			:src="isDark ? $asset('/contacts-img/box-light.png') : $asset('/contacts-img/box-dark.png')"
			alt=""
		>
		<div class="contacts-content-right-block__content">
			<SvgIcon :icon="props.icon" />
			<span>{{ text }}</span>
		</div>
	</a>
</template>

<script setup>
import SvgIcon from '~/components/UI/SvgIcon.vue'
import { useThemeStore } from '~/stores/theme'
import { storeToRefs } from 'pinia'

const { $asset } = useNuxtApp()
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>

<style lang="stylus">
.contacts-content-right-block {
  position relative
  display flex
  align-items center
  cursor pointer
  text-decoration none
  transition 0.2s filter

  &:hover {
    filter brightness(0.9)
  }

  &__frame {
    display block
    width 585px
    height 105px
    object-fit fill
  }

  &__content {
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    display flex
    align-items center
    padding-left 65px
    gap 30px
    color var(--light-brown-contacts)
    font-size 2rem
    font-family var(--second-font-cormorant)
  }
}
</style>
