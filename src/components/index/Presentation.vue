<template lang="pug">
  div.presentation-container
    div.content
      div.left
        h1.logo.animate-pop
          q-icon(name="mdi-gavel")
          | LEGAL AI
        p.slogan Direito e Inteligência Artificial em um só lugar
      div.right
        q-carousel(
          infinite,
          autoplay,
          :easing="overshoot"
        ).carousel-container
          q-carousel-slide
            img(src="https://images.unsplash.com/photo-1494707924465-e1426acb48cb?ixlib=rb-0.3.5&s=06a3576d1ba3e5a1246005e8cc79798b&auto=format&fit=crop&w=1350&q=80")
          q-carousel-slide
            img(src="https://images.unsplash.com/photo-1511829667472-8942b2c0b0b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82fdc68b29eaf72f5ca5a63af3b6a5e0&auto=format&fit=crop&w=1350&q=80")
          q-carousel-slide
            img(src="https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afb9d9fb328ac6002abacd04e32e19a0&auto=format&fit=crop&w=1350&q=80")
</template>

<script>
import { easing } from 'quasar'
export default {
  name: 'Presentation',
  data () {
    return {
      overshoot: easing.overshoot
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
