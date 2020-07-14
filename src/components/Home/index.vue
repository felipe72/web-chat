<template>
  <div class="home">
    <chart-card 
      v-for="(chat, index) in chats"
      :key="index"
      v-bind="chat"
    />
  </div>
</template>

<script>
import { db } from "~db";
import ChartCard from "./components/ChartCard";

export default {
  name: "Home",
  components: { ChartCard },
  data: () => ({ chats: [] }),
  firestore: { chats: db.collection("chats") },
};
</script>

<style lang="sass" scoped>
.home
  display: flex
</style>