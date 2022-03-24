<template>
  <section class="flex m-2">
    <div v-for="item in items" :key="item.id" class="w-32 mx-1">
      <label
        :class="[
          'px-4 py-2',
          'border border-gray-300',
          'hover:bg-gray-100',
          'flex justify-between items-center',
          'cursor-pointer',
          'transition-all',
        ]"
      >
        <input v-model="item.checked" type="checkbox" class="sr-only">
        <div
          :class="[
            item.checked && 'text-green-500',
            'transition-all'
          ]"
        >
          {{ item.name }}
        </div>
        <div
          :class="[
            'w-9 h-9',
            'hover:bg-gray-200',
            'rounded-full',
            'flex justify-center items-center',
            'transition-all',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            :class="[
              'h-6 w-6',
              item.checked && '-rotate-180',
              'transition-all'
            ]"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </label>
      <div
        :class="[
          item.checked ? 'max-h-[300px]' : 'max-h-0',
          'border border-t-0 border-gray-300',
          'overflow-hidden transition-all'
        ]"
      >
        <div v-for="i in item.lists" :key="i.name" name="itemContent">
          <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'i.link' }]" :to="i.link">
            {{ i.name }}
          </nuxt-link>
        </div>
      </div>
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
  </section>
</template>

<script>

const data = [
  {
    name: 'image',
    checked: false,
    lists: [
      {
        name: 'image',
        link: 'image'
      },
      {
        name: 'svg',
        link: 'svg'
      }
    ]
  },
  {
    name: 'api',
    checked: false,
    lists: [
      {
        name: 'axios',
        link: '/'
      },
      {
        name: 'Oauth',
        link: 'Oauth'
      },
      {
        name: 'Apollo',
        link: 'Apollo'
      }
    ]
  },
  {
    name: '套件',
    checked: false,
    lists: [
      {
        name: 'swiper',
        link: 'swiper'
      },
      {
        name: 'VeeValidate',
        link: 'VeeValidate'
      }
    ]
  },
  {
    name: '播放器',
    checked: false,
    lists: [
      {
        name: 'audio原生',
        link: 'audioPlayer'
      }
    ]
  },
  {
    name: '其他',
    checked: false,
    lists: [
      {
        name: 'Vs 設定',
        link: 'vscodeSetting'
      }
    ]
  }
]

export default {
  name: 'AccordionMenuItem',
  data () {
    return {
      items: data
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
