<template>
  <v-card outlined class="chat-create">
    <v-card-text>
      <v-col cols="auto" class="text-center pl-0">
        <v-row class="flex-column ma-4" justify="center">
          <v-col>
            <v-btn icon>
              <v-icon @click="$emit('click', $event)" large>mdi-plus-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ChatCreate',
};
</script>

<style lang="sass" scoped>
.chat-create
  border-style: dashed
  margin: 16px
  flex: 1 0 calc(33% - 32px)
</style>
