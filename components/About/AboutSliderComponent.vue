<template>
	<div class="about-slider">
		<img
			:src="themeStore.isDark ? $asset('/img/ellipse-about-slider-dark.png') : $asset('/img/ellipse-about-slider.png')"
			class="about-slider-ellipse"
			alt=""
		>
		<Swiper
			:slides-per-view="'auto'"
			:space-between="60"
			:centered-slides="true"
			:loop="true"
			:grab-cursor="true"
			class="about-slider__swiper"
		>
			<SwiperSlide><img :src="$asset('/pictures-about/img1.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img2.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img3.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img4.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img5.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img6.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img7.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img8.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img9.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img10.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img11.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img12.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img13.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img14.png')" alt="" class="about-slider__img" /></SwiperSlide>
			<SwiperSlide><img :src="$asset('/pictures-about/img15.png')" alt="" class="about-slider__img" /></SwiperSlide>
		</Swiper>
		<img class="about-slider-ellipse-down" :src="themeStore.isDark ? $asset('/img/ellipse-about-slider-dark.png') : $asset('/img/ellipse-about-slider.png')" alt="">
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useThemeStore } from '~/stores/theme'
import 'swiper/css'

const { $asset } = useNuxtApp()
const themeStore = useThemeStore()

</script>

<style lang="stylus">
.about-slider {
  width 100%
  height 760px
  overflow hidden
  position relative

  &-ellipse {
    display flex
    position absolute
    z-index 10
    width 100%
    transform translate(0, -145px)
    //opacity 0.4

    &-down {
      display flex
      position absolute
      z-index 10
      width 100%
      transform translate(0, -45px)
      //opacity 0.4
    }
  }

  &__swiper {
    width 100%
    height 100%
    overflow visible
  }

  .swiper-slide {
    width 506px
  }

  &__img {
    width 506px
    height 760px
    object-fit cover
    display block
    position relative
  }
}
</style>
