<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor !important;
  overflow: hidden;
}
</style>
