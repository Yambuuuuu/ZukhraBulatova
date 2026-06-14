<script setup>
defineProps({
  first: {
    default: '',
    type: String,
  },
  rest: {
    default: '',
    type: String,
  },
})
</script>

<template>
	<div class="design-title">
		<span class="design-title__first-letter">{{ first }}</span>
		<span class="design-title__rest-letters">{{ rest }}</span>
	</div>
</template>

<style lang="stylus">
.design-title {
	display flex
	align-items baseline
	gap: 1rem

	&__first-letter {
		font-family var(--main-font-edwardianscript)
		font-size 8.75rem
		line-height 1
		color var(--title-gradient)
		text-shadow 0 4px 4px rgba(0, 0, 0, 0.25)
	}

	&__rest-letters {
		font-family var(--main-font-traditional-arabic)
		font-size 4.125rem
		line-height 1
		color var(--title-gradient)
		text-shadow 0 4px 4px rgba(0, 0, 0, 0.25)
	}
}
</style>