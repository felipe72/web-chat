<template>
  <v-list-group prepend-icon="mdi-account">
    <template v-slot:activator>
      <v-list-item-title>Username</v-list-item-title>
    </template>
    {{user}}

    <v-list-item>
      <v-list-item-content>
        <v-text-field
          :value="'Username'"
          label="Outlined"
          single-line
          outlined
          dense
          hide-details
        />
      </v-list-item-content>
    </v-list-item>
  </v-list-group>
</template>

<script>
import { db } from '~db';
import firebase from "firebase";

export default {
  name: 'UsernameTab',
  data() {
    return { user: {}, id: localStorage.getItem('id') || '' };
  },
  firestore() {
    return { user: db.collection('users').doc(this.id) };
  },
  methods: {
    async createUser() {
      const query = db.collection('users')
      const { id } = await query.add({
        name: 'my-new-user',
        date: firebase.firestore.FieldValue.serverTimestamp(),
      });

      localStorage.setItem('id', id);
      this.id = id;
    }
  }
};
</script>
