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
    h1 Os preconceitos ocultos na inteligência artificial, e como removê-los
    article
      p.preface Com avanços a passos largos, as técnicas de Inteligência Artificial (IA) vêm superando a performance humana em diversas tarefas que há poucos anos eram solucionadas apenas por especialistas. Com cada vez mais decisões importantes sendo tomadas por estes algoritmos, é fundamental compreender os fatores que levam as IAs a tomar decisões. A seguir, iremos desmistificar o funcionamento da inteligência artificial e apresentar a importância de treinar estes algoritmos adequadamente.

      h2 Como uma inteligência artificial aprende?
      p Assim como recorremos a especialistas para aprender, a inteligência artificial necessita de professores para ensiná-la. O procedimento mais comum para que uma IA aprenda a realizar alguma tarefa, como a classificação de imagens ou processos jurídicos, é conhecido como aprendizado supervisionado.
      p Em uma etapa de treinamento, apresentamos um exemplo para a IA e esperamos sua resposta. Caso esta não acerte em sua decisão, realiza-se uma intervenção, informando qual deveria ser a classificação adequada. O procedimento é realizado até que a IA seja capaz de classificar os exemplos com mínima necessidade de correção. Neste momento, considera-se que a Inteligência Artificial foi treinada para realizar a tarefa desejada. Em seguida, em uma etapa conhecida como validação, exemplos nunca vistos pela IA são apresentados, a fim de verificar se o aprendizado foi efetivo.

      img(src="https://cdn-images-1.medium.com/max/600/1*IC2gujAWapDEaG5VKZ4p9A.png")
      h6 Processo de aprendizado supervisionado da Inteligência Artificial

      p Em uma etapa de treinamento, apresentamos um exemplo para a IA e esperamos sua resposta. Caso esta não acerte em sua decisão, realiza-se uma intervenção, informando qual deveria ser a classificação adequada. O procedimento é realizado até que a IA seja capaz de classificar os exemplos com mínima necessidade de correção. Neste momento, considera-se que a Inteligência Artificial foi treinada para realizar a tarefa desejada. Em seguida, em uma etapa conhecida como validação, exemplos nunca vistos pela IA são apresentados, a fim de verificar se o aprendizado foi efetivo.
      p.with-divisor Uma analogia comum com o processo de aprendizado humano é pensar no treinamento de uma IA como um curso. Neste, a etapa de treinamento seria o equivalente a realização de uma lista de exercícios com gabarito, em que exemplos são apresentados até que o aluno esteja apto a realizá-los. Já a prova final, em que novos problemas são apresentados ao estudante com o objetivo de verificar a compreensão dos conceitos necessários, consiste na etapa de validação.

      h2 Transformando palavras em números
      p Mas, como uma Inteligência Artificial é capaz de ler? Afinal, uma IA é em sua essência um complexo modelo matemático. É necessário, portanto, realizar a transformação de palavras em números. A forma mais simples de efetuar este processo é associar cada palavra a um respectivo número. Em um vocabulário com as palavras cachorro, gato, maçã e banana, podemos transformar cada uma aos números 1, 2, 3 e 4, respectivamente.

      img(src="https://cdn-images-1.medium.com/max/800/1*lNUi5Ww7s4PMo-0_C89Cfw.png")
      h6 Rotulando entidades do mundo real

      p Entretanto, é intuitivo perceber que esta não é uma boa representação. Apenas olhando estes números, não é possível identificar que a semântica de gato é mais próxima a cachorro do que a maçã, implicando dificuldades no processo de aprendizado.
      p
        | Para solucionar este problema, técnicas mais avançadas conhecidas como&nbsp;
        i word embedding&nbsp;
        | representam palavras de maneira mais rica, utilizando vetores, ou seja, uma sequência de números. Uma forma lúdica de compreender o funcionamento destas técnicas é pensar em cada um destes números como uma característica da palavra. Neste caso, valores próximos a 1 indicam a presença da característica (por exemplo, laranja e maçã apresentam valores altos para “Comida” , 0.99 e 0.95, respectivamente), enquanto valores próximos a 0 remetem a falta (como cachorro com valor 0.05 em “Verbo”).
      p.with-divisor Uma das grandes vantagens desta técnica é a possibilidade de verificação da adequação destas características. Por exemplo, ao observar o campo “Felino” podemos analisar o quão “felina” é cada palavra. Como veremos, essa simples análise pode ter impactos significativos, quando realizada observando o contexto social dessas características.

      h2 O reflexo da sociedade
      p
        | Tal como um aluno é fortemente influenciado por seus professores, a representação semântica aprendida por um word embedding depende da qualidade dos exemplos apresentados. Analisemos o caso prático de um&nbsp;
        a(href="http://www.nilc.icmc.usp.br/nilc/index.php/repositorio-de-word-embeddings-do-nilc#", target="_blank", title="word embedding desenvolvido pela USP")
          i word embedding&nbsp;
          | desenvolvido pela USP&nbsp;
        | que aprendeu conceitos linguísticos a partir de textos da Wikipedia, notícias, livros, entre outros.
      p Para verificar o poder de aprendizado da IA, pedimos que ela avaliasse qual gênero, masculino ou feminino, está mais ligado ao conceito de algumas profissões. Visto de maneira simplificada, pode-se pensar neste processo como a verificação da característica “Gênero”, em que valores próximos a 1 indicam o gênero feminino e valores próximos a 0, o masculino. Valores intermediários, ou seja, próximos a 0,5 são tomados como neutros.

      img(src="https://cdn-images-1.medium.com/max/800/1*6BifldXVRz1gU7w4bEhGCw.png")
      h6 Gênero de cara profissão

      p Nos exemplos apresentados, podemos perceber que a IA aprendeu a classificar corretamente as profissões com definição de gênero. Para as profissões independentes de gênero, no entanto, observamos que a máquina relacionou as profissões aos seus estereótipos sociais.
      p
        | Para compreender os sérios problemas que estes conceitos aprendidos podem gerar, vamos ao exemplo de uma IA de avaliação automática de currículos, que utilize este&nbsp;
        i word embedding&nbsp;
        | para selecionar candidatos. No caso da escolha do melhor candidato a vaga de economista, é muito provável que homens tenham preferência em relação a mulheres, já que, para a IA, na própria definição de economista está o conceito de homem.
      p Podemos estender a análise de gênero para etnias. Agora, solicitamos à IA que indique as 20 profissões mais relacionadas a etnia branca e as 20 profissões menos brancas.

      img(src="https://cdn-images-1.medium.com/max/800/1*TpDw5bMqUx2c0h2JtwvIog.png")
      h6 Etnia para cada profissão

      p.with-divisor Observamos que as profissões que exigem maior nível de escolaridade são mais relacionadas a etnia branca, enquanto as profissões com menor exigência de escolaridade são tidas como não-brancas. É difícil imaginar situações em que estas informações preconceituosas aprendidas não apresentem consequências negativas à sociedade.

      h2 Removendo os preconceitos históricos
      p
        | Como visto, os conceitos aprendidos pela IA nada mais são do que o reflexo de nossa sociedade. A fim de evitar a propagação de nossos erros, podemos aplicar&nbsp;
        a(href="https://arxiv.org/pdf/1607.06520.pdf", target="_blank", title="Técnicas Avançadas") diversas técnicas avançadas
        | &nbsp;que removem estes preconceitos. De modo geral, a ideia é analisar o campo desejado, como “Gênero”, e alterar seu valor de maneira adequada. Assim, podemos ensinar para a IA que todas as profissões &minus; ou decisões judiciais, recomendações de filmes, etc. &minus; não devem ter qualquer preferência por etnia ou gênero.
      p Após aplicar estas técnicas, fazemos as mesmas perguntas anteriores à IA.

      img(src="https://cdn-images-1.medium.com/max/800/1*ESk-wi3uYiqmFYtL3G454w.png")
      h6 Resultado após as técnicas

      p Vemos que, desta forma, os preconceitos ocultos na linguagem apresentados para a IA são eliminados. A consciência destes problemas e o conhecimento das metodologias de correção são essenciais para todos aqueles que trabalham com Inteligência Artificial, de modo a evitar o desenvolvimento de sistemas que prejudiquem ou beneficiem um indivíduo de acordo com seu gênero, etnia ou outra característica. De fato, pesquisas avançadas vem sendo desenvolvidas por diversos grupos em todo o mundo, dado que a constante preocupação com o lado social é fundamental para o futuro da Inteligência Artificial.

      blockquote "A redução das tendênciosidades em sistemas de computadores pode auxiliar no processo de mitigação dos preconceitos na sociedade"

      p
        | Como afirma um dos grupos focados em técnicas de remoção de preconceitos, liderado por Bolukbasi, uma das perspectivas que se pode ter do problema é que estes preconceitos meramente refletem a sociedade, de modo que pode-se argumentar que o viés social deve ser removido anteriormente ao viés em&nbsp;
        i word embeddings
        | . Entretanto, Bolukbasi afirma ainda que a redução das tendênciosidades em sistemas de computadores pode auxiliar no processo de mitigação dos preconceitos na sociedade, ou ao menos evitar a sua amplificação.
      post-author(
        authorName="Gustavo Carvalho",
        authorPhoto="https://miro.medium.com/fit/c/240/240/1*v144gp-FjspBENZVD_zLfQ.jpeg",
        authorRole="Graduando em Engenharia Elétrica pela UnB",
        date="21 de Maio de 2018",
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
      return require('../assets/img/preconceitos.jpeg')
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
