<template>
    <div class="cascader-wrap">
        <div class="trigger-wrap" @click="popoverVisible = !popoverVisible">
            {{result || '&nbsp;'}}
        </div>
        <!--<div class="items-wrap" v-if="popoverVisible">-->
            <!--<items :source="item" v-for="(item,index) in source" :key="index"></items>-->
        <!--</div>-->
        <div class="popover items-wrap" v-if="popoverVisible">
            <items :source="source" :selectedData="selectedData" :level="level"
                   @update:selectedData="transmit"></items>
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
    computed:{
      result(){
        return this.selectedData.map((item)=>{
          return item.name
        }).join('-')
      }
    },
    methods:{
      transmit(newSelectedData){
        console.log(newSelectedData);
        this.$emit('update:selectedData',newSelectedData)
      }
    }
  }

</script>

<style scoped lang="scss">
    $cascader-height:2em;
    $cascader-width:500px;
    .cascader-wrap {
        position: relative;

        .trigger-wrap {
            padding: 0 1em;
            display: inline-flex;
            justify-content: flex-start;
            align-items: center;
            height: $cascader-height;
            width: 30em;
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