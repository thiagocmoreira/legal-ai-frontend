<template lang="pug">
  nav.about-us-container#about-us
    div.inner-content
      div.text
        h3.title Sobre o Legal AI
        p O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum.
      div.list
        div.list-items
          ul
            li Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum.
            li O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
            li É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica.
            li Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum.
        div.img
          img(src="https://images.unsplash.com/photo-1532007195987-bb4ddeaf052d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca2b6bbfcd5a9d427f68cbd479780f30&auto=format&fit=crop&w=1267&q=80")
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~variables'
.about-us-container
  width 100%
  color $grey-9
  font-size 18px
.inner-content
  width 100%
  max-width 1233px
  margin 40px auto
  display flex
  border-radius 0
  flex-direction column
  background white
  padding 30px
.text
  flex 1
  margin-bottom 25px
  .title
    margin 0
    font-size 30px
    text-transform uppercase
    font-weight bold
    position relative
    margin-bottom 20px
    text-align center
    &:after
      content ''
      display block
      width 275px
      height 3px
      background linear-gradient(to right, $blue-8, $green-6)
      margin 0 auto
  p
    margin 0
.list
  display flex
  .list-items
    flex 1
    ul
      margin 0
      padding-left 20px
    li
      margin-bottom 10px
  .img
    width 300px
    margin-left 30px
    img
      width 100%
      margin-top -20px
</style>
