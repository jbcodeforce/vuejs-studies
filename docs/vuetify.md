# Vuetify 

Add the Vuetify plugin to Vue with

```shell
vue add vuetify
```

It creates a vuetify.js to inject the vuetify components inside the vue app. 

With Vue 3 beta, use the following main.js to avoid 'get connection error'

```
import Vue from 'vue'
new Vue({
    vuetify,
    render: h => h(App)
  }).$mount("#app");
```

*No matching rule for vue-loader found. Make sure there is at least one root-level rule that uses vue-loader*

