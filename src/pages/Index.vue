<template lang="pug">
  q-page.index-container
    div.content
      div.logo-container
        img(src="../assets/img/logo-unb.png").logo-unb
      h1.title
        q-icon(name="mdi-gavel", color="primary")
        | Legal AI
      p.coming Em Breve
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="stylus" scoped>
.index-container
  background url(http://minsk.bigdataweek.com/wp-content/uploads/sites/27/2017/08/AI_confer_8.jpg)
  overflow hidden
  background-size cover
  background-position center
  height 100vh
.content
  width 100%
  height 100vh
  background rgba(0, 0, 0, .4)
  position absolute
  top 0
  display flex
  flex-direction column
  align-items center
  justify-content center
.logo-container
  padding 4px 4px 0 4px
  background white
.logo-unb
  max-width 120px
  height auto
.title
  color white
  margin 30px 0 20px 0
  font-size 60px
  font-weight 500
  .q-icon
    margin-right 10px
    margin-top -10px
.coming
  margin 0
  color white
  font-size 20px
</style>
