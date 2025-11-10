<script setup>
import { useThemeStore } from '~/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
const { toggleTheme } = themeStore
</script>

<template>
	<button
		class="theme-toggle"
		:aria-label="isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'"
		@click="toggleTheme"
	>
		<svg
			v-if="!isDark"
			class="icon"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		<svg
			v-else
			class="icon"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="12"
				cy="12"
				r="5"
				stroke="currentColor"
				stroke-width="2"
			/>
			<line
				x1="12"
				y1="1"
				x2="12"
				y2="3"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<line
				x1="12"
				y1="21"
				x2="12"
				y2="23"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<line
				x1="4.22"
				y1="4.22"
				x2="5.64"
				y2="5.64"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<line
				x1="18.36"
				y1="18.36"
				x2="19.78"
				y2="19.78"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<line
				x1="1"
				y1="12"
				x2="3"
				y2="12"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<line
				x1="21"
				y1="12"
				x2="23"
				y2="12"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<line
				x1="4.22"
				y1="19.78"
				x2="5.64"
				y2="18.36"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<line
				x1="18.36"
				y1="5.64"
				x2="19.78"
				y2="4.22"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>
	</button>
</template>

<style lang="stylus" scoped>
.theme-toggle
  display flex
  align-items center
  justify-content center
  width 40px
  height 40px
  border none
  cursor pointer
  border-radius 8px
  transition all 0.3s ease
  background-color  var(--main)
  color var(--brown)

  &:hover
    background var(--light-brown)
    transform scale(1.1)

  &:active
    transform scale(0.95)

  .icon
    width 24px
    height 24px
    transition transform 0.3s ease

.dark-theme .theme-toggle
  color var(--white)

  &:hover
    color var(--white)
</style>
