/// <references path="../../../typings/tsd.d.ts"/>

var Vue = require('vue');

var Header = Vue.extend({
  template: require("./template.html")
});

Vue.component('m-header', Header);
