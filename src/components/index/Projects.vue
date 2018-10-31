<template lang="pug">
  nav.projects-container#projects
    div.inner-content
      h3.title {{$t('home.projects.title')}}
      div.projects
        project-card(v-for="p in projects", :key="p.id", :project="p")
      q-btn(color="primary", @click="$router.push('projects')").read-more {{$t('home.projects.readMore')}}
</template>

<script>
import ProjectCard from '../projects/ProjectCard'
export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: [
        {
          id: 1,
          name: 'Projeto VICTOR',
          resume: 'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.projects-container
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
    padding 30px 15px
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
  flex-wrap wrap
.read-more
  margin-top 40px
  box-shadow none
  border-radius 0
  height 45px
  @media (max-width: 965px)
    margin-top 20px
</style>
