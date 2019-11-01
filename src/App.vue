<script>
import Header from './components/Header.vue';
import Comments from './components/Comments.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Comments,
    Footer,
  }
}
</script>

<template>
  <div>
    <Header />
    <Comments />
    <Footer />
  </div>
</template>
