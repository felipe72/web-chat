<template>
  <v-list-group prepend-icon="mdi-account">
    <template v-slot:activator>
      <v-list-item-title>Username</v-list-item-title>
    </template>

    <v-list-item>
      <v-list-item-content>
        <v-text-field
          :value="'My username'"
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