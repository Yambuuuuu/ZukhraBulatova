<template>
	<div class="contacts-content-right-block">
		<SvgIcon :icon="props.icon" />
		<span>{{ text }}</span>
	</div>
</template>

<script setup>
import SvgIcon from '~/components/UI/SvgIcon.vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<style lang="stylus">
.contacts-content-right-block {
  display flex
  height 105px
  width 585px
  background-color var(--mid-brown-o-03)
  border-radius 13px
  align-items center
  padding-left 65px
  color var(--light-brown-contacts)
  gap 30px
  font-size 2rem
  font-family var(--second-font-cormorant)
  cursor pointer
}
</style>
