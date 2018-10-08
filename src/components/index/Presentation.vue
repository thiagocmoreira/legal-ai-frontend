<template lang="pug">
  div.presentation-container
    img(src="https://www-cdn.law.stanford.edu/wp-content/uploads/2015/03/codex-5.jpg")
</template>

<script>
export default {
  name: 'Presentation'
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.presentation-container
  width 100%
  height 450px
  overflow hidden
  img
    width 100%
</style>
