<script>
import Form from './Header/Form';
export default {
  name: 'Header',
  components: {
    Form
  }
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="row justify-content-center">
        <img alt="logo" class="header__logo " src="../assets/images/logo.png">  
      </div>
      <Form />
    </div>
  </header>
</template>