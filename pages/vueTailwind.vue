<template>
  <div class="w-1/2">
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
</template>

<script>
export default {
  name: 'VueTailwind'
}
</script>
