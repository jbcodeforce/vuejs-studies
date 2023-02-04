# Vuetify 

[Vuetify](https://vuetifyjs.com/) is a complete UI framework built on top of Vue.js to build
rich user experiences and use Material Design, and a mobile first approach.

[Installation instructions](https://vuetifyjs.com/en/getting-started/installation/).

## Example login page

* Create a vue project named vuetify-login-demo

```sh
vue create vuetify-login-demo
```

* Add the Vuetify plugin to Vue with

```shell
vue add vuetify
```

It creates a vuetify.js to inject the vuetify components inside the vue app. 

The src/App.vue is that there a lot of components prefixed with `v-`. 
Similar to how Vue uses the prefix to indicate Vue-specific directives, this is 
how Vuetify indicates that these components are part of its library.

* Add a v-card component to be the main container for the login module
* Add v-card-title which provides standard spacing and positioning for the card header
and v-card-text to act as the wrapper for the body content in the v-card.

  ```html
  <template>
  <v-app>
    <v-card>
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>
  ```
* Add password field in the v-form, and add button with the v-card-action

  ```html
  <v-card-text>
        <v-form>
          <v-text-field label="Username" />
          <v-text-field 
            type="Password"
            label="Password" 
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn>Register</v-btn>
        <v-btn>Login</v-btn>
      </v-card-actions>
  ```
* Style the module: can add `prepend-icon` and append-icon

  ```html
  <v-text-field 
      label="Username" 
      prepend-icon="mdi-account-circle"/>
    <v-text-field 
      type="Password"
      label="Password" 
        prepend-icon="mdi-lock"
        append-icon="mdi-eye-off"
    />
  ```
* Add some color on buttons

  ```html
  <v-card-actions>
    <v-btn color="success">Register</v-btn>
    <v-btn color="info">Login</v-btn>
  </v-card-actions>
  ```
* Clean the layout
set th card width to  400px, add spacing to the top and centering it Vuetify CSS utility 
classes mt-5 (i.e., margin top 5 units) and mx-a (i.e., horizontal margin auto). 
The spacing between login and the username input is also a little large
* Add spacer and divider. See the App.vue
* Toggle Password Visibility:
add a data property of showPassword, and use the `v-bind` directive to determine 
whether the type of the field will be text or password

  ```html
  <v-text-field 
      :type="showPassword ? 'text' : 'password'" 
      label="Password" 
      prepend-icon="mdi-lock"
      append-icon="mdi-eye-off"
  />
  ```

add a click event to the icon ` @click:append="showPassword = !showPassword"` and 
change to a visibility icon:

  ```html
  <v-text-field 
      :type="showPassword ? 'text' : 'password'" 
      label="Password" 
      prepend-icon="mdi-lock"
      append-icon="mdi-eye-off"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
  />
  ```

## Layout

Vuetify comes with a built-in layout system.
There are 2 primary layout components in Vuetify, `v-app` and `v-main`. 
The `v-app` component is the root of your application and a direct replacement for the default Vue entrypoint, `<div id="app">`
The `v-main` component is a semantic replacement for the main HTML element and the root of 
your application’s content

See [doc here](https://vuetifyjs.com/en/features/layouts/#usage)

Grid integrates a series of containers, rows, and columns to layout and align content

The store-simulator main vue: [App.vue]()

### Padding and Marging

Add class with letters: `m` for marging, `p` for padding. See [this tutorial](https://scrimba.com/scrim/cD7pnzSw?pl=pP4xZu3)

## Vue 3 specifics

With Vue 3 beta, use the following main.js to avoid 'get connection error'

```
import Vue from 'vue'
new Vue({
    vuetify,
    render: h => h(App)
  }).$mount("#app");
```

*No matching rule for vue-loader found. Make sure there is at least one root-level rule that uses vue-loader*

