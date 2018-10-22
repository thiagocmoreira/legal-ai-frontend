<template lang="pug">
div.post-author-container
  div.img-author
    img(:src="authorPhoto")
  div.infos
    h4 Por {{authorName}}
    h5 {{authorRole}}
    h5 {{date}}
</template>

<script>
export default {
  name: 'PostAuthor',
  props: {
    authorName: {
      type: String,
      required: true
    },
    authorPhoto: {
      type: String,
      required: true
    },
    authorRole: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    timeLecture: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.post-author-container
  margin 40px 0
  display flex
  flex-direction row
  .img-author
    border-radius 50px
    overflow hidden
    width 70px
    height 70px
    margin-right 10px
    img
      display block
      width 100%
  .infos
    display flex
    flex-direction column
    h4
      font-size 16px
      line-height 1.58
      letter-spacing -.003em
      word-break break-word
      word-wrap break-word
      // color #3559a5
      color $text
      font-weight 500
      margin 0
    h5
      font-size 14px
      line-height 1.58
      letter-spacing -.003em
      word-break break-word
      word-wrap break-word
      color $grey-6
      font-weight 400
      margin 0
</style>
