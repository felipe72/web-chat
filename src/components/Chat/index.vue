<template>
  <div class="fill-height chat">
    <div class="messages-container">
      <message
        v-for="(msg, id) in messages"
        :key="id"
        v-bind="msg"
        :class="isSameUser(msg.user) ? 'right' : 'left'"
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
import firebase from 'firebase';
import Message from './Message';

export default {
  name: 'Chat',
  components: { Message },
  data() {
    return { messages: [], message: '', user: localStorage.getItem('id') };
  },
  firestore() {
    const { chat } = this.$route.params;
    return {
      messages: db
        .collection('chats')
        .doc(chat)
        .collection('messages')
        .orderBy('date'),
    };
  },
  methods: {
    isSameUser({ id }) {
      return this.user == id;
    },

    async createMessage() {
      const { message } = this;
      // Clear input field before sending request
      this.message = '';

      const { chat } = this.$route.params;

      const query = db.collection('chats').doc(chat).collection('messages');
      const user = db.collection('users').doc(this.user);

      await query.add({
        text: message,
        user: await user,
        date: firebase.firestore.FieldValue.serverTimestamp(),
      });
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
</style>
