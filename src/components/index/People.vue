<template lang="pug">
  nav.people-container#people
    div.inner-content
      h3.title Pessoas
      div.people
        div(v-for="p in 2", :key="p").person
          div.img
            img(src="https://aicamp.com.br/img/Foto_Ricardo_Fernandes.dcf8813.jpg")
          div.description
            h4 Professor Ricardo Fernandes
            p Pós-PH.D. em Informática Jurídica no CODEX (Stanford). Fundador do Instituto IA. Professor Doutor da Faculdade de Direito da UnB. Fundador da Legal Labs.
            q-btn.view-profile Ver Perfil
      q-btn(color="primary").read-more Ver mais pessoas
</template>

<script>
export default {
  name: 'people'
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.people-container
  width 100%
  color $grey-9
  font-size 18px
.inner-content
  width 100%
  max-width 1233px
  margin 0 auto 40px auto
  display flex
  border-radius 0
  flex-direction column
  background white
  padding 30px
  align-items center
.text
  flex 1
  margin-bottom 25px
.title
  margin 0
  font-size 30px
  text-transform uppercase
  font-weight bold
  position relative
  margin-bottom 35px
  text-align center
  &:after
    content ''
    display block
    width 140px
    height 3px
    background linear-gradient(to right, $blue-8, $green-6)
    margin 0 auto
.people
  width 100%
  display flex
  justify-content space-between
  flex-direction row
.person
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
      width 100%
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
.read-more
  margin-top 40px
  box-shadow none
  border-radius 0
  height 45px
</style>
