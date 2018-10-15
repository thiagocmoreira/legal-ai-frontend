<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import Meta from 'vue-meta'

Vue.use(VueScrollTo, {offset: -30})
Vue.use(Meta)

export default {
  name: 'App',
  metaInfo: {
    title: 'Legal AI | Direito e Inteligência Artificial em um só lugar'
  }
}
</script>

<style lang="stylus">
@font-face
  font-family Lato
  src url(./assets/fonts/Lato/Lato-Regular.ttf)
@font-face
  font-family Lato
  font-weight bold
  src url(./assets/fonts/Lato/Lato-Black.ttf)
#q-app
  font-family Lato, sans-serif
</style>
