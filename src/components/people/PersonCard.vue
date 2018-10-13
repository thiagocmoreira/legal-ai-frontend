<template lang="pug">
  div.person-card-container
    div.img
      img(:src="person.photo")
    div(:class="person.role === 'teacher' ? 'teacher-card' : ''").description
      h4 {{person.name}}
      p {{person.resume}}
      q-btn.view-profile Ver Perfil
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.person-card-container
  display flex
  flex 1
  margin 0 10px
  @media (max-width: 720px)
    flex-direction column
  @media (max-width: 650px)
    width 100%
  &:hover
    .view-profile
      background white !important
      color $primary !important
    img
      transform scale(1.05)
      @media (max-width: 650px)
        transform scale(1.15)
.img
  width 230px
  max-height 300px
  overflow hidden
  display flex
  flex-direction column
  align-items center
  justify-content center
  overflow hidden
  @media (max-width: 1285px)
    width 180px
  @media (max-width: 1125px)
    width 250px
    max-height 230px
  @media (max-width: 900px)
    max-height 245px
  @media (max-width: 800px)
    max-height 300px
  @media (max-width: 720px)
    width 100%
    height 300px
  @media (max-width: 650px)
    min-width 400px
    min-height 400px
  @media (max-width: 550px)
    min-height 0
    min-width 0
  img
    transition all 0.2s ease
    height 105%
    @media (max-width: 1125px)
      width 100%
      height auto
    @media (max-width: 720px)
      width 110%
      transform scale(1.1)
    @media (max-width: 650px)
      width 100%
      transform scale(1.1)
.description
  flex 1
  background $green-8
  display flex
  flex-direction column
  padding 30px
  @media (max-width: 1285px)
    min-width 300px
    max-height 300px
  @media (max-width: 1125px)
    min-width 180px
    min-width 400px
  @media (max-width: 900px)
    min-width 200px
  @media (max-width: 740px)
    max-height 400px
  h4
    margin 0
    font-size 22px
    line-height 26px
    color white
    font-weight bold
    margin-bottom 15px
  p
    color white
    margin 0
  .view-profile
    margin-top 20px
    background $primary
    box-shadow none
    border-radius 0
    color white
    max-width 150px
.teacher-card
  background $primary
  .view-profile
    background $green-8
</style>
