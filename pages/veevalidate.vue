<template>
  <!-- eslint-disable -->
  <div class="accountForm">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="form" @submit.prevent="handleSubmit()">
        <ValidationProvider
          name="帳號"
          rules='alpha'
          v-slot="{ errors }"
        >
          <div class="flex items-center">
            <label class="mr-2" for="account">帳號</label>
            <input
              type="text"
              class="border-2"
              placeholder="abcd1234"
              v-model="user.account"
            />
            <span class="error_message ml-4 text-red-600">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="名稱"
          rules='alpha_num'
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
          rules='email'
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
          name="password"
          rules="create_password|min_length:6|max_length:12"
          v-slot="{ errors }"
          vid="confirmation"
        >
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="12345678"
              v-model="user.password"
              autofocus
            />
            <label for="password">密碼</label>
            <span class="error_message">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          rules="confirmed:confirmation|confirmed_password"
          v-slot="{ errors }"
        >
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="checkpassword"
              placeholder="12345678"
              v-model="user.checkPassword"
              autofocus
            />
            <label for="checkpassword">密碼確認</label>
            <span class="error_message">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="button_signUp" >
          <button type="submit" class="btn">送出驗證</button>
        </div>
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
    handleSubmit () {
      alert('成功')
    }
  }
}
</script>
