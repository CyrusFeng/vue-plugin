<template>
    <div class="cascader-wrap">
        <div class="trigger-wrap" @click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <!--<div class="items-wrap" v-if="popoverVisible">-->
            <!--<items :source="item" v-for="(item,index) in source" :key="index"></items>-->
        <!--</div>-->
        <div class="popover items-wrap" v-if="popoverVisible">
            <items :source="source" :selectedData="selectedData" :level="level"
                   @update:selected="transmit"></items>
        </div>
    </div>

</template>

<script>
  // import source from './region'
  // console.log(source)


  import items from './cascader-items'

  export default {
    name: "cascader",
    components: {
      items
    },
    props:{
      source:{
        type:Array
      },
      selectedData:{
        type:Array
      }
    },
    data() {
      return {
        popoverVisible: false,
        level:0
      }
    },
    methods:{
      transmit(newSelectedData){
        console.log(newSelectedData);
        this.$emit('update:selected',newSelectedData)
      }
    }
  }

</script>

<style scoped lang="scss">
    $cascader-height:20px;
    $cascader-width:100px;
    .cascader-wrap {
        position: relative;

        .trigger-wrap {
            height: $cascader-height;
            width: $cascader-width;
            border: 1px solid #ccc;
        }
        .popover{
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
        }
    }
</style>