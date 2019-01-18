import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './g-button-group'
import Icon from './g-icon'
import gInput from './g-input'
import gRow from './g-row'
import gCol from './g-col'
import Tabs from './g-tabs'
import TabsNav from './g-tabs-nav'
import TabsNavItem from './g-tabs-nav-item'
import TabsContent from './g-tabs-content'
import TabsContentItem from './g-tabs-content-item'
import Popover from './g-popover'

import toastPlugin from './toastPlugin'

Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-icon',Icon)
Vue.component('g-input',gInput)
Vue.component('g-row',gRow)
Vue.component('g-col',gCol)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-nav',TabsNav)
Vue.component('g-tabs-nav-item',TabsNavItem)
Vue.component('g-tabs-content',TabsContent)
Vue.component('g-tabs-content-item',TabsContentItem)
Vue.component('g-popover',Popover)

Vue.use(toastPlugin)

new Vue({
  el:'#app',
  data:{
    message:'hi vue',
    selectedTab:'tab1'
  },
  methods:{
    showToast(position){
      this.$toast('<i>哈哈</i>',{
        autoClose:false,
        autoCloseDelay:5,
        position:position,
        // closeBtn:{
        //   text:'哈哈',
        //   callback:()=>{
        //     console.log('关闭toast')
        //   }
        // },
        enableHtml:true
      })
    }
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