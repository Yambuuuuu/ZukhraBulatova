<script setup>
import { useThemeStore } from '~/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
const { toggleTheme } = themeStore

/*
  Старая кнопка переключения темы (оставлена закомментированной):

  <button
    class="theme-toggle"
    :aria-label="isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'"
    @click="toggleTheme"
  >
    <svg v-if="!isDark" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-else class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" />
      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  </button>
*/
</script>

<template>
	<button
		class="theme-switch"
		:class="{ 'is-dark': isDark }"
		:aria-label="isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'"
		@click="toggleTheme"
	>
		<span class="theme-switch__track theme-switch__track--light"></span>
		<span class="theme-switch__track theme-switch__track--dark"></span>
		<span class="theme-switch__knob"></span>
	</button>
</template>

<style lang="stylus" scoped>
.theme-switch
  position relative
  display inline-block
  width 90px
  height 40px
  padding 0
  border none
  border-radius 20px
  background transparent
  cursor pointer
  overflow hidden
  transition transform 0.2s ease

  &:active
    transform scale(0.96)

  &__track
    position absolute
    inset 0
    background-repeat no-repeat
    background-position center
    background-size 90px 40px
    transition opacity 0.4s ease

  &__track--light
    background-image url('/toggle-svg/light-track.svg')
    opacity 1

  &__track--dark
    background-image url('/toggle-svg/dark-track.svg')
    opacity 0

  &__knob
    position absolute
    top 3px
    left 3px
    z-index 2
    width 34px
    height 34px
    border-radius 50%
    background-color #543310
    box-shadow 0 1px 3px rgba(0, 0, 0, 0.35)
    transform translateX(50px) rotate(160deg)
    transition transform 0.5s cubic-bezier(0.4, 0.1, 0.2, 1), background-color 0.4s ease

  &.is-dark
    .theme-switch__track--light
      opacity 0

    .theme-switch__track--dark
      opacity 1

    .theme-switch__knob
      transform translateX(0) rotate(0deg)
      background-color #F9F4E1
</style>
