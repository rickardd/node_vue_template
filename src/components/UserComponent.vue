<template>
  <div class="">

    <h1>{{user.name}} ({{user.surname}})</h1>

    id:{{user._id}}
    <br>

    <a href="/users">Back to users</a>

  </div>
</template>

<script>

import UserService from '@/services/UserService'

export default {
  name: 'Users',
  props: [
    'id'
  ],
  data () {
    return {
      user: {}
    }
  },
  methods: {

  },
  async beforeMount () {
    const response = await UserService.getUser(this.id)
    console.log(response.data)
    this.user = response.data
  }
}

</script>

<style scoped>

</style>
