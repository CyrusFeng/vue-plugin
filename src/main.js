import Vue from "vue";
import Demo from "./demo.vue";
import './reset.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");
// console.log(document.getElementById('tt'))
// console.log(document.getElementById('tt').offsetHeight);