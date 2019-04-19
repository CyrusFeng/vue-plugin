<template>
    <div>
        <div class="showinfo"></div>
        <div class="popover">
            <Item :source="source" :selectedItemArr="selectedItemArr" :level="level+1"
                  @update:selectedItemArr="sendSelectedItemArr"></Item>
        </div>
    </div>
</template>

<script>
  import Item from './SHQitem'

  export default {
    name: "SHQparent",
    components:{
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
        console.log('sendSelectedItemArr')
        this.$emit('update:selectedItemArr',$event)
      }
    }
  }
</script>

<style scoped>

</style>