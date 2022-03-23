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
    <div class="mt-4">
      <button class="text-3xl" @click="getVariableData">
        variablesData按我
      </button>
      <div>
        {{ variablesList }}
      </div>
      <br>
    </div>
    <div class="mt-4">
      <button class="text-3xl" @click="getLimitData">
        limitData按我
      </button>
      <div>
        {{ limitList }}
      </div>
      <br>
    </div>
  </div>
</template>

<script>

// import gql from 'graphql-tag'
import { normalData, variData, limitData } from '~/gql/pokemon.gql'

// const GQL_2 = gql`query id ($id: String!) {
//   evolutionChain (id: $id) {
//     response
//   }
// } `
// const GQL_3 = gql`query num ($limit: Int) {
//         pokemons (limit: $limit) {
//           results {
//             id
//             name
//           }
//         }
//       }`

export default {
  name: 'ApolloPage',
  auth: false,
  async asyncData (context) {
    const client = context.app.apolloProvider.defaultClient
    const { data } = await client.query({ query: normalData })
    return { asyncList: data }
  },
  data () {
    return {
      list: [],
      clickList: [],
      variablesList: [],
      limitList: [],
      strNum: '0'
    }
  },
  apollo: {
    list: {
      query: normalData,
      update: data => data.pokemons
    }
  },
  methods: {
    async getData () {
      const { data } = await this.$apollo.query({ query: normalData })
      this.clickList = data.pokemons.results
    },
    async getVariableData () {
      const { data } = await this.$apollo.query({
        query: variData,
        variables: {
          id: '3'
        }
      })
      this.variablesList = data.evolutionChain
    },
    async getLimitData () {
      const { data } = await this.$apollo.query({
        query: limitData,
        variables: {
          limit: 10
        }
      })
      this.limitList = data
    }
  }
}

</script>
