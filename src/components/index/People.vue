<template lang="pug">
  nav.people-container#people
    div.inner-content
      h3.title {{$t('home.people.title')}}
      div.people
        person-card(
          v-for="p in people",
          :key="p.id",
          :person="p"
        ).person
      q-btn(color="primary", @click="$router.push('people')").read-more {{$t('home.people.readMore')}}
</template>

<script>
import PersonCard from '../people/PersonCard'
export default {
  name: 'People',
  components: {
    PersonCard
  },
  data () {
    return {
      people: [
        {
          id: 1,
          role: 'teacher',
          name: 'Professor Ricardo Fernandes',
          photo: 'https://aicamp.com.br/img/Foto_Ricardo_Fernandes.dcf8813.jpg',
          resume: 'Pós-PH.D. em Informática Jurídica no CODEX (Stanford). Fundador do Instituto IA. Professor Doutor da Faculdade de Direito da UnB. Fundador da Legal Labs',
          route: 'ricardo-fernandes'
        },
        {
          id: 2,
          role: 'studant',
          name: 'Thiago Moreira',
          photo: 'https://loadandgosa.com/wp-content/uploads/2018/05/placeholder-profile.jpg',
          resume: 'Aluno de Engenharia de Software na Universidade de Brasília. Aluno Pesquisador no Projeto VICTOR de Inteligência Artificial (STF e UnB)',
          route: 'thiago-moreira'
        },
        {
          id: 3,
          role: 'studant',
          name: 'Danilo Barros',
          photo: 'https://loadandgosa.com/wp-content/uploads/2018/05/placeholder-profile.jpg',
          resume: 'Aluno de Engenharia de Software na Universidade de Brasília. Aluno Pesquisador no Projeto VICTOR de Inteligência Artificial (STF e UnB)',
          route: 'danilo-barros'
        },
        {
          id: 4,
          role: 'studant',
          name: 'Gustavo Carvalho',
          photo: 'https://loadandgosa.com/wp-content/uploads/2018/05/placeholder-profile.jpg',
          resume: 'Aluno de Engenharia Elétrica na Universidade de Brasília. Aluno Pesquisador no Projeto VICTOR de Inteligência Artificial (STF e UnB)',
          route: 'gustavo-carvalho'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.people-container
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
    width 140px
    height 3px
    background linear-gradient(to right, $blue-8, $green-6)
    margin 0 auto
.people
  width 100%
  display flex
  justify-content space-between
  flex-direction row
  flex-wrap wrap
.read-more
  margin-top 20px
  box-shadow none
  border-radius 0
  height 45px
.person
  margin-bottom 20px
</style>
