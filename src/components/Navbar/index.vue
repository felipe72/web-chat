<template>
  <v-navigation-drawer
    v-model="model"
    app
    clipped
    class="navbar"
  >
    <v-list
      dense
      class="list fill-height"
    >
      <v-list-item
        link
        @click="redirect"
      >
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <username-tab />
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import UsernameTab from './UsernameTab';

export default {
  name: 'Navbar',
  components: { UsernameTab },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    redirect() {
      const { name } = this.$route;
      if (name === 'root') this.model = false;
      else this.$router.push({ name: 'root' });
    },
  },
};
</script>

<style lang="sass" scoped>
.navbar
  .list
    display: flex
    flex-direction: column
    > div
      flex: unset
    > div:nth-child(2)
      margin-top: auto
</style>