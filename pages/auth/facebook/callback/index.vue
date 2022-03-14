<template>
  <!-- 網友實現第三方登入作法 https://uu9924079.medium.com/%E5%9C%A8-nuxt-js-%E4%B8%AD%E5%AF%A6%E7%8F%BE-facebook-%E7%99%BB%E5%85%A5-a7ceac3867af
 -->
  <div>請稍候...</div>
</template>
<script>
export default {
  name: 'AuthFacebookCallback',
  auth: false,
  async mounted () {
    const { code } = this.$route.query
    const { data } = await this.$axios.post(
      `${location.origin}/facebook/login?code=${code}`
    )
    console.log(data)
  }
}
</script>
