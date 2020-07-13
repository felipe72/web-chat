<template>
  <div>
    {{ documents }}
  </div>
</template>

<script>
import { db } from '~db'

export default {
  name: 'Home',
  data: () => ({ documents: [] }),
  firestore: { documents: db.collection('documents') },
}
</script>