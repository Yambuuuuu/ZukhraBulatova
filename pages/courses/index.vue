<template>
	<div class="courses">
		<div class="container">
			<div class="courses__inner">
				<div class="courses-art">
					<ArtComponent />
				</div>
				<div class="courses-header">
					<span class="courses-header-word courses-header-word-c" data-text="C">C</span>
					<span class="courses-header-text">OURCES</span>
				</div>
				<span class="courses-subtitle">Мой педагогический подход</span>
				<div class="courses-items">
					<img :src="$asset('/courses-img/text-1.png')" alt="">
					<img :src="$asset('/courses-img/text-2.png')" alt="">
					<img :src="$asset('/courses-img/text-3.png')" alt="">
				</div>
				<div class="courses-features">
					<span class="courses-features-header">Что это даёт?</span>
					<div class="courses-features-items">
						<div class="courses-features-item">
							<span class="courses-features-item-num">1</span>
							<span class="courses-features-item-text">живую, естественную речь - интонации, паузы, особенности произношения.</span>
						</div>
						<div class="courses-features-item">
							<span class="courses-features-item-num">2</span>
							<span class="courses-features-item-text">раскрывает культурный контекст и реальную коммуникацию.</span>
						</div>
						<div class="courses-features-item">
							<span class="courses-features-item-num">3</span>
							<span class="courses-features-item-text">служит вдохновением для обсуждений, проектов и ролевых заданий.</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="courses-list">
			<span class="courses-list-text">Актуальный прайс</span>
			<div
				ref="sliderRef"
				class="courses-list-items"
				@mousedown="onMouseDown"
				@mouseleave="onMouseLeave"
				@mouseup="onMouseUp"
				@mousemove="onMouseMove"
				@touchstart="onTouchStart"
				@touchmove="onTouchMove"
			>
				<img class="courses-list-pic" :src="isDark ? $asset('/courses-img/course-1.png') : $asset('/courses-img/course-1-dark.png')" alt="">
				<img class="courses-list-pic" :src="isDark ? $asset('/courses-img/course-2.png') : $asset('/courses-img/course-2-dark.png')" alt="">
				<img class="courses-list-pic" :src="isDark ? $asset('/courses-img/course-3.png') : $asset('/courses-img/course-3-dark.png')" alt="">
				<img class="courses-list-pic" :src="isDark ? $asset('/courses-img/course-4.png') : $asset('/courses-img/course-4-dark.png')" alt="">
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import ArtComponent from '~/components/features/ArtComponent.vue'
import { useThemeStore } from '~/stores/theme'
import { storeToRefs } from 'pinia'

definePageMeta({
  title: 'Курсы',
})

const { $asset } = useNuxtApp()
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

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
.courses {
  display flex
  flex-direction column
  background-image url('/img/tower-light.png')
  background-repeat no-repeat
  background-position right 150px

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

  &-items {
    position relative
  }

  &-subtitle {
    display flex
    font-family var(--second-font-cormorant)
    font-size 3rem
    color var(--brown)
    margin-top 30px
    margin-bottom 48px
  }

  &-items {
    display flex
    gap 30px
    flex-direction column
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

      &-c {
        display flex
        height 100%
        max-height 180px
        max-width 150px
        position absolute
        transform translate(-90%, -5%)
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

  &-features {
    display flex
    flex-direction column

    &-header {
      display flex
      align-items center
      justify-content center
      font-size 3rem
      font-family var(--second-font-cormorant)
      color var(--brown)
      margin 85px 0 70px 0
    }

    &-items {
      display grid
      grid-template-columns repeat(3, 1fr)
      gap 60px
    }

    &-item {
      display flex
      flex-direction column
      max-width 380px
      font-size 2.25rem
      color var(--brown)
      gap 46px

      &-num {
        display flex
        font-family var(--main-font-edwardianscript)
        color var(--brown)
        font-size 4rem
      }

      &-text {
        display flex
        align-items center
        font-family var(--second-font-cormorant)
      }
    }
  }

  &-list {
    display flex
    flex-direction column
    width 100%

    &-text {
      display flex
      justify-content center
      margin 70px 0
      color var(--brown)
      font-size 3rem
      font-family var(--second-font-cormorant)
    }

    &-items {
      display flex
      flex-wrap nowrap
      gap 50px
      padding-left 38px
      padding-right 38px
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

    &-pic {
      cursor pointer
    }
  }
}
</style>
