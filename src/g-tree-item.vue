<template>
    <ul>
        <li v-for="(item,index) in source">
            <div class="content" @click="selectItem(item,index)">
                {{item.name}}
            </div>
            <!--<div v-if="selectedItemArr[level] && selectedItemArr[level].children&& index">-->
            <div v-if="selectedItemArr[level-1] && selectedItemArr[level-1].item
            && selectedItemArr[level-1].item.children && selectedItemArr[level-1].index == index">
                <Item :source="selectedItemArr[level-1].item.children"
                      :selectedItemArr="selectedItemArr"
                      @update:selectedItemArr="sendSelectedItemArr"
                      :level="level+1"></Item>
            </div>
        </li>
    </ul>

</template>

<script>
  export default {
    name: "Item",
    props: {
      source:{
        type:Array
      },
      selectedItemArr:{
        type:Array
      },
      level:{
        type:Number,
      }
    },
    methods:{
      selectItem(item,index){
        let arrCopy = JSON.parse(JSON.stringify(this.selectedItemArr))
        console.log("arrCopy",arrCopy)
        let obj = {}
        obj.item = item
        obj.index = index
        // arrCopy[this.level] = item
        arrCopy[this.level-1] = obj
        console.log("this.level",this.level)
        arrCopy.splice(this.level)
        this.$emit('update:selectedItemArr',arrCopy)
        console.log(arrCopy)
        console.log('selectItem')
      },
      sendSelectedItemArr($event){
        this.$emit('update:selectedItemArr',$event)
        console.log('sendSelectedItemArr')
      }
    }
  }
</script>

<style scoped>

</style>