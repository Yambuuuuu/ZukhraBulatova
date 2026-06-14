<script setup>
import SvgIcon from '~/components/UI/SvgIcon.vue'
import { useContactsStore } from '~/stores/contacts'
import { useThemeStore } from '~/stores/theme'
import { storeToRefs } from 'pinia'

const { contacts } = useContactsStore()
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const darkIconMap = {
  'whatsup-contacts': 'whts-icon-dark',
  'inst-contacts': 'inst-icon-dark',
  'tg-contacts': 'tg-icon-dark',
}

function getIcon(icon) {
  return isDark.value && darkIconMap[icon] ? darkIconMap[icon] : icon
}
</script>

<template>
	<div class="footer">
		<div class="container">
			<div class="footer__inner">
				<span class="footer-text">@bulatova_zukhra_</span>
				<div class="footer-icons">
					<SvgIcon
						v-for="contact in contacts"
						:key="contact.id"
						:icon="getIcon(contact.icon)"
						class="footer-icons-el"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus">
.footer {
  display flex
  align-items center
  text-align center
  margin auto
  margin-top 150px
  background var(--brown)
  width 100%
  height 155px
  padding 30px
  z-index 100

	+below(990px) {
		height: 120px
	}
	+below(500px) {
		margin-top: 55px
		height: 95px
		padding: 0
	}

  &__inner {
    display flex
    justify-content: space-between;
		gap: 20px
  }

  &-text {
    display flex
    color var(--main)
    font-size 2rem
    font-family var(--second-font-cormorant)

		+below(990px) {
			font-size 1.5rem
		}
  }

  &-icons {
    display flex
		align-items: center
    gap 28px

		+below(500px) {
			gap: 10px
		}

    &-el {
			display: flex
      width 39px
      height 39px
      cursor pointer

			+below(990px) {
				width 32px
				height 32px
			}
			+below(500px) {
				width 24px
				height 24px
			}
    }
  }
}
</style>