<template>
  <v-navigation-drawer
    v-model="model"
    app
    clipped
  >
    <v-list dense>
      <v-list-item
        link
        @click="redirect"
      >
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
export default {
  name: 'Navbar',
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
