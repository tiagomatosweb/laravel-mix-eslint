import Vue from 'vue';

Vue.component('example-component', require('./components/ExampleComponent.vue'));

/* eslint-disable no-new */
new Vue({
    el: '#app',
});
