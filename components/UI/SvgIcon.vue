<script setup>
import InlineSvg from 'vue-inline-svg'

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
		:src="`/${category}/${icon}.svg`"
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
