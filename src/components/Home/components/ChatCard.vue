<template>
  <v-card class="chat-card">
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-text>
      {{ description }}
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn text color="deep-purple accent-4">
        <router-link style="text-decoration: none;" :to="destination">
          Enter
        </router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ChatCard',
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    destination() {
      return { name: 'chat', params: { chat: this.id } };
    },
  },
};
</script>

<style lang="sass" scoped>
.chat-card
  margin: 16px
  flex: 1 0 calc(33% - 32px)
</style>
