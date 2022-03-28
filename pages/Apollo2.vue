<template>
  <div>
    <button class="border-4 p-1" @click="reFetch">
      reFetch
    </button>
    <button class="border-4 p-1" @click="startFetch">
      startFetch
    </button>
    <button class="border-4 p-1" @click="stopFetch">
      stopFetch
    </button>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'ApolloPage2',
  auth: false,
  data () {
    return {
      pokemonList: []
    }
  },
  apollo: {
    pokemonList: {
      query: gql`
        query {
          pokemons {
            results {
              id
              name
            }
          }
        }
      `,
      watchLoading (isLoading, countModifier) {
        console.log(countModifier)
        // isLoading 是一个布尔值
        // countModifier 为 1 或 -1
      },
      update: data => data.pokemons
    }
  },
  methods: {
    reFetch () {
      this.$apollo.queries.pokemonList.refetch()
    },
    startFetch () {
      this.$apollo.queries.pokemonList.startPolling(2000)
    },
    stopFetch () {
      this.$apollo.queries.pokemonList.stopPolling()
    }
  }
}
</script>
