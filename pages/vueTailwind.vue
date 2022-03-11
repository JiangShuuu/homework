<template>
  <div>
    <a class="link text-2xl" href="https://www.vue-tailwind.com/">官網連結</a>
    <div class="w-1/2 mt-4">
      <t-card
        header="Title of the card"
      >
        Content of the card.
        <template #footer>
          <div class="flex justify-between">
            <t-button type="button">
              Cancel
            </t-button>
            <t-button type="button">
              Ok
            </t-button>
          </div>
        </template>
      </t-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueTailwind',
  auth: false
}
</script>
