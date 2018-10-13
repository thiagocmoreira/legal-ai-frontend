<template lang="pug">
  q-page.index-container
    menu-index
    presentation
    about-us
    footer-page
</template>

<script>
import MenuIndex from '../components/menu/Menu'
import Presentation from '../components/index/Presentation'
import AboutUs from '../components/index/AboutUs'
import FooterPage from '../components/general/FooterPage'
export default {
  name: 'PageIndex',
  components: {
    MenuIndex,
    Presentation,
    AboutUs,
    FooterPage
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.index-container
  background $grey-3
  display flex
  flex-direction column
</style>
