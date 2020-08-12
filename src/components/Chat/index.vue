<template>
  <div class="fill-height chat">
    <div class="messages-container">
      <template v-for="(msg, id) in messages">
        <div
          :key="id + 'userName'"
          :class="[whichSide(msg), 'caption']"
        >
          {{ msg.user.name }}
        </div>
        <message
          v-bind="msg"
          :key="id"
          :class="whichSide(msg)"
        />
      </template>
    </div>
    <div class="input-container">
      <v-text-field
        v-model="message"
        label="Your message"
        append-icon="mdi-send"
        outlined
        :loading="loading"
        @click:append="createMessage"
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
    return {
      messages: [],
      message: '',
      userID: localStorage.getItem('id'),
      loading: false,
    };
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
    whichSide({ user }) {
      return this.userID == user.id ? 'right' : 'left';
    },

    async createMessage() {
      this.loading = true;
      const { message } = this;
      // Clear input field before sending request
      this.message = '';

      const { chat } = this.$route.params;

      const query = db.collection('chats').doc(chat).collection('messages');
      const user = db.collection('users').doc(this.userID);

      await query.add({
        text: message,
        user: await user,
        date: firebase.firestore.FieldValue.serverTimestamp(),
      });
      this.loading = false;
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
