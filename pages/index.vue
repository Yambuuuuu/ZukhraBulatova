<template>
	<div class="home">
		<div class="container">
			<div class="home__inner">
				<div class="home-left"></div>
				<div class="home-right"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
  title: 'Главная',
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
