<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbar">
      <nav>
        <RouterLink to="/">Home</RouterLink> -
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

    <v-main>
      <v-container>
        <p> Welcome the App</p>
        <router-view />
      </v-container>
    </v-main>

</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.navbar {
    background-color: rgb(248, 153, 74);
    padding: 1.2rem;
  }
</style>