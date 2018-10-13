<template lang="pug">
  nav.publications-container#publications
    div.inner-content
      h3.title Publicações
      div.publications
        publication-card(,
          v-for="p in 3",
          :key="p",
          title="Os preconceitos ocultos na inteligência artificial, e como removê-los",
          resume="Com avanços a passos largos, as técnicas de Inteligência Artificial (IA) vêm superando a performance humana em diversas tarefas que há poucos anos eram solucionadas apenas por especialistas."
        )
      q-btn(color="primary").read-more Ver mais publicações
</template>

<script>
import PublicationCard from '../publications/PublicationCard'
export default {
  name: 'Publications',
  components: {
    PublicationCard
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.publications-container
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
    width 217px
    height 3px
    background linear-gradient(to right, $blue-8, $green-6)
    margin 0 auto
.publications
  width 100%
  display flex
  justify-content space-between
.read-more
  margin-top 40px
  box-shadow none
  border-radius 0
  height 45px
  max-width 400px
</style>
