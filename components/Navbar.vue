<template>
  <div class="flex items-center justify-center border-2">
    <nuxt-link :class="['link', {'btn-primary': $route.name === 'index'}]" to="/">
      axios
    </nuxt-link>
    <nuxt-link :class="['link', {'btn-primary': $route.name === 'vueTailwind'}]" to="/vueTailwind">
      vueTailwind
    </nuxt-link>
    <nuxt-link :class="['link', {'btn-primary': $route.name === 'prettier'}]" to="/prettier">
      prettier
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  mounted () {
    console.log(this.$route)
  }
}
</script>
