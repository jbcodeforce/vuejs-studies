<template>
  <div>
    Home page


    <p>Username is: {{user.username}}</p>

  </div>>
</template>

<script setup>
import useUserStore from "../stores/user";
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
const user = useUserStore()

</script>
