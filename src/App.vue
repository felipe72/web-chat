<template>
  <v-app id="app">
    <navbar v-model="drawer" />
    <app-bar v-model="drawer" />
    <main-content />
  </v-app>
</template>

<script>
import { db } from './db'
import Navbar from './components/Navbar';
import AppBar from './components/AppBar';
import MainContent from './components/MainContent';

export default {
  name: 'App',
  components: { Navbar, MainContent, AppBar },
  data: () => ({ drawer: false })
}
</script>

<style lang="sass">
@import '~style/base'
</style>