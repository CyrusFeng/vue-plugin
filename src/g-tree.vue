<template>
        <!--<Item v-for="item in source" :model="item"-->
        <Item :source="source"
              :selectedItemArr="selectedItemArr"
              @update:selectedItemArr="sendSelectedItemArr"
              :level="level+1"></Item>
</template>

<script>
  import Item from './g-tree-item'

  export default {
    name: "g-tree",
    components: {
      Item
    },
    props:{
      source:{
        type:Array
      },
      selectedItemArr:{
        type:Array
      }
    },
    data(){
      return{
        level:0
      }
    },
    methods:{
      sendSelectedItemArr($event){
        this.$emit('update:selectedItemArr',$event)
        console.log('sendSelectedItemArr')
      }
    }
  }
</script>

<style scoped>

</style>