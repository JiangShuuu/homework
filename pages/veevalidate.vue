<template>
  <!-- eslint-disable -->
  <div class="accountForm">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(checkSubmit)">
        <ValidationProvider
          name="帳號"
          rules='alpha|required'
          v-slot="{ errors }"
        >
          <div class="flex items-center">
            <label class="mr-2" for="account">帳號</label>
            <input
              type="text"
              class="border-2"
              placeholder="abcd"
              v-model="user.account"
            />
            <span class="error_message ml-4 text-red-600">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="名稱"
          rules='alpha_num|required'
          v-slot="{ errors }"
        >
          <div class="flex items-center">
            <label class="mr-2" for="account">名稱</label>
            <input
              type="text"
              class="border-2"
              placeholder="john"
              v-model="user.name"
            />
            <span class="error_message ml-4 text-red-600">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="信箱"
          rules='email|required'
          v-slot="{ errors }"
        >
          <div class="flex items-center">
            <label class="mr-2" for="account">信箱</label>
            <input
              type="text"
              class="border-2"
              placeholder="john@email.com"
              v-model="user.email"
            />
            <span class="error_message ml-4 text-red-600">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="密碼"
          rules= 'required'
          v-slot="{ errors }"
          vid="confirmation"
        >
          <div class="flex items-center">
            <label class="mr-2" for="account">密碼</label>
            <input
              type="password"
              class="border-2"
              placeholder=""
              v-model="user.password"
            />
            <span class="error_message ml-4 text-red-600">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="密碼"
          rules="confirmed:confirmation"
          v-slot="{ errors }"
        >
          <div class="flex items-center">
            <label class="mr-2" for="account">密碼確認</label>
            <input
              type="password"
              class="border-2"
              placeholder=""
              v-model="user.checkPassword"
              vid="confirmation"
            />
            <span class="error_message ml-4 text-red-600">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <button type="submit" class="btn-primary w-44 mt-4 text-center">送出驗證</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'VeeVaildate',
  auth: false,
  data () {
    return {
      user: {
        account: '',
        name: '',
        email: '',
        password: '',
        checkPassword: ''
      }
    }
  },
  methods: {
    checkSubmit () {
      alert('驗證成功!')
    }
  }
}
</script>
