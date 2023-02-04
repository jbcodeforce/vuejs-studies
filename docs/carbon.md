# Vue carbon components

Carbon uses two type of set: production or sketch kit. Production is for developing product based web app. Different themes from white to dark.

See [product doc](https://www.carbondesignsystem.com/)

## Install

Once Vue project is created add carbon components.

```shell
yarn add carbon-components @carbon/vue @carbon/icons-vue
```

## Import carbon component style

In `main.js` import carbon components:

```js
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue/src/index';

Vue.use(CarbonComponentsVue);
```

## 2xGrid

16 columns can be combined in different grid layout: 1 column, 2, 4, 8 columns

* Grid has margins for the edge
* Padding inside around container: always 16px
* Gutter padding of 32px around containers
* Three modes: 
    * wide with 32px gutter
    * Narrow: 16px gutter
    * condensed: 1px gutter

To install it:

```shell
yarn add @carbon/grid
```

In order to use the grid, we need to wrap everything in a `<div class="bx--grid">`

See carbon-tutorial-vue folder.