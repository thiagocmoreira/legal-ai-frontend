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
  width 570px
  display flex
  &:hover
    .view-profile
      background white !important
      color $primary !important
    img
      transform scale(1.05)
.img
  width 230px
  height 300px
  overflow hidden
  display flex
  flex-direction column
  align-items center
  justify-content center
  img
    transition all 0.2s ease
    height 102%
.description
  flex 1
  background $green-8
  display flex
  flex-direction column
  padding 30px
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
