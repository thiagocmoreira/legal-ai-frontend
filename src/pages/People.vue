<template lang="pug">
  q-page.people-container
    menu-index
    div.parallax
      div.img
        img(:src="bg")
        div.parallax-content
          div.content.animate-fade
            h1.logo
              q-icon(name="mdi-gavel")
              | LEGAL AI
            h2.page-title {{$t('people.name')}}
    div.people
      div.inner-people
        person-card(v-for="p of people", :key="p.id", :person="p").person-card
    footer-page.foorer-page
</template>

<script>
import MenuIndex from '../components/menu/Menu'
import FooterPage from '../components/general/FooterPage'
import PersonCard from '../components/people/PersonCard'
export default {
  name: 'People',
  components: {
    MenuIndex,
    FooterPage,
    PersonCard
  },
  metaInfo: {
    title: 'Pessoas - Legal AI'
  },
  data () {
    return {
      people: [
        {
          id: 1,
          role: 'teacher',
          name: 'Professor Ricardo Fernandes',
          photo: require('../assets/img/ricardo.jpg'),
          resume: 'Pós-PH.D. em Informática Jurídica no CODEX (Stanford). Fundador do Instituto IA. Professor Doutor da Faculdade de Direito da UnB. Fundador da Legal Labs',
          route: 'ricardo-fernandes'
        },
        {
          id: 2,
          role: 'studant',
          name: 'Danilo Barros',
          photo: require('../assets/img/danilos.jpeg'),
          resume: 'Aluno de Engenharia de Software na Universidade de Brasília. Aluno Pesquisador no Projeto VICTOR de Inteligência Artificial (STF e UnB)',
          route: 'danilo-barros'
        },
        {
          id: 3,
          role: 'studant',
          name: 'Gustavo Carvalho',
          resume: 'Aluno de Engenharia Elétrica na Universidade de Brasília. Aluno Pesquisador no Projeto VICTOR de Inteligência Artificial (STF e UnB)',
          route: 'gustavo-carvalho'
        },
        {
          id: 5,
          role: 'teacher',
          name: 'Professor Nilton Silva',
          photo: require('../assets/img/nilton.jpeg'),
          resume: 'Graduado em computação (UEG). Mestre em Ciência da Computação (UnB). Doutor em Processamento de Dados e Análise Ambiental (UnB). Professor / Pesquisador da Faculdade de Engenharia (UnB)',
          route: 'nilton-silva'
        },
        {
          id: 6,
          role: 'studant',
          name: 'André Guedes',
          resume: 'Graduado em Engenharia de Software pela Universidade de Brasília. Pesquisador no Projeto VICTOR de Inteligência Artificial (STF e UnB)',
          route: 'andre-guedes'
        },
        {
          id: 4,
          role: 'studant',
          name: 'Thiago Moreira',
          resume: 'Aluno de Engenharia de Software na Universidade de Brasília. Aluno Pesquisador no Projeto VICTOR de Inteligência Artificial (STF e UnB)',
          route: 'thiago-moreira'
        }
      ]
    }
  },
  computed: {
    bg () {
      return require('../assets/img/bg.jpg')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.people-container
  display flex
  flex-direction column
  background $grey-3
.img
  margin-top 60px
  position relative
  width 100%
  height 200px
  overflow hidden
  display flex
  flex-direction column
  align-items center
  justify-content center
  @media (max-width: 670px)
    height 160px
  img
    width 100%
.parallax-content
  position absolute
  top 0
  width 100%
  height 100%
  // background rgba(35, 35, 35, 0.8)
  background linear-gradient(to right, $primary, rgba(34, 33, 126, 0.97), transparent)
  // background linear-gradient(to right, $primary, transparent)
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
  @media (max-width: 670px)
    justify-content center
  @media (max-width: 460px)
    flex-direction column
.logo
  margin 0
  font-size 60px
  color white
  font-weight bold
  @media (max-width: 1160px)
    font-size 50px
  @media (max-width: 670px)
    font-size 35px
  .q-icon
    margin-top -22px
    margin-right 10px
    font-size 70px
    @media (max-width: 1160px)
      font-size 60px
    @media (max-width: 670px)
      font-size 45px
.page-title
  color white
  margin 0
  font-size 50px
  line-height 56px
  margin-left 25px
  @media (max-width: 1160px)
    font-size 38px
    margin-left 20px
  @media (max-width: 670px)
    font-size 32px
    line-height 36px
    margin-top 3px
    margin-left 15px
  @media (max-width: 460px)
    margin-left 0
.people
  @media (max-width: 1300px)
    padding 0 25px
  @media (max-width: 440px)
    padding 0 15px
.inner-people
  background white
  width 100%
  max-width 1233px
  margin 40px auto
  padding 25px 20px
  display flex
  flex-wrap wrap
  position relative
  justify-content center
  @media (max-width: 440px)
    padding 25px 10px
.person-card
  margin-bottom 20px
</style>
