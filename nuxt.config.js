require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'homework',
    htmlAttrs: {
      lang: 'zh-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/axios', // 目前使用 auth 做驗證
    '~/plugins/apis',
    '~/plugins/vtailwind',
    '~/plugins/validate',
    { src: '~/plugins/swiper.js', client: true }
    // { src: '~/plugins/validate', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true
    // baseURL: 'https://vue3-course-api.hexschool.io'
  },
  proxy: {
    '/api/': { target: 'https://vue3-course-api.hexschool.io', pathRewrite: { '^/api/': '' } }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ]

  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          type: false
        },
        user: {
          property: 'product'
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'api/v2/admin/signin', method: 'post' },
          logout: { url: 'api/v2/logout', method: 'post' },
          user: { url: 'api/v2/api/johntext/product/-MvWSbO3h-NjIUXZLLOc', method: 'get' }
        }
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
        },
        clientId: 652360879372923,
        scope: ['public_profile', 'email']
      },
      google: {
        responseType: 'code',
        clientId: '886584573011-o9cmmcn5g51spu5pue8kgejvj4tumkmi.apps.googleusercontent.com',
        codeChallengeMethod: '',
        grantType: 'authorization_code',
        redirectUri: 'http://localhost:3000/login',
        token: {
          property: 'data.token',
          required: true,
          type: '',
          maxAge: 18000
        }
      }
    },
    redirect: {
      login: '/404',
      logout: '/',
      callback: '/login',
      home: '/404'
    }
  },
  router: {
    middleware: ['auth']
  }
  // 網友實現第三方登入作法 https://uu9924079.medium.com/%E5%9C%A8-nuxt-js-%E4%B8%AD%E5%AF%A6%E7%8F%BE-facebook-%E7%99%BB%E5%85%A5-a7ceac3867af
  // env: {
  //   FB_CLIENT_ID: process.env.FB_CLIENT_ID || '',
  //   FB_REDIRECT_URI: process.env.FB_REDIRECT_URI || ''
  // },
  // serverMiddleware: [
  //   { path: '/facebook/login', handler: '~/server/facebookAuth.js' }
  // ]
}
