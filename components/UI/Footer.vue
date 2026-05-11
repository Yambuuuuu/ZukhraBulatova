<script setup>
import SvgIcon from '~/components/UI/SvgIcon.vue'
const { contacts } = useContactsStore()
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
						:icon="contact.icon"
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

  &__inner {
    display flex
    justify-content: space-between;
  }

  &-text {
    display flex
    color var(--main)
    font-size 2rem
    font-family var(--second-font-cormorant)
  }

  &-icons {
    display flex
    gap 28px

    &-el {
      width 39px
      height 39px
      cursor pointer
    }
  }
}
</style>