<template>
  <div class="flex items-center border-2 px-4 h-16">
    <div class="w-7/12">
      <nuxt-link
        :class="['btn-link', { 'btn-primary': $route.name === 'vscodeSetting' }]"
        to="/vscodeSetting"
      >
        VS setting
      </nuxt-link> -->
      <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'image' }]" to="/image">
        image
      </nuxt-link>
      <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'svg' }]" to="/svg">
        svg
      </nuxt-link>
      <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'veevalidate' }]" to="/veevalidate">
        VeeValidate
      </nuxt-link>
      <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'Oauth' }]" to="/Oauth">
        Oauth
      </nuxt-link>
      <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'swiper' }]" to="/swiper">
        swiper
      </nuxt-link>
      <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'audioPlayer' }]" to="/audioPlayer">
        audioPlayer
      </nuxt-link>
      <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'Apollo' }]" to="/Apollo">
        Apollo
      </nuxt-link>
    </div>
    <client-only>
      <div class="absolute flex items-center right-4">
        <div class="mr-4">
          <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'admin' }]" to="/admin">
            userOnly(需登入)
          </nuxt-link>
          <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'guest' }]" to="/guest">
            guestOnly(需登出)
          </nuxt-link>
        </div>
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
  data () {
    return {
      isOpen: false
    }
  },
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
