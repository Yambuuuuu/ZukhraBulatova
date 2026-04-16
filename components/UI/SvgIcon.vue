<script setup>
import InlineSvg from 'vue-inline-svg'

const { $asset } = useNuxtApp()

defineProps({
  icon: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'svg',
  },
})
</script>

<template>
	<InlineSvg
		:src="$asset(`/${category}/${icon}.svg`)"
		:class="'icon'"
		class="svg-icon"
	/>
</template>

<style lang="stylus" scoped>
.svg-icon
  display: inline-flex
  align-items: center
  justify-content: center
  flex-shrink: 0
</style>
