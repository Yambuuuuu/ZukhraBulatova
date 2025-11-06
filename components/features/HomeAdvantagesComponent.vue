<script setup>
import SvgIcon from '~/components/UI/SvgIcon.vue'

const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
	<div class="advantages">
		<div class="advantages-icon">
			<SvgIcon :icon="props.icon" />
		</div>
		<div class="advantages-content">
			<span class="advantages-description">
				{{ props.description }}
			</span>
			<span class="advantages-border"></span>
		</div>
	</div>
</template>

<style lang="stylus">
.advantages {
	display flex
	flex-direction column
	gap 16px
	padding 16px 22px 0 22px
	font-family var(--second-font-cormorant)
	align-items center
	max-width 407px
	width 100%
	border-bottom 1px solid var(--brown)
	position relative

	&:not(:last-child)::after {
		content ''
		position absolute
		right -20px
		top -20px
		bottom -20px
		width 1px
		background-color var(--brown)
	}

	&-icon {
		display flex
		align-items center
		justify-content center
		height 54px
	}

	&-content {
		display flex
		flex-direction column
	}

	&-description {
		font-family var(--second-font-cormorant)
		color var(--brown)
		margin 0
		line-height 1.5
		text-align center
		padding-bottom 22px
		width 100%
		font-size 1.375rem
		flex-shrink 0
	}
}
</style>