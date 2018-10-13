<template lang="pug">
  q-page.index-container
    menu-index
    presentation
    about-us
    publications
    projects
    people
    contact
    footer-page
</template>

<script>
import MenuIndex from '../components/menu/Menu'
import Presentation from '../components/index/Presentation'
import AboutUs from '../components/index/AboutUs'
import Publications from '../components/index/Publications'
import Projects from '../components/index/Projects'
import People from '../components/index/People'
import Contact from '../components/index/Contact'
import FooterPage from '../components/general/FooterPage'
export default {
  name: 'PageIndex',
  components: {
    MenuIndex,
    Presentation,
    AboutUs,
    Publications,
    Projects,
    People,
    Contact,
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
