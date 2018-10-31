<template lang="pug">
div.post-container
  menu-page.menu-blog
  div.parallax
      div.img
        img(:src="bg")
        div.parallax-content
          div.content.animate-fade
            h1.logo
              q-icon(name="mdi-gavel")
              | LEGAL AI
            h2.page-title {{$t('post.name')}}
  div.post-inside
    h1 Projeto VICTOR: Resultados Parciais nas Classificações de Peças
    article
      p.preface O dado para classificar peças, foi o rotulado pelos especialistas de direito no projeto. Utilizando da primeira e segunda páginas, quando disponível, eles rotularam as peças dos processos em 6 categorias: Recurso Extraordinário (RE), Petição de Agravo em Recurso Extraordinário (ARE), Sentença (Sent.), Acórdão de segunda instância que julga apelação (Acórdão), Despacho de admissibilidade do agravo em recurso extraordinário (Desp.) e a categoria genérica para todos os outros documentos (Outro). De um total de 6814 amostras de texto distintas, a distribuição de cada categoria de peças no conjunto de dados está de acordo com a Figura 1.

      img(src="../assets/img/classificacao-stf-1.jpg")
      h6 Figura 1. Distribuição de documentos por categoria.

      h2 I - Separação de Peças (PDF)

      p O dado para separação de peças foi coletado a partir dos documentos providos pelo STF, com intuito de reproduzir o ambiente mais próximo do real. Sendo assim, foram treinado modelos com o objetivo de identificar páginas que apresentassem uma página inicial de um documento jurídico. A partir dessa identificação é então possível a classificação de tal documento como uma peça a ser analisada pelo Tribunal. Essa estratégia abrange mais documentos por agora analisar peças, que antes poderiam ser ignorados devido a erros humanos em digitalização.

      img(src="../assets/img/tabela1.png")
      h6 Tabela 1. Resultados de separação de peças utilizando modelos neurais.

      h2 II - Classificação de Peças

      p Foi utilizado o processador Intel i5 7200u, placa gráfica Nvidia GTX-940M e memória RAM 8 GB DDR4.

      img(src="../assets/img/tabela2.png")
      h6 Tabela 2. Resultados de predição de peças utilizando modelos neurais.

      p A combinação desses modelos, foi feita confrontando a classificação do modelo A com o modelo B, e caso haja distinção entre a classificação de ambos os modelos, são utilizados modelos fracos, com treinamento especializado em separar duas classes seguindo os resultados na Tabela 2. A métrica validada para determinar os melhores modelos foi o F1-Score.

      img(src="../assets/img/tabela3.png")
      h6 Tabela 3. Resultado da especialização de métodos fracos para classificação de duas classes de documentos.

      h2 III - Classificação de Temas

      p
        | O inicio de trabalhos de classificação de Temas foi iniciado recentemente – menos de uma semana. No entanto, já temos experimentos com alguns métodos que foram testados no problema de Peças. Estes resultados preliminares sobre 27 temas demonstram já um potencial de&nbsp;
        b precisão de 84%
        | .

      img(src="../assets/img/tabela4.png")
      h6 Tabela 4. Resultados de predição de temas utilizando modelos de aprendizado.

      h2 IV - Frente de visão computacional

      p Não temos resultados para apresentar sobre a frente de visão computacional. No entanto, o professor Teófilo disse estar otimista sobre a hipótese de esta frente chegar a resultados importantes que se materializariam como uma alternativa viável para otimizar o processo de OCR utilizado neste projeto.

      h2 V - Agregação de valor aos dados do STF

      p Além da premissa de classificação de processos e documentos sobre o temas de repercussão geral, ainda foram gerados produtos de software que agregam valor ao parque de soluções do Tribunal. Esse valor pode ser visto na conversão de processos digitalizados em dados passíveis de serem analisados por algoritmos de IA.
      P Dessa forma o Tribunal está dando um passo significativo para aplicação de inteligência artificial em seus dados, não só no objetivo de classificação de processos em temas da repercussão geral, mas em diversos objetivos que venham a utilizar processos remetidos ao Tribunal. As próximas aplicações se limitam apenas a imaginação e necessidades do STF.
      P.with-separator Além disso, juntamente com essa entrega se espera melhorar o uso de sistemas internos do Tribunal, que são utilizados pelos gabinetes e analistas, o que agilizará o julgamento de diversos processos.

      h2 VI - Conclusões

      p
        | O melhor modelo para a predição de peças é&nbsp;
        b a utilização de métodos fracos para realizar a decisão entre distinção da classificação do modelo Convolutional e de Convolutional Sentence Classification
        | . Houve um acréscimo de 0,73% na acurácia do modelo de Convolutional Sentence Classification com pouco acréscimo no tempo de classificação, fechando com uma&nbsp;
        b acurácia de 94,13%
        | .
      p É preferível utilizar os modelos combinados, pois uma rede neural poder sofrer algum enviesamento durante o seu treinamento e ao comparar dois modelos, pode-se mitigar este tipo de problema. Além disso, tem-se certo grau de certeza que o desempate será feito corretamente pois são métodos treinados apenas com as duas classes.
      p
        | Em se tratando do problema de&nbsp;
        b classificação de Temas&nbsp;
        | , o trabalho está sendo iniciado nestes dias. O melhor experimento demonstrou uma&nbsp;
        b precisão de 84%
        | .

      post-author(
        authorName="Nilton Correia da Silva",
        authorPhoto="https://media.licdn.com/dms/image/C4E03AQHqPCJENSXeVw/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=z9WwbOFGmImWzq0_JISFDhCrbTrDo7hzznU5ntfimIQ",
        authorRole="Prof. Dr. Coordenador do GPAM",
        date="27 de Agosto de 2018",
        timeLecture="6"
      )
  footer-page
</template>

<script>
import MenuPage from '../components/menu/Menu'
import FooterPage from '../components/general/FooterPage'
import PostAuthor from '../components/posts/PostAuthor'

export default {
  name: 'Preconceito',
  components: {
    MenuPage,
    FooterPage,
    PostAuthor
  },
  props: {
    postId: {
      type: String
    }
  },
  computed: {
    bg () {
      return require('../assets/img/stf.jpeg')
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '~variables'
.post-container
  display flex
  flex-direction column
  background white
  @media (max-width: 414px)
    padding-top 70px
.menu-blog
  @media (max-width: 414px)
    position fixed
    z-index 1
    top 0
.post-inside
  width 35%
  margin 0 auto
  padding 40px 0 60px 0
  @media (max-width: 1530px)
    width 60%
  @media (max-width: 768px)
    width 88%
    padding 20px 0 60px 0
  @media (max-width: 414px)
    width 85%
    padding 20px 0 60px 0
  h1
    font-weight 800
    font-size 3rem
    line-height 3.4rem
    letter-spacing -0.3px
    display flex
    max-width calc(100% - 15px)
    word-break break-word
    color $grey-9
    @media (max-width: 414px)
      font-size 2.5rem
      line-height 2.9rem
  article
    p
      font-size 21px
      line-height 1.58
      letter-spacing -.003em
      word-break break-word
      word-wrap break-word
      color $grey-9
      font-family Georgia, Cambria, 'Times New Roman', Times, serif
      font-weight 500
    .preface
    .with-divisor
      &:after
        content ''
        display block
        background $grey-9
        margin 40px 0
        width 60px
        height 2px
    h2
      font-weight 800
      font-size 1.7rem
      line-height 2rem
      letter-spacing -0.3px
      display flex
      max-width calc(100% - 15px)
      word-break break-word
      color $grey-9
    img
      margin 0 auto
      display block
      @media (max-width: 768px)
        max-width 660px
      @media (max-width: 414px)
        max-width 320px
    h6
      font-size 16px
      line-height 1
      letter-spacing -0.2px
      word-break break-word
      word-wrap break-word
      color $grey-9
      font-family Georgia, Cambria, 'Times New Roman', Times, serif
      font-weight 500
      display block
      width 100%
      text-align center
      margin 20px 0 40px 0
    blockquote
      font-size 24px
      line-height 1.4
      letter-spacing -.003em
      word-break break-word
      word-wrap break-word
      color $grey-9
      font-family Georgia, Cambria, 'Times New Roman', Times, serif
      font-weight 500
      margin 40px 0
      font-style italic
  a
    color $grey-9
    $:visited
      color $grey-9
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
</style>
