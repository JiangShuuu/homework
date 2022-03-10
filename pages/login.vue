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
        <button type="submit" class="btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  // middleware: 'guest',
  auth: 'guest',
  data () {
    return {
      login: {
        username: 'globelex65@gmail.com',
        password: 'Hexschool123'
      }
    }
  },
  methods: {
    async userLogin () {
      try {
        const response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
        this.$router.push('/admin')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
