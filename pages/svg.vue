/* eslint-disable vue/no-parsing-error */
<template>
  <div>
    <a class="link text-2xl m-0" href="https://www.npmjs.com/package/@nuxtjs/svg">NPM連結</a>
    <div class="flex text-center text-xl flex-wrap">
      <div class="w-80 m-4">
        <p>檔案載入</p>
        <img src="/sun.svg" alt="">
      </div>
      <div class="w-80 m-4">
        <p>連結載入</p>
        <img src="https://www.svgrepo.com/show/156640/sea.svg" alt="">
      </div>
      <div class="w-80 m-4">
        <p>svg-loader</p>
        <NuxtLogo class="w-48 text-red-800 svg" />
      </div>
      <div class="w-80 m-4">
        <p>raw-loader</p>
        <!-- eslint-disable -->
        <div v-html="rawNuxtLogo" /> <!-- eslint-disable-line -->
        <!-- eslint-enable -->
      </div>
      <div class="w-80 m-4">
        <p>svg標籤</p>
        <SeaSvg />
      </div>
    </div>
  </div>
</template>

<script>
import rawNuxtLogo from '~/static/bird.svg?raw'
import SeaSvg from '~/components/SeaSvg.vue'

export default {
  name: 'SvgPage',
  auth: false,
  components: { SeaSvg },
  data () {
    return { rawNuxtLogo }
  }
}
</script>

<style scoped>
svg {
  fill: #369;
}
</style>
