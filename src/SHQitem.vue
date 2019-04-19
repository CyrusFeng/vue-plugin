<template>
    <div class="item">
        <div class="left" @click="selectItem(item)" v-for="item in source" >
            {{item.name}}
        </div>
        <div class="right">
            <SHQitem v-if="selectedItemArr[level] && selectedItemArr[level].children"
                     :source="selectedItemArr[level].children"
                     :level="level+1"
                     :selectedItemArr="selectedItemArr"
                     @update:selectedItemArr="sendSelectedItemArr"></SHQitem>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SHQitem",
    props:{
      source:{
        type:Array
      },
      level:{
        type:Number
      },
      selectedItemArr:{
        type:Array
      }
    },

    methods:{
      selectItem(selectedItem){
        let arrCopy = JSON.parse(JSON.stringify(this.selectedItemArr))
        arrCopy[this.level] = selectedItem
        arrCopy.splice(this.level+1)
        this.$emit('update:selectedItemArr',arrCopy)
        console.log('selectItem')
      },
      sendSelectedItemArr($event){
        this.$emit('update:selectedItemArr',$event)
      }
    }
  }
</script>

<style scoped>
    .item{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
.left{

}
</style>