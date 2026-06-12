<template>
	<div class="about">
		<div class="container">
			<div class="about__inner">
				<div class="about-main">
					<div class="about-main-art">
						<img class="about-main-art-left" :src="$asset('/svg/about_decor.svg')" alt="">
						<AboutMainArtGroup />
						<img class="about-main-art-right" :src="$asset('/svg/about_decor.svg')" alt="">
					</div>
					<div class="about-main-header">
						<span class="about-main-header-word" data-text="A">A</span>
						<span class="about-main-header-text">BOUT ME</span>
					</div>
					<span class="about-main-subtitle">Обо мне</span>
					<div class="about-main-text">
						<span class="about-main-text-inner">
							Меня зовут Булатова Зухра Алескендеровна.
							Я преподаватель английского и французского языков, работаю в Международном колледже информационных технологий ITHub,
							где обучаю студентов современному английскому с уклоном в сферу IT и цифровых коммуникаций.
						</span>
						<span class="about-main-text-inner">
							С юности я была очарована языками — их звучанием и культурой, которую они несут.
							Мне всегда хотелось не просто выучить иностранные языки,
							а думать, чувствовать и жить на них. Со временем это увлечение стало делом всей жизни.
						</span>
					</div>
					<AboutPlayerComponent />
				</div>
			</div>
		</div>
	</div>
	<AboutSliderComponent />
	<AboutMarquee />
</template>

<script setup>
import AboutMainArtGroup from '~/components/features/AboutMainArtGroup.vue'
import AboutPlayerComponent from '~/components/features/AboutPlayerComponent.vue'
import AboutSliderComponent from '~/components/features/AboutSliderComponent.vue'
import AboutMarquee from '~/components/features/AboutMarquee.vue'

definePageMeta({
  title: 'О проекте',
})

const { $asset } = useNuxtApp()
</script>

<style lang="stylus">
.about {
  display flex

  &__inner {
    display flex
    flex-direction column
  }

  &-main {
    display flex
    flex-direction column
    justify-content center
    align-items center

    &-art {
      display flex
      width 100%
      justify-content space-between
      align-items flex-start

      &-group {
        display flex
        flex 1
        justify-content center
        align-items center
        gap 30px
        margin-top -25px
      }

      &-left {
        display flex
        transform scaleX(-1)
      }

      &-line {

      }

      &-center {

      }

      &-right {

      }
    }

    &-header {
      display flex
      justify-content center
      align-items center
      padding-left 60px

      &-word {
        display flex
        max-width 575px
        position absolute
        margin-bottom 35px
        width 100%
        font-family var(--main-font-edwardianscript)
        font-size 8.75rem
        background-color var(--title-gradient)
        color transparent
        -webkit-background-clip text
        background-clip text
        text-shadow 0 4px 4px rgba(0, 0, 0, 0.25)
        overflow visible
      }

      &-text {
        display flex
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

    &-subtitle {
      display flex
      font-family var(--second-font-cormorant)
      font-size 3rem
      color var(--brown)
      margin-top 30px
    }

    &-text {
      display flex
      width 100%
      flex-direction column
      gap 64px
      margin-top 55px

      &-inner {
        display flex
        width 100%
        justify-content center
        text-align center
        align-items center
        font-size 2.25rem
        font-family var(--second-font-cormorant)
        color var(--brown)
      }
    }

  }
}
</style>
