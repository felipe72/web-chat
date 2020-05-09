<template>
  <div id="app">
    {{ documents }}
  </div>
</template>

<script>
import { db } from './db'

export default {
  name: 'App',
  data() {
    return { documents: [] };
  },
  firestore: {
    documents: db.collection('documents'),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
