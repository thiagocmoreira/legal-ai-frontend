<template lang="pug">
  nav.about-us-container#about-us
    q-scroll-observable(@scroll="userHasScrolled")
    div.inner-content
      div.text
        h3.title {{$t('home.about.title')}}
        p
          | {{$t('home.about.text1')}}
          a(href="https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/", target="_blank").link The Stanford Center for Legal Informatics – CodeX – Stanford University
          | {{$t('home.about.text2')}}
          a(href="http://www.uva.nl/en", target="_blank").link PPLE College of University of Amsterdam – UvA
          | {{$t('home.about.text3')}}
      div.list
        div.list-items
          div.inner-list {{$t('home.about.text4')}}
          div.inner-list {{$t('home.about.text5')}}
          div.inner-list {{$t('home.about.text6')}}
          div.inner-list {{$t('home.about.text7')}}
        div.img-animation
          img(src="../../assets/img/hand.png").hand
          img(v-if="show[0]", src="../../assets/img/light.png").light.animate-scale
          img(v-if="show[1]", src="../../assets/img/balance1.png").balance.animate-scale
          img(v-if="show[2]", src="../../assets/img/binary.png").binary-5.animate-pop
          img(v-if="show[3]", src="../../assets/img/binary.png").binary-3.animate-pop
          img(v-if="show[4]", src="../../assets/img/binary.png").binary-4.animate-pop
          img(v-if="show[5]", src="../../assets/img/binary.png").binary.animate-pop
          img(v-if="show[6]", src="../../assets/img/binary.png").binary-1.animate-pop
          img(v-if="show[7]", src="../../assets/img/binary.png").binary-2.animate-pop
          img(v-if="show[8]", src="../../assets/img/binary.png").binary-6.animate-pop
          img(v-if="show[9]", src="../../assets/img/binary.png").binary-7.animate-pop
          img(v-if="show[10]", src="../../assets/img/binary.png").binary-8.animate-pop
          p.bug {{ size }} {{ show }}
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      size: 0,
      show: [false, false, false, false, false, false, false, false, false, false, false],
      wasActivated: false,
      isMobile: false
    }
  },
  methods: {
    setAnimation () {
      let interval = setInterval(() => {
        this.show[this.size] = true
        this.size++
        if (this.size === this.show.length) {
          clearInterval(interval)
        }
      }, 300)
    },
    userHasScrolled (scroll) {
      if (!this.isMobile && !this.wasActivated && scroll.position >= 170) {
        this.wasActivated = true
        this.setAnimation()
      } else if (this.isMobile && !this.wasActivated && scroll.position >= 950) {
        this.wasActivated = true
        this.setAnimation()
      }
    }
  },
  mounted () {
    this.isMobile = this.$q.platform.is.mobile
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.about-us-container
  width 100%
  color $grey-9
  font-size 18px
  position relative
  @media (max-width: 1300px)
    padding 0 25px
  @media (max-width: 440px)
    padding 0 15px
.inner-content
  width 100%
  max-width 1233px
  margin 40px auto
  display flex
  border-radius 0
  flex-direction column
  background white
  padding 30px
  justify-content center
  @media (max-width: 440px)
    padding 30px 25px
    text-align justify
.text
  flex 1
  margin-bottom 25px
  .title
    margin 0
    font-size 30px
    text-transform uppercase
    font-weight bold
    position relative
    margin-bottom 25px
    text-align center
    @media (max-width: 380px)
      font-size 26px
    &:after
      content ''
      display block
      width 275px
      height 3px
      background linear-gradient(to right, $blue-8, $green-6)
      margin 0 auto
      @media (max-width: 380px)
        width 235px
  p
    margin 0
.link
  color $grey-9
  text-decoration none
  &:visited
    color $grey-9
  &:hover
    color $primary
.list
  display flex
  @media (max-width: 1010px)
    flex-direction column
    align-items center
  .list-items
    flex 1
    .inner-list
      margin-bottom 10px
  .img-animation
    width 285px
    height 290px
    margin-left 15px
    position relative
    @media (max-width: 1010px)
      margin-left 0
      height 330px
    @media (max-width: 390px)
      transform scale(0.9)
    @media (max-width: 360px)
      transform scale(0.8)
    @media (max-width: 330px)
      transform scale(0.7)
    img
      width 100%
      margin-top -20px
      @media (max-width: 1010px)
        margin-top 20px
  .hand
    position absolute
    bottom 0
    right 0
    max-width 280px
  .light
    position absolute
    bottom 0
    right 0
    margin-bottom 55px
    margin-right 87px
    max-width 180px
  .balance
    position absolute
    top 0
    right 0
    margin-right 72px
    max-width 210px
  .binary-5
    position absolute
    bottom 0
    left 0
    margin-left 50px
    max-width 25px
    margin-bottom 110px
  .binary-3
    position absolute
    bottom 0
    left 0
    margin-left 121px
    max-width 20px
    margin-bottom 117px
  .binary-4
    position absolute
    bottom 0
    left 0
    margin-left 154px
    max-width 15px
    margin-bottom 125px
  .binary
    position absolute
    bottom 0
    left 0
    margin-left 124px
    max-width 25px
    margin-bottom 130px
  .binary-1
    position absolute
    bottom 0
    left 0
    margin-left 84px
    max-width 25px
    margin-bottom 123px
  .binary-1
    position absolute
    bottom 0
    left 0
    margin-left 84px
    max-width 25px
    margin-bottom 123px
  .binary-2
    position absolute
    bottom 0
    left 0
    margin-left 80px
    max-width 20px
    margin-bottom 98px
  .binary-6
    position absolute
    bottom 0
    left 0
    margin-left 95px
    max-width 20px
    margin-bottom 108px
  .binary-7
    position absolute
    bottom 0
    left 0
    margin-left 115px
    max-width 20px
    margin-bottom 90px
  .binary-8
    position absolute
    bottom 0
    left 0
    margin-left 55px
    max-width 20px
    margin-bottom 128px
.bug
  font-size 0px
  margin 0
  display hidden
</style>
