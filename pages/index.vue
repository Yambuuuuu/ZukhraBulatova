<template>
	<div class="home">
		<div class="page-container">
			<div class="home__inner">
				<div class="home-main">
					<div class="home-left"></div>
					<div class="home-right">
						<div class="home-right-info">
							<div><span class="home-right-word">Z</span><span class="home-right-text">UKHRA</span></div>
							<div><span class="home-right-word">B</span><span class="home-right-text">ULATOVA</span></div>
						</div>
						<div class="home-right-picture"></div>
					</div>
				</div>
				<div class="home-advantages"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
  title: 'Главная',
})
</script>

<style lang="stylus">
.home {
	display flex

	&__inner {
		display flex
		gap 30px
	}

	&-right {
		display flex
		max-width 790px

		&-info {
			display flex
			gap 2px
		}

		&-word {
			font-family var(--main-font-greyqo)
			font-size 9.5rem
		}

		&-text {
			font-family var(--main-font-traditional-arabic)
			font-size 4rem
		}
	}

	&-left {
		display flex
		max-width 400px
	}
}
</style>
