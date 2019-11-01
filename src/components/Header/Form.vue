<script>
export default {
  name: 'Form',
  methods: {
    checkForm() {
      this.$store.dispatch('addNewComment');
    }
  }
}
</script>

<template>
  <div>
    <form action="#" @submit.prevent="checkForm">
      <div class="row form" > 
        <div class="col-5 d-flex flex-column left"> 
          <div class="form__input-group">
            <label for="name">Имя <span>*</span></label>
            <input type="text" id="name" v-model="$store.state.name" minlength="3" maxlength="16" pattern="(^[a-zA-ZА-Яа-я]{2,17})" required>
          </div>
          <div class="form__input-group">
            <label for="email">E-Mail <span>*</span></label>
            <input type="email" id="email" v-model="$store.state.email" required>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-6 right">
          <div class="form__input-group">
            <label for="comment">Комментарий <span>*</span></label>
            <textarea name="comment" id="comment" v-model="$store.state.text" minlength="3" required></textarea>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-end">
          <button>Записать</button>
        </div>
      </div>
      
    </form>    
  </div>
</template>