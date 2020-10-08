# Vue.js studies

A progressive framework to be used in existing js app if needed. It is reactive in the data binding mode.

## Getting Started

* Get vue cli: `npm install -g @vue/cli@next`.
* Start the `vue ui` to create a project and manage the build and every thing or...
* Create a new project: `vue create project-name`
* Start server: `npm run serve` or `yarn serve`
* Browser to [http://localhost:8080](http://localhost:8080)

## Basic concepts

* First index.html page include vue scripts and a <div id="app">
* The `main.js` defines the Vue instance, links it to the single page app, and render the application and mounts the components to the #app of the index.html.
* The App.vue defines the root component, page template. css and components to include.
* Components are used in html template as element.
* CSS styles that will be applied to this component and any child component of this component
* Data is interpolated via {{}} in html. It is used to display data.
 
 ```html
 <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
 ```

 and can be object or property and declared in the component: 

 ```js
 export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
 }
 ```

* data object can be injected via data binding in a reactive way: when properties of this data object change, Vue reacts to and digests the changes.

 ```js
 // in template
  <HelloWorld :msg="message"/>
 // ... in script
 data(){
    return {
      message: 'Hello World!'
    }
  }

 ```

* v-model is used to manipulate component data.

## Inventory app notes

*See code in inventory-html folder*

* To make the image dynamic, use the data binding, where the place in the template is linked to the data source:  `<img v-bind:src="image">`
* Use `v-if, v-else-if, v-else` to control element display
* If your app needs an element to frequently toggle on and off the page, you’ll want to use the v-show directive. An element with this directive on it will always be present in our DOM, but it will only be visible on the page if its condition is met. It will conditionally add or remove the CSS property display: none to the element
* The v-for directive allows us to iterate over an array to display data. We can loop over an array of objects and use dot notation to display values from the objects.
When using v-for it is recommended to give each rendered element its own unique key.
* The v-on directive is used to allow elements to listen for events

  * The shorthand for v-on is @
  * You can specify the type of event to listen for: click, mouseover, any other DOM event
  * The v-on directive can trigger a method, Triggered methods can take in arguments
  * `this` refers to the current Vue instance’s data as well as other methods declared inside the instance
* Data can be bound to an element’s style attribute, an element’s class. We can use expressions inside an element’s class binding to evaluate whether a class should appear or not.
* Computed properties calculate a value rather than store a value.
* Components are blocks of code, grouped together within a custom element. They make applications more manageable by breaking up the whole into reusable parts that have their own structure and behavior. 

  * Data on a component must be a function
  * Props are used to pass data from parent to child. We can specify requirements for the props a component is receiving. Props are fed into a component through a custom attribute. Props can be dynamically bound to the parent’s data

* Vue dev tools provide helpful insight about your components

## App router

* Add a router folder with an index.js to declare routes:

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    }
]
const router = new VueRouter({
    routes
  })
export default router
```

* Change the main App.vue by adding a content and a router-view object, remove the component declaration in the script section

```xml
 <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content> 
```

## Vue app with quarkus app

Here are the steps to integrate Vue app in a quarkus app and develop both in parallel:

* Add [frontend-maven-plugin](https://mvnrepository.com/artifact/com.github.eirslett/frontend-maven-plugin) into the pom.xml to be able to build the JS app with maven:

  ```xml
  <!-- in properies-->
  <version.frontend-maven-plugin>1.10.0</version.frontend-maven-plugin>
  <version.resources-plugin>3.2.0</version.resources-plugin>
  <!-- in plugins -->
  <plugin>
        <groupId>com.github.eirslett</groupId>
        <artifactId>frontend-maven-plugin</artifactId>
        <version>${version.frontend-maven-plugin}</version>
        <configuration>
          <workingDirectory>webapp</workingDirectory>
        </configuration>
      </plugin>
  ```
* Create the vue app under the `webapp` folder: `vue create webapp`
* Remove src/main/resources/META-INF/resources/index.html from quarkus app
* Using the [maven resource plugin](https://mvnrepository.com/artifact/org.apache.maven.plugins/maven-resources-plugin), add to the pom the copy of the built webapp to the directory used by Quarkus

```xml
<plugin>
  <artifactId>maven-resources-plugin</artifactId>
  <version>${version.resources-plugin}</version>
  <executions>
    <execution>
      <id>copy-resources</id>
      <phase>process-resources</phase>
      <goals>
        <goal>copy-resources</goal>
      </goals>
      <configuration>
        <outputDirectory>${basedir}/target/classes/META-INF/resources/</outputDirectory>
        <resources>
          <resource>
            <directory>webapp/dist</directory>
            <filtering>false</filtering>
          </resource>
        </resources>
      </configuration>
    </execution>
  </executions>
</plugin>
```

* could add a maven profile to update the UI dependencies, but could also be done by vue and yarn build.
* Add a build UI maven profile, 

```xml
<profile>
      <id>Build the UI</id>
      <activation>
        <property>
          <name>ui.dev</name>
        </property>
      </activation>
      <build>
        <plugins>
          <plugin>
            <groupId>com.github.eirslett</groupId>
            <artifactId>frontend-maven-plugin</artifactId>
            <executions>
              <execution>
                <id>yarn run build</id>
                <goals>
                  <goal>yarn</goal>
                </goals>
                <configuration>
                  <arguments>run build --output-hashing=all</arguments>
                </configuration>
              </execution>
            </executions>
          </plugin>
        </plugins>
      </build>
    </profile>
```

to build the webapp for production. This could be run with:

```shell
mvn package quarkus:dev -Dui.deps -Dui.dev
```

* When doing development run the `vue serve` and quarkus dev into two different terminals but add a proxy configuration (file vue.config.js) for vue to match /api route to backend, and uses another port than 8080:

 ```js
 module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
    },
     port: 4545
  }
}
 ```

* Add quarkus resource with API definition

```java
    @GET
    @Path("hello")
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "hello a toi l etranger";
    }

```

* Install axios as a library to access remote server: `yarn install axios`
* Add calls to api using axios in the component which needs the data.

```js
import axios from 'axios
export default {
  name: 'HelloWorld',
  data() { return {
    msg: ''
  }
  },
  mounted() {
    axios.get('/api/v1/persons/hello').then(resp => (this.msg= resp.data ))
  }
}
```

## Vue service to call backend api

To call backend API, we need to add service and use the Promise based HTTP client:[axios](https://github.com/axios/axios) with some [Vue samples, here](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

### Load reference data

```js
import axios from "axios";
export default {
data: () => ({
    stores: [],
}),
methods: {
    initialize () {
      axios.get("/api/v1/stores").then((resp) => (this.stores = resp.data));
    }
  }
```

## Vue app deployment

See [product doc on deployment](https://cli.vuejs.org/guide/deployment.html).

If the front end is a pure static app, it can be served by a http server. We need to properly use Cross Origin Resource Sharing.

Get a docker file with build stage to use node and npm to build the front end page under dist, and a runtime stage that use nginx to expose the app. Add a nginx configuration.

## Reading

* [Getting started article](https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d) 
* [Vue mastery course](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/)
