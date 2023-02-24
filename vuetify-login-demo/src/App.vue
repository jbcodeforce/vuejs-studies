<template>
  <v-app id="app">
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  },
  data: () => ({
    showPassword: false
  }),

}
</script>
