<template lang="pug">
  div.publication-card-container
    div.publication-img
      img(:src="image")
    div.publication-infos
      h3 {{title}}
      p {{resume}}
      q-btn(color="primary", @click="redirectToPost(path)").read-article {{$t('postCard.viewArticle')}}
    q-btn(round, :class="lang === 'pt' ? 'pt-lang' : ''").lang {{lang}}
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    image: {
      type: String,
      default: '../../assets/img/placeholder.jpg'
    },
    title: {
      type: String,
      default: 'Publicação'
    },
    resume: {
      type: String,
      default: 'Resumo da publicação'
    },
    lang: {
      type: String,
      default: 'EN'
    },
    path: {
      type: String,
      default: 'post/1'
    }
  },
  methods: {
    redirectToPost (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.publication-card-container
  display flex
  flex-direction column
  max-width 375px
  overflow hidden
  flex 1
  margin 0 10px
  min-width 300px
  margin-bottom 20px
  position relative
  @media (max-width: 1070px)
    min-width 270px
  @media (max-width: 975px)
    min-width 250px
  @media (max-width: 650px)
    min-width 500px
  @media (max-width: 610px)
    min-width 400px
  @media (max-width: 520px)
    min-width 360px
  @media (max-width: 480px)
    max-width 360px
  @media (max-width: 460px)
    min-width 330px
  @media (max-width: 440px)
    min-width 280px
  @media (max-width: 420px)
    max-width 300px
  @media (max-width: 380px)
    min-width 250px
  &:hover
    img
      transform scale(1.05)
    .read-article
      background white !important
      color $primary !important
  .publication-img
    height 100%
    width auto
    display flex
    flex-direction column
    align-items center
    justify-content center
    overflow hidden
    max-height 260px
    @media (max-width: 850px)
      min-width 200px
    img
      width 140%
      display block
      transition all 0.2s ease
      @media (max-width: 850px)
        height 100%
        width auto
        max-height 400px
  .publication-infos
    width 100%
    background $green-8
    padding 30px
    flex 1
    h3
      margin 0
      font-size 22px
      line-height 26px
      color white
      font-weight bold
      margin-bottom 15px
    p
      margin 0
      color white
      @media (max-width: 935px)
        display none
      @media (max-width: 850px)
        display block
.read-article
  margin-top 30px
  box-shadow none
  border-radius 0
  height 45px
  transition all 0.4s ease
  @media (max-width: 935px)
    margin-top 10px
  @media (max-width: 730px)
    margin-top 30px
.lang
  position absolute
  top 0
  right 0
  z-index 5
  background red
  margin 10px
  padding 5px
  width 33px
  height 30px
  color white
  border-radius 0 !important
  border-radius 5px
  background $blue-8
  pointer-events none
  &.pt-lang
    background $blue-4
</style>
