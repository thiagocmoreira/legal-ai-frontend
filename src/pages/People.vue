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
          name: 'Ricardo Fernandes (Executive Director)',
          photo: require('../assets/img/ricardo.jpg'),
          resume: 'Post-Ph.D in Legal Informatics at the Codex (Stanford). Founder of the IBIA. Adjunct Professor of Law School (UnB). Legal Labs founder',
          route: 'ricardo-fernandes'
        },
        {
          id: 6,
          role: 'teacher',
          name: 'Roland Vogl',
          photo: require('../assets/img/roland.png'),
          resume: 'Executive Director of CodeX – The Stanford Center for legal informatics. Executive Director of the Stanford Program in Law, Science and technology.',
          route: 'roland-vogl'
        },
        {
          id: 2,
          role: 'studant',
          name: 'Danilo Barros (Researcher)',
          photo: require('../assets/img/danilos.jpeg'),
          resume: 'Developer and Researcher with training in Software Engineering at the UnB. Researcher student at applied AI Project VICTOR a partnership of Supreme Federal Court and UnB.',
          route: 'danilo-barros'
        },
        {
          id: 5,
          role: 'teacher',
          photo: require('../assets/img/nilton.jpeg'),
          name: 'Nilton Silva (AI Director)',
          resume: 'Graduated in computing (UEG). Master of Computer Science (UnB). PhD in Data Processing and Environmental Analysis (UnB). professor/researcher at Faculty of Engineering (UnB)',
          route: 'nilton-silva'
        },
        {
          id: 8,
          role: 'studant',
          photo: require('../assets/img/sardinha.png'),
          name: 'Guilherme Sardinha (Academic Secretary and Researcher)',
          resume: 'Researcher in Constitutional and Digital Law with a degree in Law (UniCEUB). Undergraduate Thesis work in the area of ​​digital law indicated for 3 awards',
          route: 'guilherme-sardinha'
        },
        {
          id: 9,
          role: 'studant',
          photo: require('../assets/img/hugo.jpeg'),
          name: 'Hugo Honda (Researcher)',
          resume: 'Developer and Researcher with degree in Computer Science from the UnB. He was lead developer and research assistant at UnBs Laboratory of Neuroscience and Behavior. 1st place in the Unity Security Hackathon.',
          route: 'hugo-honda'
        },
        {
          id: 3,
          role: 'studant',
          name: 'Gustavo Carvalho (Researcher)',
          resume: 'Developer and Researcher with graduation in Eletric Engeneering at University of Brasilia. Researcher student at applied AI Project VICTOR a partnership of STF and UnB.',
          route: 'gustavo-carvalho'
        },
        {
          id: 7,
          role: 'studant',
          name: 'André Guedes (Researcher)',
          resume: 'Developer and Researcher with graduation in Sofware Engeneering at UnB. Researcher at applied AI Project VICTOR a partnership of STF and UnB. AI Engineer at Legal Labs',
          route: 'andre-guedes'
        },
        {
          id: 4,
          role: 'studant',
          photo: require('../assets/img/thiago.jpg'),
          name: 'Thiago Moreira (Digital Support and Researcher)',
          resume: 'Developer and Researcher with graduation in Sofware Engeneering at UnB. Researcher student at applied AI Project VICTOR a partnership of STF and UnB.',
          route: 'thiago-moreira'
        },
        {
          id: 10,
          role: 'studant',
          photo: require('../assets/img/tito.jpeg'),
          name: 'Vitor Bertulucci (Researcher)',
          resume: 'Developer and Researcher with graduation in Sofware Engeneering at UnB. Researcher student at applied AI Project VICTOR a partnership of STF and UnB.',
          route: 'vitor-bertulucci'
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
