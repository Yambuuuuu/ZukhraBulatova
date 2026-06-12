<template>
	<div class="contacts">
		<div class="container">
			<div class="contacts__inner">
				<div class="contacts-header">
					<AboutMainArtGroup />
					<div class="contacts-header-text">
						<span class="contacts-header-text-first">C</span>
						<span class="contacts-header-text-second">ONTACTS</span>
					</div>
					<span class="contacts-header-subtitle">Связаться со мной</span>
				</div>
				<div class="contacts-content">
					<div class="contacts-content-left">
						<img :src="$asset('/img/ZU-contacts-main.png')" alt="">
					</div>
					<div class="contacts-content-right">
						<ContactBlock
							v-for="contact in contacts"
							:key="contact.id"
							:text="contact.text"
							:icon="contact.icon"
						/>
						<span class="contacts-content-right__notice">
							*Instagram и whatsApp принадлежат компании Meta, деятельность которой признана экстремистской и запрещена в РФ
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import AboutMainArtGroup from '~/components/features/AboutMainArtGroup.vue'
import ContactBlock from '~/components/features/ContactBlock.vue'
import { useContactsStore } from '~/stores/contacts'

definePageMeta({
  title: 'О проекте',
})

const { contacts } = useContactsStore()
const { $asset } = useNuxtApp()
</script>

<style lang="stylus">
.contacts {
  display: flex;
  justify-content center

  &__inner {
    display: flex;
    justify-content center
    width 100%
    flex-direction column;
  }

  &-header {
    display flex
    align-items center
    justify-content center
    flex-direction column

    &-subtitle {
      display flex
      font-family var(--second-font-cormorant)
      font-size 3rem
      color var(--brown)
      margin-top 30px
      align-items center
      justify-content center
    }

    &-text {
      display flex
      position relative
      padding-left 7rem
      margin-top 50px

      &-first {
        display flex
        font-size 8.75rem
        position absolute
        transform translate(-108%, -36%)
        font-family var(--main-font-edwardianscript)
        color var(--brown)
      }

      &-second {
        font-size 4rem
        position relative
        font-family var(--second-font-cormorant)
        color var(--brown)
      }
    }
  }

  &-content {
    display flex
    width 100%

    &-left {
			width: 600px;
			flex-shrink 0

			img {
				width: 100%;
			}
    }

    &-right {
      display flex
      gap 25px
      flex-direction column
      margin-top 150px

			&__notice {
				padding-top 23px
				font-size 1.5rem
				line-height 1.1
				color: var(--brown)
			}
    }
  }
}
</style>
