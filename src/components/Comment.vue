<script>
export default {
  data() {
    return {
      actualComment: {}
    }
  },
  name: 'Comment',
  props: ['comment'],
  methods: {
    hide() {
      this.$router.push('/');
    }
  },
  created(){
    this.actualComment = this.$store.state.comments.filter(comment => {
      return comment.date == this.comment;
    })
    console.log(this.actualComment)
  }
}
</script>

<template>
  <div class="comment" >
    <div class="comment__window">
        <a class="comment__close" @click="hide">&times;</a>
        <p>{{actualComment[0].name}}</p>
        <p>{{actualComment[0].email}}</p>
        <p>{{actualComment[0].text}}</p>
    </div>
  </div>
</template>