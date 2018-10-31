<template lang="pug">
  div.fixed-center.text-center
    p
      img(
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      )
    p.text-faded
      | Desculpa, mas não há nada aqui&nbsp;
      strong (404)
    q-btn(
      color="primary"
      style="width:200px;"
      @click="$router.push('/')"
    ).btn-not-found Voltar
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style lang="stylus">
.btn-not-found
  box-shadow none
  border-radius 0
  height 45px
  margin-top 10px
</style>
