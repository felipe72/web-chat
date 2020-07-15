<template>
  <div class="home">
    <chat-create @click="createChat" />
    <chat-card v-for="(chat, index) in chats" :key="index" v-bind="chat" />
  </div>
</template>

<script>
import { db } from '~db';
import ChatCard from './components/ChatCard';
import ChatCreate from './components/ChatCreate';

export default {
  name: 'Home',
  components: { ChatCard, ChatCreate },
  data: () => ({ chats: [] }),
  created() {
    this.loadChats();
  },
  methods: {
    async loadChats() {
      const query = db.collection('chats');

      try {
        const { docs } = await query.get();
        this.chats = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      } catch (e) {
        throw e;
      }
    },

    async createChat() {
      try {
        const query = await db.collection('chats').add({
          name: 'New chat',
          description: 'This is a new chat',
        });
        const doc = await query.get();
        this.chats.unshift({ ...doc.data(), id: doc.id });
      } catch (e) {
        throw e;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.home
  display: flex
  flex-wrap: wrap
</style>
