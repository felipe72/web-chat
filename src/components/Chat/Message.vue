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
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="sass" scoped>
.message
  width: fit-content
  min-width: 200px
  .content
    padding: 4px 8px
</style>
