<template>
	<div class="about-main-wrapper">
		<div class="about-main-wrapper-inner">
			<img :src="themeStore.isDark ? $asset('/svg/art-player-left-light.svg') : $asset('/img/art-player-left-dark.png')" alt="" class="about-main-wrapper-art about-main-wrapper-art--left" />
			<img :src="themeStore.isDark ? $asset('/svg/oval-player-light.svg') : $asset('/img/oval-player-dark.png')" alt="" class="about-main-wrapper-oval" />
			<img :src="themeStore.isDark ? $asset('/svg/art-player-right-light.svg') : $asset('/img/art-player-right-dark.png')" alt="" class="about-main-wrapper-art about-main-wrapper-art--right" />
		</div>
		<div class="about-main-player">
			<audio ref="audio" :src="$asset('/audio/lana-del-rey-summertime-sadness.mp3')"></audio>
			<div class="about-main-player-controls">
				<button class="about-main-player-btn" @click="skip(-10)">
					<img
						:src="themeStore.isDark ? $asset('/img/rewind-light.png') : $asset('/img/rewind-dark.png')"
						alt="rewind"
						class="about-main-player-btn-icon"
					/>
				</button>
				<button class="about-main-player-play" @click="togglePlay">
					<img
						v-if="!playing"
						:src="themeStore.isDark ? $asset('/img/play-light.png') : $asset('/img/play-dark.png')"
						alt="play"
						class="about-main-player-play-icon"
					/>
					<img
						v-else
						:src="themeStore.isDark ? $asset('/svg/pause-light.svg') : $asset('/svg/pause-dark.svg')"
						alt="pause"
						class="about-main-player-play-icon"
					/>
				</button>
				<button class="about-main-player-btn about-main-player-btn--forward" @click="skip(10)">
					<img
						:src="themeStore.isDark ? $asset('/img/rewind-light.png') : $asset('/img/rewind-dark.png')"
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useThemeStore } from '~/stores/theme'

const { $asset } = useNuxtApp()
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
.about-main {
  &-wrapper {
    display flex
    position relative
    padding-top 33px
    z-index 100

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

    &-pause-icon {
      display flex
      gap 5px
      align-items center
      justify-content center
      width 22px
      height 22px

      &::before,
      &::after {
        content ''
        display block
        width 5px
        height 22px
        background-color #8B745F
        border-radius 2px
      }

      .dark-theme &::before,
      .dark-theme &::after {
        background-color var(--white)
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
</style>
