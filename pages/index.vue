<template>
  <div class="flex space-x-4">
    <div class="flex-1">
      <br>
      <h2>Products(有token)</h2>
      <br>
      <div v-for="product in hexschoolData" :key="product.id">
        <h3>{{ product.title }}</h3>
        <span>{{ product.category }}</span>
        <hr>
      </div>
    </div>
    <div class="flex-1">
      <br>
      <h2>StartWar(無token)</h2>
      <br>
      <div v-for="info in startWarData" :key="info.id">
        <h3>{{ info.name }}</h3>
        <span>{{ info.birth_year }}</span>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  // async asyncData ({ $axios, $api }) {
  //   const data = await $axios.$get('https://vue3-course-api.hexschool.io/v2/api/johntext/admin/products/?page=1')
  //   const hexschoolData = data.products
  //   // console.log('hex', hexschoolData)
  //   const data2 = await $api.$get('people')
  //   const startWarData = data2.results
  //   // console.log('startWar', startWarData)
  //   return { hexschoolData, startWarData }
  // }
  data () {
    return {
      hexschoolData: [],
      startWarData: []
    }
  },
  mounted () {
    this.hexAPI()
    this.startAPI()
  },
  methods: {
    async hexAPI () {
      const data = await this.$axios.$get('/v2/api/johntext/admin/products/?page=1')
      this.hexschoolData = data.products
    },
    async startAPI () {
      const data = await this.$api.$get('people')
      this.startWarData = data.results
    }
  }
}
</script>
