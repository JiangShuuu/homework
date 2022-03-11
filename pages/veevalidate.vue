<template>
  <div>
    signUp
    <ValidationProvider v-slot="{ errors }">
      <input v-model="name" type="text">
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  name: 'VeeVaildate',
  auth: false,
  data () {
    return {
      name: ''
    }
  }
}
</script>
