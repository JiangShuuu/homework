<template>
  <div class="flex items-center justify-center border-2">
    <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'index' }]" to="/">
      axios
    </nuxt-link>
    <nuxt-link
      :class="['btn-link', { 'btn-primary': $route.name === 'vueTailwind' }]"
      to="/vueTailwind"
    >
      vueTailwind
    </nuxt-link>
    <nuxt-link
      :class="['btn-link', { 'btn-primary': $route.name === 'prettier' }]"
      to="/prettier"
    >
      prettier
    </nuxt-link>
    <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'image' }]" to="/image">
      image
    </nuxt-link>
    <nuxt-link :class="['btn-link', { 'btn-primary': $route.name === 'svg' }]" to="/svg">
      svg
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
