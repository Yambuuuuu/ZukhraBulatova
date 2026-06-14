<script setup>
import HomeAdvantagesComponent from '~/components/features/HomeAdvantagesComponent.vue'
import { useAdvantagesStore } from '~/stores/advantages'
import { computed } from 'vue'
import HomeTitle from '~/components/pages/home/HomeTitle.vue'

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
					<HomeTitle class="home__welcome-title home__welcome-title--mobile" />

					<div class="home-left">
						<img
							class="home-left-main"
							:src="$asset('/img/main-photo.png')"
							alt=""
						>
						<span class="home-left-down"></span>
					</div>
					<div class="home-right">
						<HomeTitle class="home__welcome-title" />
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

    +below(1350px) {
      display flex
      flex-direction column
    }
		+below(500px) {
			gap: 38px
		}
  }

  &__welcome {
    display flex
    align-items flex-start
    gap 175px

		+below(1350px) {
			display flex
			flex-direction column
			align-items center
			gap 0
		}
  }

	&__welcome-title {
		&:not(&--mobile) {
			+below(1350px) {
				display none
			}
		}

		&--mobile {
			+above(1351px) {
				display none
			}
		}
	}

  &-right {
    display flex
    flex-direction column
		flex-grow: 1
    min-width 0
    height 100%
    overflow visible

		+below(1350px) {
			margin-top 60px
		}
		+below(500px) {
			margin-top 43px
		}

    &-info {
      display flex
      flex-direction column
      align-items flex-start
      gap 14px
      overflow visible
      //margin-top 80px

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

    &-pictures {
      display flex
      height 100%
      position relative
      margin-top 35px

      &-town {
				width: 100%
        height 121px
        z-index 1

				+below(500px) {
					height 56px
				}
      }

      &-rectangle {
        width 592px
        height 97px
				max-width: 100%
        position absolute
				bottom: -30px
				right: 24px
        background-color var(--rectangle-bg)

				+below(500px) {
					width: 273px
					height: 45px
					bottom: -13px
					right: 9px
				}
      }
    }
  }

  &-left {
    display flex
    width 275px
    height 440px
    position relative

    +below(1350px) {
			width: 214px
			height: 329px
      margin-top 80px
    }
		+below(500px) {
			align-self flex-start
			margin-left 43px
		}
		+below(400px) {
			margin-left 20px
		}

    &-main {
      display flex
      position absolute
			top: 50%
			left: 40px
			transform translate(0, -52%)
			min-width: 360px
			min-height: 552px
			object-fit: contain
      z-index 1

      +below(1350px) {
        min-width: 281px
        min-height: 430px
      }
			+below(500px) {
				left 22px
			}
    }

    &-down {
      display flex
      width 100%
      height 100%
      aspect-ratio 275 / 440
      background-color var(--rectangle-bg)
    }
  }

  &-advantages {
    display grid
    grid-template-columns repeat(3, 1fr)
    gap 40px
    margin-top 30px
    width 100%

		+below(990px) {
			margin-top 30px
		}
		+below(500px) {
			gap: 30px
		}
  }
}
</style>
