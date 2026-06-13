<script setup>
import HomeAdvantagesComponent from '~/components/features/HomeAdvantagesComponent.vue'
import { useAdvantagesStore } from '~/stores/advantages'
import { computed } from 'vue'

definePageMeta({
  title: 'Главная',
})

const { $asset } = useNuxtApp()
const advantagesStore = useAdvantagesStore()
const advantages = computed(() => advantagesStore.getAllAdvantages())
</script>

<template>
	<div class="home">
		<div class="container">
			<div class="home__inner">
				<div class="home__welcome">
					<div class="home-left">
						<img
							class="home-left-main"
							:src="$asset('/img/main-photo.png')"
							alt=""
						>
						<span class="home-left-down"></span>
					</div>
					<div class="home-right">
						<div class="home-title">
							<div class="home-right-info-title-inner">
								<span class="home-right-word home-right-word-z" data-text="Z">Z</span>
								<span class="home-right-text home-right-text-ukhra" data-text="UKHRA">UKHRA</span>
							</div>
							<div class="home-right-info-title-inner">
								<span class="home-right-word home-right-word-b" data-text="B">B</span>
								<span class="home-right-text home-right-text-ulatova" data-text="ULATOVA">ULATOVA</span>
							</div>
						</div>
						<div class="home-right-info">
							<div class="home-right-info-text">
								<span>
									Язык - это элегантность мысли и мост между вами и миром.
									Учить язык - значит не только говорить красиво, но и видеть глубже!
								</span>
							</div>
						</div>
						<div class="home-right-pictures">
							<span class="home-right-pictures-rectangle"></span>
							<img class="home-right-pictures-town" :src="$asset('/img/town.png')" alt="">
						</div>
					</div>
				</div>

				<div class="home__welcome-adaptive">
					<div class="home-title">
						<div class="home-right-info-title-inner">
							<span class="home-right-word home-right-word-z" data-text="Z">Z</span>
							<span class="home-right-text home-right-text-ukhra" data-text="UKHRA">UKHRA</span>
						</div>
						<div class="home-right-info-title-inner">
							<span class="home-right-word home-right-word-b" data-text="B">B</span>
							<span class="home-right-text home-right-text-ulatova" data-text="ULATOVA">ULATOVA</span>
						</div>
					</div>
					<div class="home-left">
						<img
							class="home-left-main"
							:src="$asset('/img/main-photo.png')"
							alt=""
						>
						<span class="home-left-down"></span>
					</div>
					<div class="home-right-info">
						<div class="home-right-info-text">
							<span>
								Язык - это элегантность мысли и мост между вами и миром.
								Учить язык - значит не только говорить красиво, но и видеть глубже!
							</span>
						</div>
					</div>
					<div class="home-right-pictures">
						<span class="home-right-pictures-rectangle"></span>
						<img class="home-right-pictures-town" :src="$asset('/img/town.png')" alt="">
					</div>
				</div>

				<div class="home-advantages">
					<HomeAdvantagesComponent
						v-for="advantage in advantages"
						:key="advantage.id"
						:icon="advantage.icon"
						:description="advantage.description"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus">
.home {
  display flex
  width 100%
	padding-top: 35px

  &__inner {
    display flex
		flex-direction: column
    gap 80px
    width 100%
    overflow visible

    +below(1000px) {
      display flex
      flex-direction column
    }
  }

  &__welcome {
    display flex
    align-items flex-start
    gap 175px

    +below(1000px) {
      display none
    }
  }

  &__welcome-adaptive {
    display none

    +below(1000px) {
      display flex
      flex-direction column
      align-items center
      gap 30px
    }
  }

  &-title {
    display flex
    align-self start
    width 100%
    overflow visible
    gap 58px

    .home-right-info-title-inner {
      display flex
      margin-top 60px
      height 100%
    }
  }

  &-right {
    display flex
    flex-direction column
		flex-grow: 1
    min-width 0
    height 100%
    overflow visible

    &-info {
      display flex
      flex-direction column
      align-items flex-start
      gap 14px
      overflow visible

      &-text {
        flex-direction column
        display flex
        max-width 790px
        font-family var(--second-font-cormorant)
        font-size 2rem
        color var(--title-gradient)

        +below(900px) {
          font-size 1.125rem
          text-align center
        }
      }
    }

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

      &-z {
        display flex
        height 100%
        max-height 180px
        max-width 150px
        position absolute
        transform translate(-5px, -62%)
      }

      &-b {
        display flex
        position absolute
        transform translate(-20%, -43%)
        max-width 200px
      }
    }

    &-text {
      display flex
      font-family var(--main-font-traditional-arabic)
      font-size 4.125rem
      background-color var(--title-gradient)
      color transparent
      -webkit-background-clip text
      background-clip text
      text-shadow 0 4px 4px rgba(0, 0, 0, 0.25)

      &-ukhra {
        display flex
        padding-left 85px
      }

      &-ulatova {
        display flex
        padding-left 90px
      }
    }

    &-pictures {
      display flex
      height 100%
      position relative
      margin-top 35px

      &-town {
        max-width 791px
        height 121px
        z-index 1000
      }

      &-rectangle {
        width 592px
        height 97px
        position absolute
        transform translate(27%, 45%)
        background-color var(--rectangle-bg)
      }
    }
  }

  &-left {
    display flex
    width 275px
    height 440px
    position relative

    +below(1000px) {
      align-self center
      margin-top 25px
      margin-bottom -30px
      min-height auto
    }

    &-main {
      display flex
      position absolute
			top: 50%
			left: 40px
			transform translate(0, -50%)
			min-width: 360px
			min-height: 552px
			object-fit: contain
      z-index 1

      +below(1000px) {
        max-width 281px
        height 430px
        object-fit contain
      }
    }

    &-down {
      display flex
      width 100%
      height 100%
      aspect-ratio 275 / 440
      background-color var(--rectangle-bg)

      +below(1000px) {
        max-width 214px
        height 329px
      }
    }
  }

  &-advantages {
    display grid
    grid-template-columns repeat(3, 1fr)
    gap 40px
    margin-top 30px
    width 100%
    max-height 170px
  }
}
</style>
