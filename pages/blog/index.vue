<template>
	<div class="blog">
		<div class="container">
			<div class="blog__inner">
				<div class="blog-art">
					<ArtComponent />
				</div>
				<div class="blog-header">
					<span class="blog-header-word blog-header-word-b" data-text="B">B</span>
					<span class="blog-header-text">LOG</span>
				</div>
				<span class="blog-subtitle">Закрытый телерамм канал</span>
				<img class="blog-photo" :src="isDark ? $asset('/blog-img/frame-circle-blog-light.png') : $asset('/blog-img/frame-circle-blog-dark.png')" alt="">
				<div class="blog-description">
					<span>В моём telegram- канале собрана базовая обучающая программа. Здесь каждая сможет найти удобный для себя формат. Вход в канал 5000 р.
						почему стоит остаться?
						для преподователей: готовые идеи для уроков, которые сэкономят ваше время.
						Для изучающих: структурированные материалы для самостоятельного погружения в язык.
						Для всех: вдохновение и поддержка на каждом этапе обучения.
					</span>
					<ButtonComponent>
						<img class="blog-description-btn" :src="$asset('/blog-img/blog-button.png')" alt="">
					</ButtonComponent>
				</div>
				<div class="blog-features">
					<span class="blog-features-header">Что вас ждёт:</span>
					<img :src="isDark ? $asset('/blog-img/features-light.png') : $asset('/blog-img/features-bark.png')" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import ArtComponent from '~/components/features/ArtComponent.vue'
import { useThemeStore } from '~/stores/theme'
import { storeToRefs } from 'pinia'
import ButtonComponent from '~/components/UI/ButtonComponent.vue'

definePageMeta({
  title: 'Блог',
})

const { $asset } = useNuxtApp()
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
</script>

<style lang="stylus">
.blog {
  display flex

  &__inner {
    display flex
    flex-direction column
    align-items center
    width 100%
  }

  &-art {
    display flex
    width 100%
    justify-content center
    align-items flex-start
  }

  &-subtitle {
    display flex
    font-family var(--second-font-cormorant)
    font-size 3rem
    color var(--brown)
    margin-top 30px
  }

  &-header {
    display flex
    justify-content center
    align-items center
    margin-top 75px

    &-word {
      display flex
      width 100%
      font-family var(--main-font-edwardianscript)
      font-size 8.75rem
      background-color var(--title-gradient)
      color transparent
      -webkit-background-clip text
      background-clip text
      text-shadow 0 4px 4px rgba(0, 0, 0, 0.25)
      overflow visible

      &-b {
        display flex
        height 100%
        max-height 180px
        max-width 180px
        position absolute
        transform translate(-45%, -5%)
      }
    }

    &-text {
      display flex
      padding-left 85px
      font-family var(--second-font-cormorant)
      font-size 4rem
      position relative
      background-color var(--title-gradient)
      color transparent
      -webkit-background-clip text
      background-clip text
      text-shadow 0 3px 3px rgba(0, 0, 0, 0.15)
    }
  }

  &-photo {
    display flex
    margin 60px 0
  }

  &-description {
    display flex
    align-items center
    justify-content center
    flex-direction column
    gap 65px
    font-size 2.25rem
    color var(--brown)
    font-family var(--second-font-cormorant)
    text-align center

    &-btn {
      cursor pointer
    }
  }

  &-features {
    display flex
    flex-direction column

    &-header {
      display flex
      align-items center
      justify-content center
      margin 95px 0 65px 0
      color var(--brown)
      font-family var(--second-font-cormorant);
      font-size 3rem
    }
  }
}
</style>
