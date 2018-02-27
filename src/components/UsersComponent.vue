<template>
  <div class="">
    <h1>Lists all users</h1>

    <a href="/user/create">create new user</a>

    <ul v-for="user in users" :key="user.id">
      <li>
        {{user.name}} ({{user.surname}})
        <a :href="'/user/' + user._id">view</a>
        <button @click="onDelete(user._id)">delete</button>
        <a :href="'/user/update/' + user._id">update</a>
      </li>
    </ul>
  </div>
</template>

<script>

import UserService from '@/services/UserService'

export default {
  name: 'Users',
  data () {
    return {
      users: []
    }
  },
  methods: {
    async onDelete (id) {
      await UserService.deleteUser(id)
      console.log(`user ${id} was deleted`)
      const newUsersResponse = await UserService.getUsers()
      this.users = newUsersResponse.data
      console.log(newUsersResponse)
    }
  },
  async beforeCreate () {
    const response = await UserService.getUsers()
    this.users = response.data
  }
}

</script>

<style scoped>

</style>
