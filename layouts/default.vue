<template>
  <div>
    <Navbar />
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
@layer components {
  .content {
    @apply m-4
  }
  .btn-link {
    @apply m-2
  }
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
  .link {
    @apply underline text-blue-600
  }
}
</style>
