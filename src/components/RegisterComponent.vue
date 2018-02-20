<template>

  <form>
    <input
      type="text"
      name="name"
      autocomplete="off"
      placeholder="Email"
      v-model="email">
    <br>
    <input
      type="text"
      name="password"
      autocomplete="off"
      placeholder="Password"
      v-model="password">
    <br>
    <button
      type="button"
      @click="register">
        Register
    </button>
  </form>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log( response.data )
    }

  }
}
</script>

<style scoped>

</style>
