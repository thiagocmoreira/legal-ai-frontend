<template lang="pug">
  q-page.project-container
    menu-index
    div.parallax
      div.img
        img(src="https://images.unsplash.com/photo-1525566713543-1869d8d2a6d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a584b67370ba89f61d10395c5c4a6b98&auto=format&fit=crop&w=1367&q=80")
        div.parallax-content
          div.content.animate-fade
            h1.logo
              q-icon(name="mdi-gavel")
              | LEGAL AI
            h2.page-title Projeto VICTOR
    div.project
      div.inner-project
        div.about
          div.title
            span Sobre o Projeto
            div.labels
              div.label Inteligência Artificial
              div.label Direito
          div.separator
          p.text
            | O Projeto VICTOR utiliza Inteligência Artificial (IA) para aumentar a eficiência e a velocidade de avaliação judicial dos processos que chegam ao Supremo Tribunal Federal (STF). Desenvolvido em parceria com a Universidade de Brasília – UnB, o projeto é o mais relevante no âmbito acadêmico brasileiro relacionado à aplicação de IA no Direito.
            | O projeto será utilizada na execução de quatro atividades: conversão de imagens em textos no processo digital, separação do começo e do fim de um documento (peça processual, decisão, etc) em todo o acervo do Tribunal, separação e classificação das peças processuais mais utilizadas nas atividades do STF e a identificação dos temas de repercussão geral de maior incidência.
            | Os testes com os processos envolvendo repercussão geral foram iniciados com 27 temas mais recorrentes no Tribunal, representando 60% do total de temas regularmente identificados.
            | Além disso, possibilitará melhor aproveitamento de recursos materiais e humanos do Tribunal, acelerando a análise dos processos e reduzindo o congestionamento na admissibilidade dos recursos nos tribunais de origem, auxiliando o Poder Judiciário a cumprir sua missão em diversas instâncias.
            | Para classificar e analisar os cerca de 42 mil processos que chegaram ao STF no primeiro semestre, seriam necessárias quase 22 mil horas de trabalho de servidores e estagiários. O tempo que os servidores dedicavam a essas tarefas de classificação, organização e digitalização dos processos será transferido para etapas mais complexas do processamento judicial.
            | O nome do projeto, VICTOR, é uma homenagem a Victor Nunes Leal (falecido), ministro do STF de 1960 a 1969, autor da obra Coronelismo, Enxada e Voto e principal responsável pela sistematização da jurisprudência do STF em súmula, o que facilitou a aplicação dos precedentes judiciais aos recursos.
          p.font Fonte: STF
    footer-page.foorer-page
</template>

<script>
import MenuIndex from '../components/menu/Menu'
import FooterPage from '../components/general/FooterPage'
export default {
  name: 'Posts',
  components: {
    MenuIndex,
    FooterPage
  },
  metaInfo: {
    title: 'Projeto Victor - Legal AI'
  },
  computed: {
    statue () {
      return require('../assets/img/statue.jpeg')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.project-container
  display flex
  flex-direction column
  background $grey-3
.img
  margin-top 60px
  position relative
  width 100%
  height 200px
  overflow hidden
  display flex
  flex-direction column
  align-items center
  justify-content center
  @media (max-width: 670px)
    height 160px
  img
    width 100%
.parallax-content
  position absolute
  top 0
  width 100%
  height 100%
  // background rgba(35, 35, 35, 0.8)
  background linear-gradient(to right, $primary, rgba(34, 33, 126, 0.97), transparent)
  // background linear-gradient(to right, $primary, transparent)
  display flex
  flex-direction column
.content
  width 100%
  max-width 1233px
  margin 0 auto
  display flex
  // justify-content center
  align-items center
  // flex-direction column
  height 100%
  @media (max-width: 1300px)
    padding 0 25px
  @media (max-width: 670px)
    justify-content center
  @media (max-width: 460px)
    flex-direction column
.logo
  margin 0
  font-size 60px
  color white
  font-weight bold
  @media (max-width: 1160px)
    font-size 50px
  @media (max-width: 670px)
    font-size 35px
  .q-icon
    margin-top -22px
    margin-right 10px
    font-size 70px
    @media (max-width: 1160px)
      font-size 60px
    @media (max-width: 670px)
      font-size 45px
.page-title
  color white
  margin 0
  font-size 50px
  line-height 56px
  margin-left 25px
  @media (max-width: 1160px)
    font-size 38px
    margin-left 20px
  @media (max-width: 670px)
    font-size 32px
    line-height 36px
    margin-top 3px
    margin-left 15px
  @media (max-width: 460px)
    margin-left 0
.project
  @media (max-width: 1300px)
    padding 0 25px
  @media (max-width: 440px)
    padding 0 15px
.inner-project
  width 100%
  max-width 1233px
  margin 40px auto
  display flex
  flex-wrap wrap
  position relative
  @media (max-width: 440px)
    padding 25px 10px
.labels
  margin 0
  font-size 13px
  display flex
  .label
    margin-left 10px
    background $green-8
    color white
    padding 5px 10px
    border-radius 20px
    max-height 27px
    &:first-of-type
      margin-left 0
      background $blue
.about
  flex 1
  background white
  display flex
  padding 30px 25px
  flex-direction column
  width 100%
  .title
    font-size 27px
    color $grey-8
    position relative
    width 100%
    margin-bottom 10px
    display flex
    justify-content space-between
  .text
    color $grey-8
    white-space pre-wrap
    line-height 22px
  .font
    font-size 14px
    color $grey-8
    margin-bottom 0
    font-weight 600
    font-style italic
.separator
  display block
  margin-bottom 20px
  width 100%
  height 3px
  background $grey-4
</style>
