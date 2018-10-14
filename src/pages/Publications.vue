<template lang="pug">
  q-page.publications-container
    menu-index
    div.parallax
      q-parallax(src="https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", :height="200").par
      div.parallax-content
        div.content
          h1.logo.animate-pop
            q-icon(name="mdi-gavel")
            | LEGAL AI
          h2.page-title Publicações
    div.publications
      publication-card(
        title="Os preconceitos ocultos na inteligência artificial, e como removê-los",
        resume="Com avanços a passos largos, as técnicas de Inteligência Artificial (IA) vêm superando a performance humana em diversas tarefas que há poucos anos eram solucionadas apenas por especialistas."
      )
    footer-page.foorer-page
</template>

<script>
import MenuIndex from '../components/menu/Menu'
import FooterPage from '../components/general/FooterPage'
import PublicationCard from '../components/publications/PublicationCard'
export default {
  name: 'Publications',
  components: {
    MenuIndex,
    FooterPage,
    'publication-card': PublicationCard
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.publications-container
  display flex
  flex-direction column
  background $grey-3
.parallax
  margin-top 60px
  position relative
// .par
//   filter grayscale(100%)
.parallax-content
  position absolute
  top 0
  width 100%
  height 100%
  // background rgba(35, 35, 35, 0.8)
  background-image linear-gradient(to right, $primary, rgba(34, 33, 126, 0.92), transparent)
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
.logo
  margin 0
  font-size 70px
  color white
  font-weight bold
  @media (max-width: 1160px)
    font-size 70px
  @media (max-width: 670px)
    font-size 45px
  .q-icon
    margin-top -22px
    margin-right 10px
    font-size 80px
    @media (max-width: 1160px)
      font-size 80px
    @media (max-width: 670px)
      font-size 55px
.page-title
  color white
  margin 0
  font-size 50px
  line-height 56px
  margin-left 25px
.publications
  background white
  width 100%
  max-width 1233px
  margin 40px auto
  padding 35px 30px
</style>
