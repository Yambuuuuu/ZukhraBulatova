<template>
	<div class="about">
		<div class="container">
			<div class="about__inner">
				<div class="about-main">
					<div class="about-main-header">
						<span class="about-main-header-word" data-text="A">A</span>
						<span class="about-main-header-text">BOUT ME</span>
					</div>
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
					<div class="about-main-wrapper">
						<div class="about-main-wrapper-inner">
							<img :src="themeStore.isDark ? '/svg/art-player-left-light.svg' : '/img/art-player-left-dark.png'" alt="" class="about-main-wrapper-art about-main-wrapper-art--left" />
							<img :src="themeStore.isDark ? '/svg/oval-player-light.svg' : '/img/oval-player-dark.png'" alt="" class="about-main-wrapper-oval" />
							<img :src="themeStore.isDark ? '/svg/art-player-right-light.svg' : '/img/art-player-right-dark.png'" alt="" class="about-main-wrapper-art about-main-wrapper-art--right" />
						</div>
						<div class="about-main-player">
							<audio ref="audio" src="/audio/lana-del-rey-summertime-sadness.mp3"></audio>
							<div class="about-main-player-controls">
								<button class="about-main-player-btn" @click="skip(-10)">
									<img
										:src="themeStore.isDark ? '/img/rewind-light.png' : '/img/rewind-dark.png'"
										alt="rewind"
										class="about-main-player-btn-icon"
									/>
								</button>
								<button class="about-main-player-play" @click="togglePlay">
									<img
										:src="themeStore.isDark ? '/img/play-light.png' : '/img/play-dark.png'"
										alt="play"
										class="about-main-player-play-icon"
									/>
								</button>
								<button class="about-main-player-btn about-main-player-btn--forward" @click="skip(10)">
									<img
										:src="themeStore.isDark ? '/img/rewind-light.png' : '/img/rewind-dark.png'"
										alt="forward"
										class="about-main-player-btn-icon about-main-player-btn-icon--flipped"
									/>
								</button>
							</div>
							<div class="about-main-player-bottom">
								<div class="about-main-player-progress" @click="seek">
									<div class="about-main-player-progress-fill" :style="{ width: progress + '%' }"></div>
								</div>
								<span class="about-main-player-time">{{ currentTime }} / {{ duration }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useThemeStore } from '~/stores/theme'
import SvgIcon from '~/components/UI/SvgIcon.vue'

definePageMeta({
  title: 'О проекте',
})

const themeStore = useThemeStore()
const audio = ref(null)
const playing = ref(false)
const progress = ref(0)
const currentTime = ref('0:00')
const duration = ref('0:00')

function formatTime(sec) {
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function togglePlay() {
  if (!audio.value) return
  if (playing.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }
  playing.value = !playing.value
}

function skip(sec) {
  if (!audio.value) return
  audio.value.currentTime = Math.max(0, audio.value.currentTime + sec)
}

function seek(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
  progress.value = ratio * 100
  if (audio.value && audio.value.duration) {
    audio.value.currentTime = ratio * audio.value.duration
    currentTime.value = formatTime(audio.value.currentTime)
  }
}

onMounted(() => {
  if (!audio.value) return
  audio.value.addEventListener('timeupdate', () => {
    if (!audio.value.duration) return
    progress.value = (audio.value.currentTime / audio.value.duration) * 100
    currentTime.value = formatTime(audio.value.currentTime)
  })
  audio.value.addEventListener('loadedmetadata', () => {
    duration.value = formatTime(audio.value.duration)
  })
  audio.value.addEventListener('ended', () => {
    playing.value = false
    progress.value = 0
  })
})
</script>

<style lang="stylus">
.about {
  display flex
  margin-top 100px

  &__inner {
    display flex
    flex-direction column
  }

  &-main {
    display flex
    flex-direction column
    justify-content center
    align-items center

    &-header {
      display flex
      justify-content center
      align-items center

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
        font-size 4.125rem
        position relative
        background-color var(--title-gradient)
        color transparent
        -webkit-background-clip text
        background-clip text
        text-shadow 0 3px 3px rgba(0, 0, 0, 0.15)
      }
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

    &-wrapper {
      display flex
      position relative
      padding-top 33px

      &-inner {
        display flex
        align-items center
      }
    }

    &-player {
      display flex
      flex-direction column
      align-items center
      gap 12px
      width 100%
      max-width 500px
      max-height 180px
      position absolute
      transform translate(35%, 35%)
      inset 0

      &-controls {
        display flex
        align-items center
        justify-content center
        gap 20px
      }

      &-bottom {
        display flex
        align-items center
        gap 12px
        width 100%
      }

      &-btn {
        background none
        border none
        cursor pointer
        opacity 0.75
        transition opacity 0.2s
        padding 0
        width 36px
        height 36px
        display flex
        align-items center
        justify-content center

        &:hover {
          opacity 1
        }

        &-icon {
          width 100%
          height 100%
          object-fit contain

          &--flipped {
            transform scaleX(-1)
          }
        }
      }

      &-play {
        background none
        border none
        width 52px
        height 52px
        display flex
        align-items center
        justify-content center
        cursor pointer
        flex-shrink 0
        transition opacity 0.2s
        padding 0

        &:hover {
          opacity 0.75
        }

        &-icon {
          width 100%
          height 100%
          object-fit contain
        }
      }

      &-progress {
        flex 1
        height 3px
        background rgba(139, 116, 95, 0.3)
        border-radius 2px
        cursor pointer
        position relative

        .dark-theme & {
          background rgba(255, 255, 255, 0.3)
        }

        &-fill {
          height 100%
          background #8B745F
          border-radius 2px
          transition width 0.1s linear

          .dark-theme & {
            background var(--white)
          }
        }
      }

      &-time {
        color #8B745F
        font-family var(--second-font-cormorant)
        font-size 1rem
        white-space nowrap
        opacity 0.75

        .dark-theme & {
          color var(--white)
        }
      }
    }
  }
}
</style>
