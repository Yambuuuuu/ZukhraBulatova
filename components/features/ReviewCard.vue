<template>
	<div class="review-card">
		<img
			class="review-card__frame"
			:src="isDark ? $asset('/reviews-img/review.png') : $asset('/reviews-img/review-dark.png')"
			alt=""
		>
		<div class="review-card__content">
			<span class="review-card__title">
				<slot name="title" />
			</span>
			<span class="review-card__text">
				<slot name="text" />
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
.review-card {
  position relative
  display flex
  flex-direction column
  align-items center

  &__frame {
    display block
    width 300px
    height auto
  }

  &__content {
    position absolute
    top 90px
    left 0
    width 100%
    height calc(100% - 90px)
    display flex
    flex-direction column
    align-items center
    justify-content flex-start
    padding 16px 28px 28px
    box-sizing border-box
    gap 12px
  }

  &__title {
    font-family var(--main-font-edwardianscript)
    font-size 2rem
    color var(--brown)
    text-align center
  }

  &__text {
    font-family var(--second-font-cormorant)
    font-size 1.1rem
    color var(--brown)
    text-align center
    line-height 1.5
  }
}
</style>
