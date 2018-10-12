<template lang="pug">
  q-page.index-container
    menu-index
    presentation
    footer-page
</template>

<script>
import MenuIndex from '../components/menu/Menu'
import FooterPage from '../components/general/FooterPage'
import Presentation from '../components/index/Presentation'
export default {
  name: 'PageIndex',
  components: {
    MenuIndex,
    FooterPage,
    Presentation
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.index-container
  background $grey-4
  height 100vh
.content
  width 100%
  height 100vh
  position absolute
  top 0
  display flex
  flex-direction column
  align-items center
  justify-content center
.logo-container
  padding 4px 4px 0 4px
  background white
.logo-unb
  max-width 120px
  height auto
.title
  color white
  margin 30px 0 20px 0
  font-size 60px
  font-weight 500
  .q-icon
    margin-right 10px
    margin-top -10px
.coming
  margin 0
  color white
  font-size 20px
</style>
