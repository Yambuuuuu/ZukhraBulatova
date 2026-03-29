<script setup>
import HomeAdvantagesComponent from '~/components/features/HomeAdvantagesComponent.vue'
import { useAdvantagesStore } from '~/stores/advantages'
import { computed } from 'vue'

definePageMeta({
  title: 'Главная',
})

const advantagesStore = useAdvantagesStore()
const advantages = computed(() => advantagesStore.getAllAdvantages())
</script>

<template>
	<div class="home">
		<div class="container">
			<div class="home__inner">
				<div class="home-main">
					<div class="home-left">
						<img
							class="home-left-main"
							src="/img/main-photo.png"
							alt=""
						>
						<span class="home-left-down"></span>
					</div>
					<div class="home-right">
						<div class="home-right-info">
							<div class="home-right-info-title">
								<div class="home-right-info-title-inner">
									<span class="home-right-word home-right-word-z" data-text="Z">Z</span>
									<span class="home-right-text home-right-text-ukhra" data-text="UKHRA">UKHRA</span>
								</div>
								<div class="home-right-info-title-inner">
									<span class="home-right-word home-right-word-b" data-text="B">B</span>
									<span class="home-right-text home-right-text-ulatova" data-text="ULATOVA">ULATOVA</span>
								</div>
							</div>
							<div class="home-right-info-text">
								<span>
									Язык - это элегантность мысли и мост между вами и миром.
									Учить язык - значит не только говорить красиво, но и видеть глубже!
								</span>
							</div>
						</div>
						<div class="home-right-pictures">
							<span class="home-right-pictures-rectangle"></span>
							<img class="home-right-pictures-town" src="/img/town.png" alt="">
						</div>
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

  &__inner {
    display flex
    flex-direction column
    width 100%
  }

  &-main {
    display flex
    gap 30px
    width 100%
    //grid-template-columns repeat(2, 1fr)
    margin-top 135px
    height 100%
    overflow visible
  }

  &-right {
    display flex
    flex-direction column
    max-width 790px
    width 100%
    flex 1 1 65%
    min-width 0
    height 100%
    overflow visible

    &-info {
      display flex
      flex-direction column
      align-items flex-start
      gap 14px
      overflow visible

      &-title {
        display flex
        width 100%
        overflow visible
        gap 58px

        &-inner {
          display flex
          margin-top 60px
          width 100%
          height 100%
        }
      }

      &-text {
        flex-direction column
        display flex
        max-width 100%
        font-family var(--second-font-cormorant)
        font-size 2rem
        color var(--title-gradient)
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
    max-width 400px
    width 100%
    //flex 0 1 35%
    min-width 250px
    position relative
    min-height 550px
    overflow visible

    &-main {
      display flex
      position absolute
      transform translate(15%, -10%)
      max-width 339px
      width 100%
      height auto
      aspect-ratio 339 / 523
      z-index 10
    }

    &-down {
      display flex
      max-width 275px
      width 100%
      height 422px
      aspect-ratio 275 / 422
      background-color var(--rectangle-bg)
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
