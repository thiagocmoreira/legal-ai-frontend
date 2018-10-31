<template lang="pug">
  div.publication-card-container
    div.publication-img
      img(src="https://cdn-images-1.medium.com/max/800/1*y0va7PWFAnogoh-o87ly1Q.jpeg")
    div.publication-infos
      h3 {{title}}
      p {{resume}}
      q-btn(color="primary", @click="$router.push('/post/1')").read-article {{$t('postCard.viewArticle')}}
</template>

<script>
export default {
  name: 'PublicationCard',
  props: {
    title: {
      type: String,
      default: 'Publicação'
    },
    resume: {
      type: String,
      default: 'Resumo da publicação'
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
  @media (max-width: 460px)
    min-width 330px
  @media (max-width: 440px)
    min-width 280px
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
    @media (max-width: 850px)
      min-width 200px
    img
      width 110%
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
</style>
