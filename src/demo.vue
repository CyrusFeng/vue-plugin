<template>
    <div id="tt">
        <g-tabs :selected.sync="selectedTab">
            <g-tabs-nav>
                <g-tabs-nav-item name="tab1">
                    <g-icon icon-name="setting"></g-icon>
                    体育
                </g-tabs-nav-item>
                <g-tabs-nav-item name="tab2">财经</g-tabs-nav-item>
                <div class="icon" slot="extra">我是图标</div>
            </g-tabs-nav>
            <g-tabs-content>
                <g-tabs-content-item name="tab1">体育文章</g-tabs-content-item>
                <g-tabs-content-item name="tab2">财经文章</g-tabs-content-item>
            </g-tabs-content>
        </g-tabs>

        <!--<p>{{selectedData}}</p>-->
        <g-cascader :source="source" :selectedData="selectedData"
                    @update:selected="changeMainDate"></g-cascader>

    </div>

</template>

<script>

  // new Vue({
  //   el:'#app',
  //   data:{
  //     message:'hi vue',
  //     selectedTab:'tab1'
  //   },
  //   methods:{
  //     showToast(position){
  //       this.$toast('<i>哈哈</i>',{
  //         autoClose:false,
  //         autoCloseDelay:5,
  //         position:position,
  //         // closeBtn:{
  //         //   text:'哈哈',
  //         //   callback:()=>{
  //         //     console.log('关闭toast')
  //         //   }
  //         // },
  //         enableHtml:true
  //       })
  //     }
  //   }
  // })
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
  import Cascader from './cascader'

  import toastPlugin from './toastPlugin'

  Vue.component('g-button', Button)
  Vue.component('g-button-group', ButtonGroup)
  Vue.component('g-icon', Icon)
  Vue.component('g-input', gInput)
  Vue.component('g-row', gRow)
  Vue.component('g-col', gCol)
  Vue.component('g-tabs', Tabs)
  Vue.component('g-tabs-nav', TabsNav)
  Vue.component('g-tabs-nav-item', TabsNavItem)
  Vue.component('g-tabs-content', TabsContent)
  Vue.component('g-tabs-content-item', TabsContentItem)
  Vue.component('g-popover', Popover)
  Vue.component('g-cascader', Cascader)

  Vue.use(toastPlugin)


  var source = [
    {
      name: '北京',
      children: [
        { name: '东城' },
        { name: '西城' },
        { name: '朝阳' }
      ]
    },
    {
      name: '河北',
      children: [
        { name: '廊坊' },
        { name: '保定' },
        {
          name: '石家庄',
          children: [
            {
              name: '石家庄1区',
              children: [
                { name: '石家庄1区1' },
                { name: '石家庄1区2' }
              ]
            },
            { name: '石家庄2区' },
            { name: '石家庄3区' },
            {
              name: '石家庄4区',
              children: [
                { name: '石家庄4区1' },
                { name: '石家庄4区2' }
              ]
            }
          ]
        }
      ]
    },
    {
      name: '浙江',
      children: [
        {
          name: '杭州',
          children: [
            {
              name: '阿里',
              children: [
                { name: '优酷' },
                { name: '饿了么' }
              ]
            },
            {
              name: '海康威视',
              children: [
                { name: '摄像头' },
                { name: '监控器' }
              ]
            },
          ]
        },
        { name: '金华'}
      ]
    }
  ]
  export default {
    name: "demo",
    data(){
      return {
        selectedTab:'tab1',
        source,
        selectedData:[]
      }
    },
    methods:{
      changeMainDate(newSelectedData){
        this.selectedData = newSelectedData
      }
    }
  }
</script>

<style scoped>

</style>