<template>
  <v-card class="chart-card">
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-text>
      {{ description }}
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn text color="deep-purple accent-4">
        Enter
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ChartCard',
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    }
  }
};
</script>

<style lang="sass" scoped>
.chart-card
  margin: 0 16px
  flex: 1 0 calc(33% - 32px)
</style>