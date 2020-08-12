<template>
  <v-card
    class="message"
    outlined
  >
    <v-card-text class="content">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Message',
  props: {
    text: {
      type: String,
      default: '',
    },
    user: {
      type: [Object, String],
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.message
  width: fit-content
  min-width: 100px
  &.right
    .content
      text-align: right
  .content
    padding: 4px 8px
</style>
