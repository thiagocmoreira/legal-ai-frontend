<template lang="pug">
  q-page.index-container
    menu-index
    presentation-section
    about-us-section
    posts-section
    projects-section
    people-section
    contact-section
    footer-page
</template>

<script>
import MenuIndex from '../components/menu/Menu'
import PresentationSection from '../components/index/Presentation'
import AboutUsSection from '../components/index/AboutUs'
import PostsSection from '../components/index/Posts'
import ProjectsSection from '../components/index/Projects'
import PeopleSection from '../components/index/People'
import ContactSection from '../components/index/Contact'
import FooterPage from '../components/general/FooterPage'
export default {
  name: 'PageIndex',
  metaInfo: {
    title: 'Legal AI - Direito e Inteligência Artificial em um só lugar'
  },
  components: {
    MenuIndex,
    PresentationSection,
    AboutUsSection,
    PostsSection,
    ProjectsSection,
    PeopleSection,
    ContactSection,
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
