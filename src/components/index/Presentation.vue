<template lang="pug">
  div.presentation-container
    div.content
      div.left
        h1.logo.animate-pop
          q-icon(name="mdi-gavel")
          | LEGAL AI
        p.slogan {{$t('home.title')}}
      div.right
        q-carousel(
          infinite,
          autoplay,
          :easing="overshoot"
        ).carousel-container
          q-carousel-slide
            img(:src="presentation3")
          q-carousel-slide
            img(:src="presentation1")
          q-carousel-slide
            img(:src="presentation2")
</template>

<script>
import { easing } from 'quasar'
export default {
  name: 'Presentation',
  data () {
    return {
      overshoot: easing.overshoot
    }
  },
  computed: {
    presentation1 () {
      return require('../../assets/img/presentation-1.jpeg')
    },
    presentation2 () {
      return require('../../assets/img/presentation-2.jpeg')
    },
    presentation3 () {
      return require('../../assets/img/presentation-3.jpeg')
    }
  }
}
</script>

<style lang="stylus">
.presentation-container
  .q-carousel-slide
    padding 0
</style>
<style lang="stylus" scoped>
@import '~variables'
.presentation-container
  width 100%
  height 400px
  overflow hidden
  position relative
  margin-top 60px
  overflow hidden
  @media (max-width: 1160px)
    height 350px
  @media (max-width: 1020px)
    height 300px
  @media (max-width: 670px)
    height 500px
    background $primary
  @media (max-width: 670px)
    height 400px
  @media (max-width: 430px)
    height 360px
  @media (max-width: 340px)
    height 330px
.content
  width 100%
  height 100%
  z-index 2
  overflow hidden
  position absolute
  top 0
  display flex
  @media (max-width: 670px)
    flex-direction column
.left
  width 45%
  background $primary
  position relative
  z-index 3
  padding 30px
  display flex
  align-items center
  justify-content center
  flex-direction column
  @media (max-width: 840px)
    width 30%
    padding 18px
    padding-right 0
  @media (max-width: 790px)
    width 35%
  @media (max-width: 710px)
    width 30%
  @media (max-width: 670px)
    height 150px
    width 100%
    padding 40px 20px 20px 20px
  &:after
    position absolute
    top 0
    right -59px
    display block
    content ''
    width 0
    height 0
    border-style solid
    border-width 200px 0 200px 60px
    border-color transparent transparent transparent $primary
    @media (max-width: 1160px)
      border-width 175px 0 175px 60px
    @media (max-width: 1020px)
      border-width 150px 0 150px 60px
    @media (max-width: 670px)
      bottom 0
.logo
  margin 0
  font-size 80px
  color white
  font-weight bold
  @media (max-width: 1160px)
    font-size 70px
  @media (max-width: 980px)
    font-size 55px
  @media (max-width: 840px)
    font-size 35px
  @media (max-width: 710px)
    font-size 28px
  @media (max-width: 670px)
    font-size 45px
  .q-icon
    margin-top -22px
    margin-right 10px
    font-size 90px
    @media (max-width: 1160px)
      font-size 80px
    @media (max-width: 980px)
      font-size 65px
      margin-top -15px
    @media (max-width: 840px)
      margin-top -10px
      font-size 45px
    @media (max-width: 710px)
      font-size 38px
    @media (max-width: 670px)
      font-size 55px
.slogan
  margin 0
  font-size 20px
  color white
  margin-top 12px
  font-style italic
  @media (max-width: 1160px)
    font-size 16px
  @media (max-width: 980px)
    font-size 14px
    margin-top 7px
  @media (max-width: 840px)
    text-align center
    width 85%
.right
  flex 1
  filter grayscale(100%)
  overflow hidden
  @media (max-width: 670px)
    width 100%
    clip-path polygon(0 15%, 100% 0, 100% 100%, 0% 100%)
  img
    width 100%
    height auto
.carousel-container
  background $grey-8
</style>
