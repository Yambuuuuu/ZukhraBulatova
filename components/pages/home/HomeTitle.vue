<script setup lang="ts">
</script>

<template>
	<div class="home-title">
		<div class="home-right-info-title-inner">
			<span class="home-title-word home-title-word-z" data-text="Z">Z</span>
			<span class="home-title-text home-title-text-ukhra" data-text="UKHRA">UKHRA</span>
		</div>
		<div class="home-right-info-title-inner">
			<span class="home-title-word home-title-word-b" data-text="B">B</span>
			<span class="home-title-text home-title-text-ulatova" data-text="ULATOVA">ULATOVA</span>
		</div>
	</div>
</template>

<style lang="stylus">
.home-title {
	display flex
	align-self start
	overflow visible
	gap 58px
	justify-content center
	text-align center

	&__svg {
		color: var(--brown)
	}

	.home-right-info-title-inner {
		display flex
		margin-top 20px
		height 100%
	}

	+below(1350px) {
		width 100%
	}

	+below(900px) {
		gap 20px
	}

	+below(500px) {
		gap 5px
	}

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

		+below(900px) {
			font-size 3.75rem
		}

		&-z {
			display flex
			height 100%
			max-height 180px
			max-width 150px
			position absolute
			transform translate(-5px, -62%)

			+below(900px) {
				transform translate(30%, -26%)
			}

			+below(500px) {
				transform translate(0, -70%)
				max-width 100px
				height auto
			}
		}

		&-b {
			display flex
			position absolute
			transform translate(-20%, -43%)
			max-width 200px

			+below(900px) {
				transform translate(30px, -40%)
				max-width 100px
			}

			+below(500px) {
				transform translate(15px, -46%)
			}
		}
	}

	&-text {
		display flex
		font-family var(--main-font-traditional-arabic)
		font-size 4.125rem
		background-color var(--title-gradient)
		color transparent
		-webkit-background-clip text
		background-clip text
		text-shadow 0 4px 4px rgba(0, 0, 0, 0.25)

		+below(900px) {
			font-size 1.875rem
		}

		+below(500px) {
			font-size 1.5rem
		}

		&-ukhra {
			display flex
			padding-left 85px

			+below(500px) {
				display flex
				padding-left 40px
			}
		}

		&-ulatova {
			display flex
			padding-left 90px

			+below(500px) {
				padding-left 75px
			}
		}
	}
}
</style>