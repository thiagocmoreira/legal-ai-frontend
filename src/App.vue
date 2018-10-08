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

<style>
</style>
