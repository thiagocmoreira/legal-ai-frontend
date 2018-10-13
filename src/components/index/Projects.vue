<template lang="pug">
  nav.projects-container#projects
    div.inner-content
      h3.title Projetos
      div.projects
        div(v-for="p in 3", :key="p").project
          img(src="https://images.unsplash.com/photo-1528217580778-96e570819666?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19a3a4640d3a734c3da937653a66c809&auto=format&fit=crop&w=500&q=60")
          div.inner-project
            div.content
              h3 Projeto VICTOR
              p O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.
              q-btn.more Saiba mais
      q-btn(color="primary").read-more Ver mais projetos
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.projects-container
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
    width 165px
    height 3px
    background linear-gradient(to right, $blue-8, $green-6)
    margin 0 auto
.projects
  width 100%
  display flex
  justify-content space-between
.project
  width 370px
  height 350px
  overflow hidden
  display flex
  flex-direction column
  justify-content center
  align-items center
  position relative
  transition all 0.4s ease
  &:hover
    transform scale(1.03)
    .more
      background $green-8
      color white
  img
    width 100%
.inner-project
  position absolute
  top 0
  width 100%
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  background rgba(70, 70, 70, 0.65)
.content
  width 90%
  height 90%
  border solid 2px white
  padding 20px
  display flex
  display flex
  flex-direction column
  justify-content center
  h3
    color white
    margin 0
    font-size 26px
    font-weight bold
  p
    margin 0
    color white
  .more
    margin-top 20px
    box-shadow none
    border-radius 0
    background white
    color $grey-9
    max-width 115px
.read-more
  margin-top 40px
  box-shadow none
  border-radius 0
  height 45px
</style>
