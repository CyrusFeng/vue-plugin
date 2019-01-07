import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './g-button-group'
import gInput from './g-input'

Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',gInput)


new Vue({
  el:'#app',
  data:{
    message:'hi vue',
  }
})

// import chai from 'chai'
// const expect = chai.expect
//
// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData:{
//       iconName:'settings'
//     }
//   })
//   button.$mount()
//   let useElement = button.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-settings')
// }
// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData:{
//       iconName:'settings',
//       loading:true
//     }
//   })
//   button.$mount('')
//   let useElement = button.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
// }
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData:{
//       iconName:'settings',
//       loading:true,
//       iconPosition:'right'
//     }
//   })
//   button.$mount(div)
//   let svg = button.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('2')
//   button.$el.remove()
//   button.$destroy()
// }

// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData:{
//       iconName:'settings',
//       loading:true,
//       iconPosition:'right'
//     }
//   })
//   button.$mount()
//
//   let btnDom = button.$el
//   console.log(btnDom);
//   btnDom.on('click',()=>{
//     console.log(1)
//   })
//   btnDom.click()
// }