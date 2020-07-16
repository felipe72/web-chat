<template>
  <div class="home">
    <chat-create />
    <chat-card
      v-for="(chat, index) in chats"
      :id="chat.id"
      :key="index"
      v-bind="chat"
    />
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

  firestore: { chats: db.collection('chats') },
};
</script>

<style lang="sass" scoped>
.home
  flex: 1
  align-self: flex-start
  display: flex
  flex-wrap: wrap
</style>
