<template lang="pug">
  div.presentation-container
    div.content
      div.left
        h1.logo.animate-pop
          q-icon(name="mdi-gavel", size="90px")
          | LEGAL AI
        p.slogan Direito e Inteligência Artificial em um só lugar
      div.right
        q-carousel(
          infinite,
          autoplay,
          :easing="overshoot"
        )
          q-carousel-slide
            img(src="https://images.unsplash.com/photo-1494707924465-e1426acb48cb?ixlib=rb-0.3.5&s=06a3576d1ba3e5a1246005e8cc79798b&auto=format&fit=crop&w=1350&q=80")
          q-carousel-slide
            img(src="https://images.unsplash.com/photo-1518081461904-9d8f136351c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a815e999d0f593c8c8bbcb6473b0d39&auto=format&fit=crop&w=1377&q=80")
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
.content
  // clip-path polygon(50% 0, 70% 50%, 50% 100%, 0 100%, 0 0)
  width 100%
  height 400px
  z-index 2
  overflow hidden
  position absolute
  top 0
  display flex
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
  &:after
    position absolute
    top 0
    right -60px
    display block
    content ''
    width 0
    height 0
    border-style solid;
    border-width 200px 0 200px 60px
    border-color transparent transparent transparent $primary
.logo
  margin 0
  font-size 80px
  color white
  font-weight bold
  .q-icon
    margin-top -22px
    margin-right 10px
.slogan
  margin 0
  font-size 20px
  color white
  margin-top 12px
  font-style italic
.right
  flex 1
  filter grayscale(100%)
  img
    width 100%
    height auto
</style>
