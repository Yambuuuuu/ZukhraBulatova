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
	<div class="test-container">
		<span class="test-first-letter">{{ first }}</span>
		<span class="test-rest-letters">{{ rest }}</span>
	</div>
</template>

<style scoped lang="stylus">
.test-container {
	display flex
	align-items baseline
	gap: 1rem
}

.test-first-letter {
	font-family var(--main-font-edwardianscript)
	font-size 8.75rem
	line-height 1
	color var(--title-gradient)
	text-shadow 0 4px 4px rgba(0, 0, 0, 0.25)
}

.test-rest-letters {
	font-family var(--main-font-traditional-arabic)
	font-size 4.125rem
	line-height 1
	color var(--title-gradient)
	text-shadow 0 4px 4px rgba(0, 0, 0, 0.25)
}
</style>