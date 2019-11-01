import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: '',
    email: '',
    text: '',
    comments: []
  },
  actions: {
    addNewComment(context) {
      let date = Date.now();
      context.state.comments.push({
        date,
        name: context.state.name,
        email: context.state.email,
        text: context.state.text
      })
      localStorage.setItem('comments',  JSON.stringify(context.state.comments));
      context.state.name = '';
      context.state.email = '';
      context.state.text = '';

      setTimeout(function(){window.scrollTo(0,window.outerHeight)},0)
    },
    getCommentsFromLocalStorage(context){
      let localComments = JSON.parse(localStorage.getItem('comments'));
      console.log(localComments)
      context.state.comments = localComments;
    }
  },
  mutations: {}
})