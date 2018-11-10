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
          name: 'Ricardo Fernandes (Executive Director)',
          photo: require('../../assets/img/ricardo.jpg'),
          resume: 'Post-Ph.D in Legal Informatics at the Codex (Stanford). Founder of the IBIA. Adjunct Professor of Law School (UnB). Legal Labs founder',
          route: 'ricardo-fernandes'
        },
        {
          id: 6,
          role: 'teacher',
          name: 'Roland Vogl',
          photo: require('../../assets/img/roland.png'),
          resume: 'Executive Director of CodeX – The Stanford Center for legal informatics. Executive Director of the Stanford Program in Law, Science and technology.',
          route: 'roland-vogl'
        },
        {
          id: 2,
          role: 'studant',
          name: 'Danilo Barros (Researcher)',
          photo: require('../../assets/img/danilos.jpeg'),
          resume: 'Developer and Researcher with training in Software Engineering at the UnB. Researcher student at applied AI Project VICTOR a partnership of Supreme Federal Court and UnB.',
          route: 'danilo-barros'
        },
        {
          id: 5,
          role: 'teacher',
          name: 'Nilton Silva (AI Director)',
          photo: require('../../assets/img/nilton.jpeg'),
          resume: 'Graduated in computing (UEG). Master of Computer Science (UnB). PhD in Data Processing and Environmental Analysis (UnB). professor/researcher at Faculty of Engineering (UnB)',
          route: 'nilton-silva'
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
