<template lang="pug">
  nav.contact-container#contact
    div.inner-content
      div.social-media
        h1.logo
          q-icon(name="mdi-gavel")
          | LEGAL AI
        p.slogan Direito e Inteligência Artificial em um só lugar
        div.social-media-btns
          q-btn(flat, round, icon="mdi-facebook", color="grey-7")
          q-btn(flat, round, icon="mdi-linkedin", color="grey-7")
          q-btn(flat, round, icon="mdi-twitter", color="grey-7")
          q-btn(flat, round, icon="mdi-youtube", color="grey-7")
      div.contact
        form(action="https://formspree.io/contato@legalabs.com.br", method="POST", target="_blank").fields
          q-input(color="grey-7", placeholder="Nome", :value="name", name="Nome", required, inverted)
          q-input(color="grey-7", placeholder="Ocupação/Cargo e Instituição", name="Ocupacao/Cargo-Instituição", :value="role", required, inverted)
          q-input(color="grey-7", placeholder="Email", type="email", name="Email", :value="email", required, inverted)
          q-input(color="grey-7", placeholder="Mensagem", type="textarea", name="Mensagem", :value="message", :max-height="200", required, inverted)
          q-btn(color="green-8", type="submit") Enviar
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      name: '',
      email: '',
      role: '',
      message: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.contact-container
  width 100%
  font-size 18px
  background #252b2c
  @media (max-width: 1300px)
    padding 0 25px
.inner-content
  width 100%
  max-width 1233px
  margin 0 auto
  display flex
  border-radius 0
  flex-direction row
  align-items center
  padding 30px 0
  @media (max-width: 770px)
    flex-direction column
    padding 45px 0
.social-media
  flex 1
  display flex
  flex-direction column
  justify-content center
  align-items center
.logo
  margin 0
  font-size 60px
  color $grey-7
  font-weight bold
  @media (max-width: 940px)
    font-size 45px
  .q-icon
    margin-top -22px
    margin-right 10px
    font-size 70px
    @media (max-width: 940px)
      font-size 55px
.slogan
  margin 0
  font-size 16px
  color $grey-7
  margin-top 12px
  font-style italic
  @media (max-width: 940px)
    width 70%
    text-align center
.social-media-btns
  margin-top 10px
  .q-btn
    border-radius 0
    width 60px
    height 60px
    font-size 30px
    @media (max-width: 380px)
      font-size 22px
      width 45px
      height 45px
.contact
  width 60%
  @media (max-width: 770px)
    width 100%
    margin-top 30px
.fields
  flex 1
  display flex
  flex-direction column
  width 100%
  padding-left 20px
  @media (max-width: 414px)
    padding-left 0
  .q-input
    margin-bottom 12px
    border-radius 0
    font-size 14px
    padding 5px 15px
    color $green
  .options
    display flex
    padding-bottom 10px
    justify-content space-between
    .label
      color #bbb
      padding-top 4px
      font-size 18px
  .q-btn
    min-width 120px
    background $primary
    color white
    border-radius 0
    box-shadow none
    align-self flex-end
    height 45px
</style>
