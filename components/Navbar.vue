<template>
  <div class="flex items-center justify-center border-2">
    <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'index' }]" to="/">
      axios
    </nuxt-link>
    <nuxt-link
      :class="['btn-link', { 'btn-primary': $route.name === 'vueTailwind' }]"
      to="/vueTailwind"
    >
      vueTailwind
    </nuxt-link>
    <nuxt-link
      :class="['btn-link', { 'btn-primary': $route.name === 'prettier' }]"
      to="/prettier"
    >
      prettier
    </nuxt-link>
    <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'image' }]" to="/image">
      image
    </nuxt-link>
    <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'svg' }]" to="/svg">
      svg
    </nuxt-link>
    <client-only>
      <div class="absolute right-4">
        <div v-if="$auth.loggedIn" class="flex items-center">
          <span>
            登入中
          </span>
          <div class="ml-2">
            <button class="btn-primary" @click="Logout">
              Logout
            </button>
          </div>
        </div>
        <div v-else>
          <nuxt-link class="btn-primary" to="/login">
            LogIn
          </nuxt-link>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    async Logout () {
      try {
        await this.$auth.logout()
        this.$router.push('/login')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
