<template>
  <div class="home">
    <chat-card v-for="(chat, index) in chats" :key="index" v-bind="chat" />
  </div>
</template>

<script>
import { db } from '~db';
import ChatCard from './components/ChatCard';

export default {
  name: 'Home',
  components: { ChatCard },
  data: () => ({ chats: [], chats2: null }),
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
  },
};
</script>

<style lang="sass" scoped>
.home
  display: flex
</style>
