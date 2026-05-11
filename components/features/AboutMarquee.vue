<template>
	<div class="about-marquee">
		<div class="about-marquee__track">
			<span class="about-marquee__inner" aria-hidden="true">
				<span class="about-marquee__item">life content</span>
				<span class="about-marquee__dot">•</span>
				<span class="about-marquee__item">education</span>
				<span class="about-marquee__dot">•</span>
				<span class="about-marquee__item">comfortable classes</span>
				<span class="about-marquee__dot">•</span>
				<span class="about-marquee__item">working rhythm</span>
				<span class="about-marquee__dot">•</span>
				<span class="about-marquee__item">magical moments</span>
				<span class="about-marquee__dot">•</span>
				<span class="about-marquee__item">student years</span>
				<span class="about-marquee__dot">•</span>
			</span>
			<span class="about-marquee__inner" aria-hidden="true">
				<span class="about-marquee__item">life content</span>
				<span class="about-marquee__dot">•</span>
				<span class="about-marquee__item">education</span>
				<span class="about-marquee__dot">•</span>
				<span class="about-marquee__item">comfortable classes</span>
				<span class="about-marquee__dot">•</span>
				<span class="about-marquee__item">working rhythm</span>
				<span class="about-marquee__dot">•</span>
				<span class="about-marquee__item">magical moments</span>
				<span class="about-marquee__dot">•</span>
			</span>
		</div>
	</div>
</template>

<script setup>
</script>

<style lang="stylus">
@keyframes marquee
  from
    transform translateX(0)
  to
    transform translateX(-50%)

.about-marquee
  width 100%
  overflow hidden
  background var(--main)
  padding 22px 0

  &__track
    display flex
    width max-content
    animation marquee 25s linear infinite

  &__inner
    display flex
    align-items center
    white-space nowrap

  &__item
    font-family var(--main-font-edwardianscript)
    font-size 4rem
    color var(--brown)
    padding 0 28px

  &__dot
    font-size 3rem
    color var(--brown)
    flex-shrink 0
</style>
