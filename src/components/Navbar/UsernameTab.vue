<template>
  <v-list-group prepend-icon="mdi-account">
    <template v-slot:activator>
      <v-list-item-title>Username</v-list-item-title>
    </template>

    <v-list-item>
      <v-list-item-content>
        <!-- Instead of using v-model, it would be better to use a debounced input method -->
        <v-text-field
          v-model="nameModel"
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
import firebase from 'firebase';

export default {
  name: 'UsernameTab',
  data() {
    return { user: {}, id: localStorage.getItem('id') || '' };
  },
  firestore() {
    if (this.id) {
      return { user: db.collection('users').doc(this.id) };
    } else {
      this.createUser();
    }
  },
  computed: {
    nameModel: {
      get() {
        return this.user.name;
      },
      set(value) {
        this.updateUser(value);
      },
    },
  },
  methods: {
    async createUser() {
      const query = db.collection('users');
      const { id } = await query.add({
        name: 'default-username',
        date: firebase.firestore.FieldValue.serverTimestamp(),
      });

      localStorage.setItem('id', id);
      location.reload();
    },

    updateUser(name) {
      const query = db.collection('users').doc(this.id);
      query.set({ name });
    },
  },
};
</script>
