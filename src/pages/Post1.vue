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
    h1 Document type classification for Brazil’s supreme court using a Convolutional Neural Network
    article
      p.preface The Brazilian Court System is currently the biggest judiciary system in the world, and receives an extremely high number of lawsuit cases every day. These cases need to be analyzed in order to be associated to relevant tags and allocated to the right team. Most of the cases reach the court as single PDF files containing multiple documents. One of the first steps for the analysis is to classify these documents. In this paper we present results on identifying these pieces of document using a simple convolutional neural network.

      h2 I - Introduction

      p The research and development project, entitled VICTOR, aims to solve problems of pattern recognition in texts of legal processes that reach the Brazilian Supreme Court (Supremo Tribunal Federal - STF) [7], [8].

      p According to the STF, it would take 22,000 manhours by its employees and trainees to analyze the approximately 42,000 processes received per semester. The court also points out that the time its employees spend on classifying these processes could be better applied at more complex stages of the judicial work flow.

      p The aim of VICTOR is to speed up the analysis of lawsuit cases that reach the supreme court by using document analysis and natural language processing tools. Most of the cases reach the court in the form of unstructured PDF volume which encloses several documents that have not been indexed. Therefore, in the first phase of this project, our goal is to classify these documents within PDF volumes.

      p This paper reports results of a preliminary evaluation on a dataset containing 6,814 documents from the STF. We propose a convolutional neural network architecture for this task and show that it obtains 90.35% accuracy on this dataset. In the next section we briefly describe our dataset and in section 3 we describe our method and summarize its results. This paper concludes in section 4.

      h2 2. Datasets for Classification of Brazilian Judicial Documents

      p Our work focuses on classifying five main types of legal documents that make up the cases that are dealt by the STF. These are listed below, keeping their original label in Portuguese: 1) Acórdão, 2) Recurso Extraordinário (RE), 3) Agravo de Recurso Extraordinário (ARE), 4) Despacho, 5) Sentença e 6) Others.

      p Note that the legal cases include several other types of documents, which we grouped in the class Others.

      p We developed an annotation tool which was used by a team of four lawyers who manually classified 6,814 documents. Figure 1 presents a pie diagram showing the proportion of documents in each of these classes.

      p The standard practice to train and evaluate machine learning methods requires that datasets are split into three parts: train, validation and test subsets [2]. We use stratified splits for each document class, maintaining the proportions of class samples in each subset. We used the following proportions, as detailed in Figure 2: 70% for the training set, 20% for validation and 10% for the test set.

      img(src="../assets/img/icofcs.png")
      h6 Figure 1 - Distribution of document classes in the dataset

      img(src="../assets/img/icofcs2.png")
      h6 Figure 2 - dsTraining, validation and test set distribution for each of the document classes.

      i.mini-title A. Dataset issues

      p - The STF receives processes from all the Brazilian courts of second instance and there is no pattern in the way they are written. The only requirement for admission is that the process is classified as a “Repercursão Geral” case, i.e., one of the predefined law process categories (The task of classifying legal processes as a whole, rather than their document parts, constitutes the main goal of the second phase of VICTOR project). The flow of processes is detailed in [6].

      p - A significant part of the documents available in the court are in the form of raster images obtained by scanning printed documents, which often contain handwritten annotations, stamps, stains, etc.

      p - Furthermore, many of the processes are stored in the form of a series of PDF volumes, rather than a single PDF file that contains all its document. This was done to avoid file handling problems in legacy systems. The problem is that each a PDF volume often finishes in the middle of a document and the next PDF volume starts in the next page of that document.

      h2 3. Proposed Method

      i.mini-title A. Text extraction

      p The first step is to extract text from the PDF files, given all the challenges discussed in Section IIA. Figure 3 is a workflow showing how each page of the lawsuit processes is analyzed. First it is checked if its content is a raster (scanned) image or text. In case it is an image we apply an OCR (Optical Character Recognition) system [9] and then the resulting text is stored. In case that page embeds its text, its quality is verified by means of regular expressions. If the quality level is acceptable the text is stored, otherwise, the OCR is applied as if the page was in raster image format and the result is stored. The final result is that all pages of all suitcases processes are stored as text in a database to be used for further classification phase.

      img(src="../assets/img/icofs3.png")
      h6 Figure 3 - Workflow for the extraction of text from the legal processes PDF files.

      i.mini-title B. Preprocessing

      p To reduce the complexity of the dataset and improve the model’s accuracy, we applied regular expressions in order to filter special characters and recurring words as well as to emphasize important terms in the original texts [3]. The following steps were applied:

      p - Removal of special characters, such as #, @, $.

      p - Removal of alphanumeric terms with numbers and letters in the same “words”.

      p - Lowercasing of all characters.

      p - Transformation of terms that are emails or alinks into tokens "EMAIL" and "LINK".

      p - Transformation of terms referring to numbers of laws and articles in the tokens “LEI_X” (LEI means LAW) and “ARTIGO_X” (ARTIGO means ARTICLE) where X represents the respective law or article quoted. Figure 4 illustrates this process with an example.

      p - Stemming to reduce words into their stem, reducing the number of words with similar semantics. For that, we use the Natural Language Toolkit in Python, which implements the method of [5].

      img(src="../assets/img/icofcs4.png")
      h6 Figure 4 - Example of text before and after the application of all preprocessing steps except for stemming.

      h2 C. Convolutional neural network

      p The literature shows that one of the state-of-theart approaches for document classification consists in applying a Convolutional Neural Network (CNN) on embedded text. We designed a system that was inspired by the framework proposed by Conneu et al. [1], though our model is much simpler and therefore training requires less computational power and has a lighter GPU memory footprint.

      p Our architecture is illustrated in Figure 5. The first step is to apply an embedding method that transforms the data into a 2D tensor with the dimensions of (2000, 100). Next, a convolutional layer is added with kernel size 4 and 256 filters resulting in an output of dimensions (2000, 256). Then, a max pooling layer chooses the part of the data with greater relevance for classification of documents. The resulting tensor is flattened, leading to a one-dimensional array of 256000 dimensions. The last layer is a fully connected layer with a softmax activation function. This network was trained using the categorical crossentropy as its loss function and the Adam optimization method.

      i.mini-title D. Results

      p Our CNN-based method achieves an accuracy of 90.35% and F1 score of 0.91. Figure 6 shows the confusion matrix obtained in our test set.

      img(src="../assets/img/icofcs5.png")
      h6 Figure 5 - CNN Architecture diagram

      img(src="../assets/img/icofcs6.png")
      h6 Figure 6 - Confusion Matrix

      h2 4. Conclusions

      p The development of a pattern recognition applied to the law- suit cases of the Brazilian Supreme Court is a very challenging task. It is necessary to face a huge amount of non-structured data (about 350 new lawsuit cases per day which contents can be either raster images or texts. The results obtained show that our CNN model was a good choice for document piece classification.

      p The introduction of a simple convolutional network can efficiently reduce the burden of the laborious and time consuming task of process management in the supreme court. The document classification bottleneck can be eliminated, which means that lawyers who work at STF can dedicate their time to less mechanical tasks.

      p A more efficient workflow benefits not only the court, but the whole society in Brazil, inspiring other institutions to invest in machine learning solutions to improve their activities. One of the possible directions for future work is the use a method for automatic named entity recognition, such as that of [4], to replace or complement the regular expressions used in the preprocessing steps. Another direction of work is the use these document classification results as part of a process to automatically classify lawsuit cases as a whole (rather than only their parts).

      h2 5. Acknowledgments

      p We acknowledge the support of “Projeto de Pesquisa & Desenvolvimento de aprendizado de máquina (machine learning) sobre dados judiciais das repercussões gerais do Supremo Tribunal Federal - STF”.

      post-author(
        authorName="Nilton Correia da Silva",
        authorPhoto="https://media.licdn.com/dms/image/C4E03AQHqPCJENSXeVw/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=z9WwbOFGmImWzq0_JISFDhCrbTrDo7hzznU5ntfimIQ",
        authorRole="Prof. Dr. Coordenador do GPAM",
        date="October 30 2018",
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
.mini-title
  color $grey-9
  font-size 20px
  font-weight bold
  margin-bottom 15px
  display block
</style>
