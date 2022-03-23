<template>
  <div>
    <div>
      <p class="text-3xl">
        data
      </p>
      <div>
        {{ list }}
      </div>
      <br>
    </div>
    <div>
      <button class="text-3xl" @click="getData">
        按我
      </button>
      <div>
        {{ clickList }}
      </div>
      <br>
    </div>
    <div>
      <p class="text-3xl">
        asyncData
      </p>
      {{ asyncList }}
    </div>
  </div>
</template>

<script>

import gql from 'graphql-tag'

const BASE_GQL = gql`query {
        pokemons (limit: 5) {
          results {
            id
            name
          }
        }
      }`

export default {
  name: 'ApolloPage',
  auth: false,
  async asyncData (context) {
    const client = context.app.apolloProvider.defaultClient
    const { data } = await client.query({ query: BASE_GQL })
    return { asyncList: data }
  },
  data () {
    return {
      list: [],
      clickList: []
    }
  },
  apollo: {
    list: {
      query: BASE_GQL,
      update: data => data.pokemons
    }
  },
  methods: {
    async getData () {
      const { data } = await this.$apollo.query({ query: BASE_GQL })
      this.clickList = data.pokemons.results
    }
  }
}

</script>
