<script setup>
import { ref } from 'vue'
import { useThemeStore } from '~/stores/theme'
import { storeToRefs } from 'pinia'
import SvgIcon from '~/components/UI/SvgIcon.vue'
import ThemeToggle from '~/components/UI/ThemeToggle.vue'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
	<div class="navbar">
		<div class="container">
			<div class="navbar__inner">
				<button class="navbar-burger" :class="{ 'is-active': menuOpen }" @click="toggleMenu">
					<span></span>
					<span></span>
					<span></span>
				</button>

				<NuxtLink to="/" class="navbar-logo" @click="closeMenu">
					<SvgIcon v-if="!isDark" class="navbar-icon" icon="logo" />
					<SvgIcon v-else class="navbar-icon" icon="logo-dark" />
				</NuxtLink>

				<div class="navbar-right">
					<NuxtLink to="/about" class="navbar-link">
						Обо мне
					</NuxtLink>
					<NuxtLink to="/courses" class="navbar-link">
						О курсах
					</NuxtLink>
					<NuxtLink to="/blog" class="navbar-link">
						Блог
					</NuxtLink>
					<NuxtLink to="/reviews" class="navbar-link">
						Отзывы
					</NuxtLink>
					<NuxtLink to="/contacts" class="navbar-link">
						Контакты
					</NuxtLink>
				</div>

				<ThemeToggle class="navbar-toggle" />
			</div>
		</div>

		<div class="navbar-menu" :class="{ 'is-open': menuOpen }">
			<NuxtLink to="/about" class="navbar-menu__link" @click="closeMenu">
				Обо мне
			</NuxtLink>
			<NuxtLink to="/courses" class="navbar-menu__link" @click="closeMenu">
				О курсах
			</NuxtLink>
			<NuxtLink to="/blog" class="navbar-menu__link" @click="closeMenu">
				Блог
			</NuxtLink>
			<NuxtLink to="/reviews" class="navbar-menu__link" @click="closeMenu">
				Отзывы
			</NuxtLink>
			<NuxtLink to="/contacts" class="navbar-menu__link" @click="closeMenu">
				Контакты
			</NuxtLink>
		</div>
	</div>
</template>

<style lang="stylus">
.navbar {
  display flex
  flex-direction column
  background-color var(--brown)
  padding 15px 0
  position relative
  z-index 1000

  &__inner {
    display flex
    align-items center
    gap 60px
  }

	&-logo {
		display flex
		width 93px
		height 93px
	}

  &-icon {
		width 93px
		height 93px
  }

  &-right {
    display flex
    width 100%
    gap 70px
    justify-content center
    align-items center
  }

  &-link {
    font-family var(--second-font-cormorant)
    font-size 1.5rem
    text-transform uppercase
    color var(--main)
    text-decoration none
		border: 1px solid transparent
		transition 0.2s border-color

		&.router-link-active {
			border-bottom: 1px solid
		}
  }

  &-toggle {
    background var(--main)
    flex-shrink 0
  }

  &-burger {
    display none
    flex-direction column
    justify-content space-between
    width 30px
    height 22px
    background none
    border none
    cursor pointer
    padding 0
    flex-shrink 0

    span {
      display block
      width 100%
      height 2px
      background var(--main)
      transition transform 0.3s ease, opacity 0.3s ease
    }

    &.is-active {
      span:nth-child(1) {
        transform translateY(10px) rotate(45deg)
      }
      span:nth-child(2) {
        opacity 0
      }
      span:nth-child(3) {
        transform translateY(-10px) rotate(-45deg)
      }
    }
  }

  &-menu {
    display none
    flex-direction column
    position absolute
    top 100%
    left 0
    background-color var(--brown)
    padding 24px 32px
    gap 16px
    z-index 999
    width fit-content
    box-shadow 4px 4px 20px rgba(0,0,0,0.2)

    &.is-open {
      display flex
    }

    &__link {
      font-family var(--second-font-cormorant)
      font-size 1.75rem
      text-transform uppercase
      color var(--main)
      text-decoration none
      white-space nowrap
    }
  }

  +below(1045px) {
    padding 20px 30px

    &__inner {
      justify-content space-between
      align-items center
      gap 0
      max-height 126px
      position relative
    }

    &-burger {
      display flex
    }

    &-logo {
      width 88px
      height 88px
    }

    &-icon {
      width 88px
      height 88px
    }

    &-right {
      display none
    }
  }
}
</style>
