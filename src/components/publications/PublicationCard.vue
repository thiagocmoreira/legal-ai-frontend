<template lang="pug">
  div.publication-card-container
    div.publication-img
      img(src="https://cdn-images-1.medium.com/max/800/1*y0va7PWFAnogoh-o87ly1Q.jpeg")
    div.publication-infos
      h3 {{title}}
      p {{resume}}
      q-btn(color="primary").read-article Ler artigo
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
  .publication-img
    width 100%
    height 250px
    display flex
    flex-direction column
    align-items center
    justify-content center
    overflow hidden
    img
      width 100%
      display block
      transition all 0.2s ease
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
.read-article
  margin-top 30px
  box-shadow none
  border-radius 0
  height 45px
  transition all 0.4s ease
.publication-card-container:hover
  img
    transform scale(1.05)
  .read-article
    background white !important
    color $primary !important
</style>
