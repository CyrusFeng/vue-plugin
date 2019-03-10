<template>
    <div class="cascader-wrap">
        <div class="trigger-wrap" @click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <!--<div class="items-wrap" v-if="popoverVisible">-->
            <!--<items :source="item" v-for="(item,index) in source" :key="index"></items>-->
        <!--</div>-->
        <div class="items-wrap" v-if="popoverVisible">
            <items :source="source"></items>
        </div>
    </div>

</template>

<script>
  // import source from './region'
  // console.log(source)
  var data = [
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

  import items from './cascader-items'

  export default {
    name: "cascader",
    components: {
      items
    },
    data() {
      return {
        source: data,
        popoverVisible: false
      }
    }
  }

</script>

<style scoped lang="scss">
    .cascader-wrap {
        .trigger-wrap {
            height: 20px;
            width: 100px;
            border: 1px solid #ccc;
        }
    }
</style>