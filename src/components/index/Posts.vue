<template lang="pug">
  nav.publications-container#publications
    div.inner-content
      h3.title {{$t('home.posts.title')}}
      div.publications
        post-card(
          v-for="post in posts",
          :key="post.id",
          :image="post.image",
          :title="post.title",
          :resume="post.resume",
          :lang="post.lang",
          :path="post.path"
        ).post-card
      q-btn(color="primary", @click="$router.push('posts')").read-more {{$t('home.posts.readMore')}}
</template>

<script>
import PostCard from '../posts/PostCard'
export default {
  name: 'Posts',
  components: {
    PostCard
  },
  data () {
    return {
      posts: [
        {
          id: 3,
          image: require('../../assets/img/stf.jpeg'),
          title: 'Projeto VICTOR: Resultados Parciais nas Classificações de Peças',
          resume: 'O dado para classificar peças, foi o rotulado pelos especialistas de direito no projeto. Utilizando da primeira e segunda páginas, quando disponível, eles rotularam as peças dos processos em 6 categorias...',
          lang: 'pt',
          path: 'classificacoes-victor'
        },
        {
          id: 2,
          image: require('../../assets/img/dra-luzia.jpg'),
          title: 'How we constructed Dra. Luzia, the first platform in Brazil with machine learning applied to  judicial decisions',
          resume: 'The need for technology applied to the legal sector has been a very relevant issue in the Brazilian scenario. The volume of processes is huge and  the traditional methods of process...',
          lang: 'en',
          path: 'dra-luzia'
        },
        {
          id: 1,
          image: require('../../assets/img/preconceitos.jpeg'),
          title: 'Os preconceitos ocultos na inteligência artificial, e como removê-los',
          resume: 'Com avanços a passos largos, as técnicas de Inteligência Artificial (IA) vêm superando a performance humana em diversas tarefas que há poucos anos eram solucionadas apenas por especialistas...',
          lang: 'pt',
          path: 'preconceitos'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.publications-container
  width 100%
  color $grey-9
  font-size 18px
  @media (max-width: 1300px)
    padding 0 25px
  @media (max-width: 440px)
    padding 0 15px
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
  @media (max-width: 440px)
    padding 25px 20px
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
  flex-wrap wrap
  @media (max-width: 850px)
    align-items center
    flex-direction column
.read-more
  margin-top 40px
  box-shadow none
  border-radius 0
  height 45px
  max-width 400px
.publication-card
  @media (max-width: 850px)
    min-width 600px
  @media (max-width: 720px)
    min-width 500px
  @media (max-width: 615px)
    min-width 460px
  @media (max-width: 570px)
    min-width 430px
  @media (max-width: 535px)
    min-width 400px
  @media (max-width: 500px)
    min-width 350px
  @media (max-width: 475px)
    max-width 350px
  @media (max-width: 460px)
    max-width 320px
  @media (max-width: 430px)
    width 200px
    min-width 300px
  @media (max-width: 380px)
    min-width 280px
  @media (max-width: 350px)
    min-width 230px
</style>
