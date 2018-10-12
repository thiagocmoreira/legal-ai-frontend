<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {offset: -30})

export default {
  name: 'App'
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
