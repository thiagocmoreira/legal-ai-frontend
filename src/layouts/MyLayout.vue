<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    //- q-layout-header
    //-   q-toolbar(
    //-     color="primary"
    //-   )
    //-     q-toolbar-title
    //-       | Legal AI
    //-       div(slot="subtitle") Running on Quasar v{{ $q.version }}
    q-page-container
      router-view
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
