<template>
  <div>
    <h1>Welcome to your nuxt app</h1>
    <a :href="facebookLoginUrl">
      <button>Facebook Login</button>
    </a>
    <button @click="FBlogin">fb login</button>
  </div>
</template>

<script>
import qs from 'querystring'
export default {
  name: 'OauthPage',
  auth: false,
  data () {
    return {
      facebookLoginUrl: ''
    }
  },
  mounted () {
    this.setFacebookLoginUrl()
  },
  methods: {
    setFacebookLoginUrl () {
      const FB_DIALOG_LINK = 'https://www.facebook.com/v11.0/dialog/oauth'
      const params = qs.stringify({
        client_id: process.env.FB_CLIENT_ID,
        redirect_uri: process.env.FB_REDIRECT_URI,
        scope: ['public_profile', 'email'].join(','),
        response_type: 'code'
      })
      this.facebookLoginUrl = `${FB_DIALOG_LINK}?${params}`
    },
    FBlogin () {
      this.$auth.loginWith('facebook')
    }
  }
}
</script>
