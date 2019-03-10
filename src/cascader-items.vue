<template>
    <!--<div>-->
        <!--<div class="parent">{{source.name}}</div>-->
        <!--<div class="item-wrap">-->
            <!--<items :source="item" v-for="(item,index) in source.children" :key="index"></items>-->
        <!--</div>-->
    <!--</div>-->
    <div class="wrap">
        <div class="left">
            <p v-for="(item,index) in source" :key="index" @click="transmit(item)">{{item.name}}</p>
        </div>
        <div class="right" v-if="subItem">
            <items :source="subItem"></items>
        </div>
    </div>
</template>

<script>
  export default {
    name: "items",
    props:{
      source:{
        type:Array
      }
    },
    data(){
      return{
        selectedItem:null,
      }
    },
    computed:{
      subItem(){
        if(this.selectedItem && this.selectedItem.children){
          return this.selectedItem.children
        }else{
          return null
        }
      }
    },
    methods:{
      transmit(item){
        this.selectedItem = item
      }
    }
  }
</script>

<style scoped>
.item-wrap{
    font-size: 0.12rem;
    padding-left: 0.3rem;
}
.wrap{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
    .left,.right{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }
    .right{
        margin-left: 30px;
    }
</style>