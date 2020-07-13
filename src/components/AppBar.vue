<template>
  <v-app-bar
    app
    clipped-left
  >
    <v-app-bar-nav-icon @click.stop="toggleNavbar" />
    <v-toolbar-title> Web Chat</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleNavbar() {
      this.$emit('input', !this.value);
    }
  }
}
</script>