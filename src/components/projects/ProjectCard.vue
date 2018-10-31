<template lang="pug">
  div.project-card-container
    img(:src="statue")
    div.inner-project
      div.content
        h3 {{project.name}}
        p {{project.resume}}
        q-btn(@click="$router.push('projeto-victor')").more {{$t('projectCard.viewMore')}}
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    statue () {
      return ('../../assets/img/statue.jpeg')
    }
  }
}
</script>

<style lang="stylus" scoped>
.project-card-container
  height 350px
  overflow hidden
  display flex
  flex-direction column
  justify-content center
  align-items center
  position relative
  transition all 0.4s ease
  flex 1
  margin 0 10px
  max-width 350px
  @media (max-width: 1023px)
    min-width 400px
    margin-bottom 20px
    min-height 350px
  @media (max-width: 965px)
    height 300px
  @media (max-width: 560px)
    min-width 300px
  @media (max-width: 400px)
    min-width 200px
  @media (max-width: 370px)
    height 400px
  @media (max-width: 330px)
    height 450px
  &:hover
    transform scale(1.03)
    .more
      background $green-8
      color $green-9
  img
    width 100%
    @media (max-width: 370px)
      transform scale(1.5)
.inner-project
  position absolute
  top 0
  width 100%
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  background rgba(70, 70, 70, 0.65)
.content
  width 90%
  height 90%
  border solid 2px white
  padding 20px
  display flex
  display flex
  flex-direction column
  justify-content center
  h3
    color white
    margin 0
    font-size 26px
    font-weight bold
    @media (max-width: 370px)
      line-height 28px
      margin-bottom 5px
  p
    margin 0
    color white
  .more
    margin-top 20px
    box-shadow none
    border-radius 0
    background white
    color $grey-9
    max-width 115px
  .more
    margin-top 20px
    box-shadow none
    border-radius 0
    background white
    color $grey-9
    max-width 115px
</style>
