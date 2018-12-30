import Vue from 'vue'
import Button from './button.vue'
import Icon from './g-icon'
import ButtonGroup from './g-button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
  el:'#app',
  data:{
    message:'hi vue',
    classname:undefined
  }
})