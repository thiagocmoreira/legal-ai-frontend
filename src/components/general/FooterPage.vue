<template lang="pug">
  footer.footer-page
    div.copy
      div.direito-logo
        img(src="../../assets/img/Logo_Direito_UnB.png")
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
  background $primary
.copy
  padding 15px 20px
  display flex
  justify-content space-between
  align-items center
  max-width 1233px
  margin 0 auto
  .direito-logo
    width 120px
    img
      width 100%
      filter brightness(0) invert(1)
  p
    color white
    margin 0
    font-size 14px
</style>
