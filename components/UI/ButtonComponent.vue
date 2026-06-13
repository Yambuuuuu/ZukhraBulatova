<script setup>
</script>

<template>
	<button class="button">
		<slot />
	</button>
</template>

<style scoped lang="stylus">
.button {
	background none
	outline none
	border none
	transition: 0.2s filter;
  cursor: pointer;

	&:hover {
		filter: brightness(0.9);
	}
}
</style>