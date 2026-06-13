<template>
	<div class="reviews">
		<div class="container">
			<div class="reviews__inner">
				<div class="reviews-art">
					<ArtComponent />
				</div>
				<div class="reviews-header">
					<span class="reviews-header-word reviews-header-word-r" data-text="R">R</span>
					<span class="reviews-header-text">EVIEWS</span>
				</div>
				<span class="reviews-subtitle">Отзывы моих учениц</span>
			</div>
		</div>
		<img class="reviews-pattern" :src="isDark ? $asset('/reviews-img/uzor-light.png') : $asset('/reviews-img/uzor-dark.png')" alt="">
		<div
			ref="sliderRef"
			class="reviews-items"
			@mousedown="onMouseDown"
			@mouseleave="onMouseLeave"
			@mouseup="onMouseUp"
			@mousemove="onMouseMove"
			@touchstart="onTouchStart"
			@touchmove="onTouchMove"
		>
			<ReviewCard
				v-for="review in reviews"
				:key="review.id"
				class="reviews-item"
			>
				<template #title>
					{{ review.title }}
				</template>
				<template #text>
					{{ review.text }}
				</template>
			</ReviewCard>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import ArtComponent from '~/components/features/ArtComponent.vue'
import ReviewCard from '~/components/features/ReviewCard.vue'
import { useThemeStore } from '~/stores/theme'
import { useReviewsStore } from '~/stores/reviews'
import { storeToRefs } from 'pinia'

definePageMeta({
  title: 'Отзывы',
})

const { $asset } = useNuxtApp()
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
const { reviews } = useReviewsStore()

const sliderRef = ref(null)
let isDown = false
let startX = 0
let scrollLeft = 0

function onMouseDown(e) {
  isDown = true
  sliderRef.value.classList.add('is-dragging')
  startX = e.pageX - sliderRef.value.offsetLeft
  scrollLeft = sliderRef.value.scrollLeft
}
function onMouseLeave() {
  isDown = false
  sliderRef.value.classList.remove('is-dragging')
}
function onMouseUp() {
  isDown = false
  sliderRef.value.classList.remove('is-dragging')
}
function onMouseMove(e) {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - sliderRef.value.offsetLeft
  sliderRef.value.scrollLeft = scrollLeft - (x - startX) * 1.5
}

let touchStartX = 0
let touchScrollLeft = 0
function onTouchStart(e) {
  touchStartX = e.touches[0].pageX
  touchScrollLeft = sliderRef.value.scrollLeft
}
function onTouchMove(e) {
  const x = e.touches[0].pageX
  sliderRef.value.scrollLeft = touchScrollLeft - (x - touchStartX)
}
</script>

<style lang="stylus">
.reviews {
  display flex
  flex-direction column

  &__inner {
    display flex
    flex-direction column
    align-items center
    width 100%
  }

  &-art {
    display flex
    width 100%
    justify-content center
    align-items flex-start
  }

  &-pattern {
    display block
    width 100%
    object-fit fill
    margin 70px 0
  }

  &-items {
    display flex
    flex-wrap nowrap
    gap 126px
    padding 0 38px 80px
    overflow-x scroll
    cursor grab
    user-select none
    scrollbar-width none
    &::-webkit-scrollbar {
      display none
    }
    &.is-dragging {
      cursor grabbing
    }
  }

	&-item {
		min-width 30%
	}

  &-subtitle {
    display flex
    font-family var(--second-font-cormorant)
    font-size 3rem
    color var(--brown)
    margin-top 30px
  }

  &-header {
    display flex
    justify-content center
    align-items center
    margin-top 75px

    &-word {
      display flex
      width 100%
      font-family var(--main-font-edwardianscript)
      font-size 8.75rem
      background-color var(--title-gradient)
      color transparent
      -webkit-background-clip text
      background-clip text
      text-shadow 0 4px 4px rgba(0, 0, 0, 0.25)
      overflow visible

      &-r {
        display flex
        height 100%
        max-height 180px
        max-width 180px
        position absolute
        transform translate(-67%, -5%)
      }
    }

    &-text {
      display flex
      padding-left 85px
      font-family var(--second-font-cormorant)
      font-size 4rem
      position relative
      background-color var(--title-gradient)
      color transparent
      -webkit-background-clip text
      background-clip text
      text-shadow 0 3px 3px rgba(0, 0, 0, 0.15)
    }
  }
}
</style>
