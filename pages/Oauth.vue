<template>
  <div>
    <h1>Welcome to your nuxt app</h1>
    <!-- <a :href="facebookLoginUrl">
      <button>Facebook Login</button>
    </a> -->
    <div class="flex items-center">
      <button class="btn-primary w-44 mt-4 text-center" @click="FBlogin">
        Facebook Login（用heroku 登入）
      </button>
      <a class="ml-4" href="https://homeworkmirror.herokuapp.com/Oauth">heroku連結點我</a>
    </div>
    <div>
      <button class="btn-primary w-44 mt-4 text-center" @click="$auth.loginWith('google')">
        Google Login (目前無法拿到userInfo)
      </button>
    </div>
    <div class="mt-4">
      <span>登入成功資料：</span>
      {{ $auth.user }}
    </div>
  </div>
</template>

<script>
// import qs from 'querystring'
export default {
  name: 'OauthPage',
  auth: false,
  data () {
    return {
      facebookLoginUrl: ''
    }
  },
  mounted () {
    // this.setFacebookLoginUrl()
  },
  methods: {
    // setFacebookLoginUrl () {
    //   const FB_DIALOG_LINK = 'https://www.facebook.com/v11.0/dialog/oauth'
    //   const params = qs.stringify({
    //     client_id: process.env.FB_CLIENT_ID,
    //     redirect_uri: process.env.FB_REDIRECT_URI,
    //     scope: ['public_profile', 'email'].join(','),
    //     response_type: 'code'
    //   })
    //   this.facebookLoginUrl = `${FB_DIALOG_LINK}?${params}`
    // },
    FBlogin () {
      this.$auth.loginWith('facebook')
    }
  }
}
</script>
