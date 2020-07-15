<template>
  <v-card
    outlined
    class="chat-create"
  >
    <v-card-text>
      <v-col
        cols="auto"
        class="text-center pl-0"
      >
        <v-row
          class="flex-column ma-4"
          justify="center"
        >
          <v-col>
            <v-btn icon>
              <v-icon
                large
                @click="createChat"
              >
                mdi-plus-circle-outline
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
import { db } from '~db';
export default {
  name: 'ChatCreate',
  methods: {
    async createChat() {
      try {
        const query = await db.collection('chats').add({
          name: 'New chat',
          description: 'This is a new chat',
        });
      } catch (e) {
        throw e;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.chat-create
  border-style: dashed
  margin: 16px
  flex: 1 0 calc(33% - 32px)
</style>
