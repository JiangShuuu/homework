<template>
  <div>
    <ApolloQuery
      :query="GQL_3"
      :variables="{ limit: 25 }"
    >
      <!-- TODO -->
      <template #default="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">
          Loading...
        </div>
        <div v-else-if="error" class="error apollo">
          An error occurred
        </div>
        <div v-else-if="data">
          <div v-for="author in data.pokemons.results" :key="author.id" class="flex">
            <p>id: {{ author.id }}</p>
            <p class="ml-4">
              name: {{ author.name }}
            </p>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import gql from 'graphql-tag'
const GQL_3 = gql`query num ($limit: Int) {
        pokemons (limit: $limit) {
          results {
            id
            name
          }
        }
      }`
export default {
  name: 'ApolloPage',
  auth: false,
  data () {
    return {
      GQL_3
    }
  }
}
</script>
