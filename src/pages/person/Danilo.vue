<template lang="pug">
  q-page.person-container
    menu-index
    div.parallax
      div.img
        img(:src="bg")
        div.parallax-content
          div.content.animate-fade
            h1.logo
              q-icon(name="mdi-gavel")
              | LEGAL AI
            h2.page-title Danilo Barros
    div.person
      div.inner-person
        div.resume
          div.person-image
            img(src="../../assets/img/danilos.jpeg")
          div.name Danilo Barros
          div.mini-resume Developer and Researcher with training in Software Engineering at the UnB. Researcher student at applied AI Project VICTOR a partnership of Supreme Federal Court and UnB.
          div.email {{$t('person.mail')}}
        div.biography
          div.title {{$t('person.biography')}}
          p.text
            | - Developer and Researcher with training in Software Engineering at the University of Brasília. He was a researcher at California State University, Fullerton, with the goal of bringing together a multidimensional system for hearing aids;
            | - Full stack developer at Legal Labs;
            | - 1st place in I Hackathon of Embrapa;
            | - 4th place in II National Hackathon of Educational Data of Inep.School.
    footer-page.foorer-page
</template>

<script>
import MenuIndex from '../../components/menu/Menu'
import FooterPage from '../../components/general/FooterPage'
export default {
  name: 'Posts',
  components: {
    MenuIndex,
    FooterPage
  },
  metaInfo: {
    title: 'Danilo Barros - Legal AI'
  },
  computed: {
    bg () {
      return require('../../assets/img/bg.jpg')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.person-container
  display flex
  flex-direction column
  background $grey-3
.img
  margin-top 60px
  position relative
  width 100%
  height 200px
  overflow hidden
  display flex
  flex-direction column
  align-items center
  justify-content center
  @media (max-width: 670px)
    height 160px
  img
    width 100%
.parallax-content
  position absolute
  top 0
  width 100%
  height 100%
  // background rgba(35, 35, 35, 0.8)
  background linear-gradient(to right, $primary, rgba(34, 33, 126, 0.97), transparent)
  // background linear-gradient(to right, $primary, transparent)
  display flex
  flex-direction column
.content
  width 100%
  max-width 1233px
  margin 0 auto
  display flex
  // justify-content center
  align-items center
  // flex-direction column
  height 100%
  @media (max-width: 1300px)
    padding 0 25px
  @media (max-width: 670px)
    justify-content center
  @media (max-width: 460px)
    flex-direction column
.logo
  margin 0
  font-size 60px
  color white
  font-weight bold
  @media (max-width: 1160px)
    font-size 50px
  @media (max-width: 670px)
    font-size 35px
  .q-icon
    margin-top -22px
    margin-right 10px
    font-size 70px
    @media (max-width: 1160px)
      font-size 60px
    @media (max-width: 670px)
      font-size 45px
.page-title
  color white
  margin 0
  font-size 50px
  line-height 56px
  margin-left 25px
  @media (max-width: 1160px)
    font-size 38px
    margin-left 20px
  @media (max-width: 670px)
    font-size 32px
    line-height 36px
    margin-top 3px
    margin-left 15px
  @media (max-width: 460px)
    margin-left 0
.person
  @media (max-width: 1300px)
    padding 0 25px
  @media (max-width: 440px)
    padding 0 15px
.inner-person
  width 100%
  max-width 1233px
  margin 40px auto
  display flex
  flex-wrap wrap
  position relative
  @media (max-width: 440px)
    padding 25px 10px
.resume
  width 300px
  background $green-8
  padding 30px 25px
  color white
  .person-image
    width 230px
    height 230px
    overflow hidden
    display flex
    flex-direction column
    align-items center
    justify-content center
    overflow hidden
    border-radius 300px
    margin 0 auto 20px auto
    img
      margin-top 125px
      transition all 0.2s ease
      width 100%
      transform scale(1.8)
      @media (max-width: 720px)
        width 110%
      @media (max-width: 650px)
        width 100%
        transform scale(1.1)
  .name
    font-size 20px
    font-weight 600
    margin-bottom 10px
  .mini-resume
    margin-bottom 10px
    &:after
      content ''
      display block
      margin-top 15px
      width 100%
      height 2px
      background white
  .email
    font-size 16px
.biography
  flex 1
  background white
  margin-left 25px
  display flex
  padding 30px 25px
  flex-direction column
  .title
    font-size 27px
    color $grey-8
    position relative
    width 100%
    margin-bottom 20px
    &:after
      content ''
      display block
      margin-top 15px
      width 100%
      height 3px
      background $grey-4
  .text
    color $grey-8
    white-space pre-wrap
    line-height 26px
</style>
