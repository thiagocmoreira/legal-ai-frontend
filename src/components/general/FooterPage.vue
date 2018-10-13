<template lang="pug">
  footer.footer-page
    div.footer-infos
    div.copy
      //- img
      p © Universidade de Brasília - 2018
</template>

<script>
export default {
  name: 'FooterPage'
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.footer-page
  width 100%
.footer-infos
  background #252b2c
  height 200px
.copy
  background $primary
  padding 20px
  display flex
  justify-content space-between
  p
    color white
    margin 0
    font-size 14px
</style>
