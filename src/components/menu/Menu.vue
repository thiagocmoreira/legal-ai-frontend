<template lang="pug">
  div.navbar-container
    q-card.menu-container
      div.inner-menu
        div.first-section
          a(@click="$router.push('/')", title="Legal AI").logo
            q-icon(name="mdi-gavel", size="23px")
            | LEGAL AI
          q-input(
            v-model="search",
            type="search",
            inverted-light,
            :placeholder="$t('menu.search')",
            :after="[{icon: 'mdi-magnify', color: 'blue'}]"
          ).search-input
        div.menu-items
          q-btn(
            v-if="onIndex",
            flat,
            dense,
            round,
            icon="menu"
            @click="showMenuMobile"
            aria-label="Menu",
            size="18px",
            color="grey-7"
          ).btn-mobile
          q-btn(
            v-else,
            flat,
            dense,
            round,
            icon="home"
            @click="$router.push('/')"
            aria-label="Menu",
            size="18px",
            color="grey-7"
          ).btn-mobile
          nav(v-if="onIndex")
            a(href="#", v-scroll-to="{ el: '#about-us', offset: -40}") {{$t('menu.about')}}
            a(href="#", v-scroll-to="{ el: '#publications', offset: -75}") {{$t('menu.posts')}}
            a(href="#", v-scroll-to="{ el: '#projects', offset: -80}") {{$t('menu.projects')}}
            a(href="#", v-scroll-to="{ el: '#people', offset: -90}") {{$t('menu.people')}}
            a(href="#", v-scroll-to="'#contact'") {{$t('menu.contact')}}
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
  methods: {
    changeLang () {
      if (this.brLang) {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'ptBr'
      }
    },
    showMenuMobile () {
      this.menuMobileVisibility = !this.menuMobileVisibility
    }
  },
  computed: {
    onIndex () {
      return this.$route.path === '/'
    },
    brLang () {
      return this.$i18n.locale === 'ptBr'
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
  background $grey-1
  padding 15px 20px
  position relative
  border-radius 0
  align-items center
  position fixed
  width 100%
  z-index 10
  top 0
  @media (max-width: 900px)
    padding 12px 7px 9px 17px !important
    width 100%
    margin 0 auto
  @media (max-width: 360px)
    padding 15px 3px 9px 14px
  .inner-menu
    max-width 1350px
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
  .logo
    transition all 0.2s ease
    color $primary
    font-weight bold
    font-size 18px
    &:hover
      cursor pointer
      transform scale(1.02)
    img
      width 100%
      height auto
      user-select none
    .q-icon
      color $green-8
      margin-top -7px
      margin-right 5px
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
      color $primary
      margin 0
      transition all 0.2s ease
      text-decoration none
      font-size 14px
      font-weight 600
      &:first-of-type
        padding-left 0
      &:last-of-type
        padding-right 0
      &:hover
        cursor pointer
        color $green-8
.search-input
  margin-left 20px
  max-height 30px
  border-radius 40px
  box-shadow none
  background rgba(0, 0, 0, 0.08) !important
  color $grey-8 !important
  @media (max-width: 570px)
    display none
.first-section
  display flex
  flex-direction row
  align-items center
</style>
