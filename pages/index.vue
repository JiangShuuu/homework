<template>
  <div>
    <br>
    <h2>Products(有token)</h2>
    <br>
    <div v-for="product in hexschoolData" :key="product.id">
      <h3>{{ product.title }}</h3>
      <span>{{ product.category }}</span>
      <hr>
    </div>
    <br>
    <h2>StartWar(無token)</h2>
    <br>
    <div v-for="info in startWarData" :key="info.id">
      <h3>{{ info.name }}</h3>
      <span>{{ info.birth_year }}</span>
      <hr>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// 'https://swapi.dev/api/people'

export default {
  name: 'index-page',
  async asyncData ({ $axios, $api }) {
    const data = await $axios.$get('https://vue3-course-api.hexschool.io/v2/api/johntext/admin/products/?page=1')
    const hexschoolData = data.products
    console.log('hex', hexschoolData)
    const data2 = await $api.$get('people')
    const startWarData = data2.results
    console.log('startWar', startWarData)
    return { hexschoolData, startWarData }
  }
}
</script>
