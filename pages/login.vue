<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input v-model="login.username" type="text">
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="text">
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      login: {
        username: 'globelex65@gmail.com',
        password: 'Hexschool123'
      }
    }
  },
  created () {
    if (this.$auth.loggedIn) {
      this.$router.push('/svg')
    }
  },
  methods: {
    async userLogin () {
      try {
        const response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
        this.$router.push('/svg')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
