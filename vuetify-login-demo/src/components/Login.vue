<template>
   <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail @submit.prevent="login">
              <v-text-field variant="underlined" label="Username" prepend-icon="mdi-account-circle" v-model="input.username"/>
              <v-text-field variant="underlined" :type="showPassword ? 'text' : 'password'" label="Password" prepend-icon="mdi-lock" v-model="input.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" v-on:click:append="showPassword = !showPassword" />
         
                <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

                <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

            </v-form>
            <div class="mt-2">
                <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </v-sheet>
      </div>
</template>
<style>
.loginOverlay {
  background: rgba(103, 174, 232, 0.275);
}
</style>
<script>
import useUserStore from "../stores/user"
const user = useUserStore()

export default {
  name: 'Login',
  data: () => ({
    showPassword: false,
    input: { username: "", password: ""}
  }),
  methods: {
    login() {
      alert('Hello ' + this.input.username + ' !')
      user.changeUsername(username)
    }
    
  }
}
</script>