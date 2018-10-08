<template lang="pug">
  div.navbar-container
    q-card.menu-container
      div.first-section
        a(@click="$router.push('/')", title="Legal Labs").logo LEGAL AI
        q-input(
          v-model="search",
          type="search",
          inverted,
          placeholder="Pesquisar...",
          color="grey-8",
          :after="[{icon: 'mdi-magnify'}]"
        ).search-input
      div.menu-items
        q-btn(
          flat,
          dense,
          round,
          icon="menu"
          @click="showMenuMobile"
          aria-label="Menu",
          size="18px",
          color="grey-7"
        ).btn-mobile
        nav
          a(href="#", v-scroll-to="{ el: '#schedule', offset: -90}") Publicações
          a(href="#", v-scroll-to="{ el: '#schedule', offset: -90}") Pessoas
          a(href="#", v-scroll-to="{ el: '#content', offset: -110}") Projetos
          a(href="#", v-scroll-to="'#professionals'") Contato
</template>

<script>
// import MenuMobile from '../MenuMobile'

export default {
  name: 'MenuIndex',
  data () {
    return {
      menuMobileVisibility: false,
      isDesktop: false,
      search: ''
    }
  },
  props: {
    logoWidth: {
      type: String,
      default: '130px'
    }
  },
  methods: {
    showMenuMobile () {
      this.menuMobileVisibility = !this.menuMobileVisibility
    }
  }
}
</script>

<style lang="stylus">
.menu-container
  .q-if-inner
    margin-left 5px
    max-width 150px
    font-size 13px
</style>

<style lang="stylus" scoped>
@import '~variables'
.navbar-container
  width 100%
.menu-container
  background $grey-9
  display flex
  flex-direction row
  justify-content space-between
  padding 15px 30px
  position relative
  border-radius 0
  align-items center
  position fixed
  width 100%
  @media (max-width: 900px)
    padding 12px 7px 9px 17px !important
    width 100%
    margin 0 auto
  @media (max-width: 360px)
    padding 15px 3px 9px 14px
  .logo
    transition all 0.2s ease
    color white
    font-weight bold
    font-size 18px
    &:hover
      cursor pointer
      transform scale(1.02)
    img
      width 100%
      height auto
      user-select none
  .menu-items
    display flex
    flex-direction row
    align-items center
    @media (max-width: 360px)
      margin-top -2px
    nav
      display inline-block
      // margin-top -8px
      @media (max-width: 900px)
        display none
    .btn-mobile
      display none
      @media (max-width: 900px)
        display block
    a
      padding 0 15px
      list-style-type none
      text-transform uppercase
      color white
      margin 0
      transition all 0.2s ease
      text-decoration none
      font-size 14px
      font-weight 500
      &:first-of-type
        padding-left 0
      &:last-of-type
        padding-right 0
      &:hover
        cursor pointer
        color $primary
.change-lang
  max-width 26px
  display inline-block
  margin-left 15px
  &.mobile-lang
    margin-right 5px
  img
    margin-bottom -7px
    width 100%
    cursor pointer
    transition all 0.2s ease
    &:hover
      transform scale(1.1)
.mobile-lang
  img
    margin-bottom -4px
.appear
  .menu-items
    nav
      margin-top 0
.search-input
  margin-left 20px
  max-height 30px
  border-radius 40px
.first-section
  display flex
  flex-direction row
  align-items center
</style>
