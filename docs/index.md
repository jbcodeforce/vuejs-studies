# Vue.js studies

A progressive framework to be used in existing js is needed. It is reactive in the data binding mode. 

## Getting Started

* Get vue cli
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
* Components are blocks of code, grouped together within a custom element. They make applications more manageable by breaking up the whole into reusuable parts that have their own structure and behavior. 

  * Data on a component must be a function
  * Props are used to pass data from parent to child. We can specify requirements for the props a component is receiving. Props are fed into a component through a custom attribute. Props can be dynamically bound to the parent’s data

* Vue dev tools provide helpful insight about your components

### Deploy Vue app from nginx

See [product doc on deployment](https://cli.vuejs.org/guide/deployment.html).

If the front end is a pure static app, it can be served by a http server. We need to properly use Cross Origin Resource Sharing.

Get a docker file with build stage to use node and npm to build the front end page under dist, and a runtime stage that use nginx to expose the app. Add a nginx configuration.

## Reading

* [Getting started article](https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d) 
* [Vue mastery course](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/)
