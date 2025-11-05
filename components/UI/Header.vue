<script setup>

import SvgIcon from '~/components/UI/SvgIcon.vue'
</script>

<template>
	<div class="navbar">
		<div class="container">
			<div class="navbar__inner">
				<div class="navbar-left">
					<NuxtLink
						to="/"
						class="navbar-link"
					>
						<SvgIcon icon="logo" />
					</NuxtLink>
				</div>

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
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus">
.navbar {
	display flex
	background-color var(--brown)
	padding 25px 0

	&__inner {
		display flex
		align-items center
		gap 62px
	}

	&-right {
		display flex
		gap 55px
	}

	&-link {
		font-family var(--second-font-cormorant)
		font-size 1.5rem
		text-transform: uppercase;
		color var(--main)
		text-decoration none
	}
}
</style>