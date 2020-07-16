<template>
  <div class="fill-height chat">
    <div class="messages-container">
      <message
        v-for="(message, id) in reversed"
        :key="id"
        v-bind="message"
        :class="id % 2 ? 'right' : 'left'"
      />
    </div>
    <div class="input-container">
      <v-text-field
        v-model="message"
        label="Outlined"
        single-line
        outlined
        @keyup.enter="createMessage"
      />
    </div>
  </div>
</template>

<script>
import { db } from '~db';
import Message from './Message';

export default {
  name: 'Chat',
  components: { Message },
  data() {
    return { messages: [], message: '' };
  },
  firestore() {
    const { chat } = this.$route.params;
    return {
      messages: db.collection('chats').doc(chat).collection('messages'),
    };
  },
  computed: {
    reversed() {
      return this.messages.slice().reverse();
    }
  },
  methods: {
    async createMessage() {
      const { chat } = this.$route.params;
      const query = db.collection('chats').doc(chat).collection('messages');
      try {
        await query.add({
          text: this.message,
          user: 1,
        });
        this.message = '';
      } catch (e) {
        throw e;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.chat
  display: flex
  flex-direction: column
  flex: 1
  .messages-container
    flex: 1
    display: flex
    flex-direction: column
    .left
      align-self: flex-start
    .right
      align-self: flex-end
  .input-container
</style>
