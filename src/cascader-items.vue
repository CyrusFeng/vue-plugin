<template>
    <!--<div>-->
    <!--<div class="parent">{{source.name}}</div>-->
    <!--<div class="item-wrap">-->
    <!--<items :source="item" v-for="(item,index) in source.children" :key="index"></items>-->
    <!--</div>-->
    <!--</div>-->
    <div class="wrap" ref="wrapper">
        <div class="left">
            {{level}}
            <p class="item" v-for="(item,index) in source" :key="index" @click="transmit(item)">
                <span>{{item.name}}</span>
                <!--<span v-if="item.children"> > </span>-->
                <g-icon v-if="item.children" icon-name="right"></g-icon>
            </p>
        </div>
        <div class="right" v-if="selectedData[level] && selectedData[level].children">
            <items :source="selectedData[level].children" :selectedData="selectedData" @update:selected="subTransmit" :level="level+1"></items>
        </div>
    </div>
</template>

<script>
    import icon from './g-icon'
  export default {
    name: "items",
    components:{
      "g-icon":icon
    },
    props: {
      source: {
        type: Array
      },
      selectedData:{
        type:Array
      },
      level:{
        type:Number
      }
    },
    data() {
      return {
        selectedItem: null,
        // flag:false,
      }
    },
    computed: {
      subItem() {
        // if (this.selectedItem && this.selectedItem.children) {
        //   return this.selectedItem.children
        // } else {
        //   return null
        // }
        if(this.selectedData[this.level] && this.selectedData[this.level].children){
          return this.selectedData[this.level].children
        }else{
          return null
        }
      }
    },
    methods: {
      // transmit(item) {
      //   // this.flag = true
      //   this.selectedItem = item
      // }
      transmit(item){
        // this.$set(this.selectedData,this.level,item)
        // console.log(this.selectedData)
        let copy = JSON.parse(JSON.stringify(this.selectedData))
        copy[this.level] = item
        this.$emit('update:selected',copy)

        console.log(this.level)
        console.log(copy)
      },
      subTransmit(newSelectedData){
        this.$emit('update:selected',newSelectedData)
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
    $border-width: 1px;
    .box-shadow {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }

    .item-wrap {
        font-size: 0.12rem;
        padding-left: 0.3rem;
    }

    .wrap {
        /*margin-top: -$border-width;*/
        /*border: $border-width solid red;*/
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .left {
            @extend .box-shadow;
            padding: 0.3em 0;

            .item {
                padding: 0.3em 1em;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        & .left, & .right {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
        }
        &.right {
            border-left: 1px solid #999;
            margin-left: 30px;
        }
    }

</style>