
require('./bootstrap');
import Vue from 'vue';

import App from './components/App';
import MyComponent from './components/my-component';

Vue.component('my-component', MyComponent);

export default new Vue({
    render: h => h(App)
  });