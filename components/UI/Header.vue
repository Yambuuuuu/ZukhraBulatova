<script setup>
import { useThemeStore } from '~/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
import SvgIcon from '~/components/UI/SvgIcon.vue'
import ThemeToggle from '~/components/UI/ThemeToggle.vue'
</script>

<template>
	<div class="navbar">
		<div class="container">
			<div class="navbar__inner">
				<NuxtLink
					to="/"
					class="navbar-link"
				>
					<SvgIcon v-if="!isDark" class="navbar-icon" icon="logo" />
					<SvgIcon v-else class="navbar-icon" icon="logo-dark" />
				</NuxtLink>

				<div class="navbar-right">
					<NuxtLink
						to="/about"
						class="navbar-link"
					>
						Обо мне
					</NuxtLink>
					<NuxtLink
						to="/services"
						class="navbar-link"
					>
						Услуги
					</NuxtLink>
					<NuxtLink
						to="/price"
						class="navbar-link"
					>
						Прайс
					</NuxtLink>
					<NuxtLink
						to="/reviews"
						class="navbar-link"
					>
						Отзывы
					</NuxtLink>
					<NuxtLink
						to="/blog"
						class="navbar-link"
					>
						Блог
					</NuxtLink>
					<NuxtLink
						to="/contacts"
						class="navbar-link"
					>
						Контакты
					</NuxtLink>
					<ThemeToggle class="navbar-toggle" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus">
.navbar {
	display flex
	background-color var(--brown)
	padding 15px 0

	&__inner {
		display flex
		align-items center
		gap 60px
	}

	&-icon {
		width 125px
		height 125px
	}

	&-right {
		display flex
		width 100%
		gap 40px
		justify-content space-between
		align-items center
	}

	&-link {
		font-family var(--second-font-cormorant)
		font-size 1.5rem
		text-transform: uppercase;
		color var(--main)
		text-decoration none
	}

	&-toggle {
		background  var(--main)
	}
}
</style>