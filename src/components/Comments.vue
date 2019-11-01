<script>
export default {
  name: 'Comments',
  methods: {
    showComment(date) {
      this.$router.push(`/comment/${date}`);
    }
  },
  created() {
    console.log(this.$router.currentRoute)
    if (localStorage.getItem("comments")) {
      this.$store.dispatch('getCommentsFromLocalStorage');   
    }
  }
}
</script>

<template>
  <div class="comments">
    <div class="container">
      <h3>Выводим комментарии</h3>
      <div class="comments-view" >
        <router-view></router-view>
      </div>
      
      <div class="row" v-if="$store.state.comments.length">
        
        <div class="col-4" v-for="(comment, index) in $store.state.comments" :key="comment.date" >
          
          <div class="comments__item" 
                :class="index % 2 ? 'comments__item_grey' : 'comments__item_green'" 
                @click="showComment(comment.date)"
          >
            <div class="comments__item-header">
              {{ comment.name }}
            </div>
            <div class="comments__item-content">
              <span>{{ comment.email }}</span>
              <p>{{ comment.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>