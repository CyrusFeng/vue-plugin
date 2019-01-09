<template>
    <div :style="getRowStyle" class="row" :class="getRowClass">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "row",
    props:{
      gutter:{
        type:[Number,String]
      },
      align:{
        type:String,
        validator:(val)=>{
          return ['left','right','middle'].includes(val)
        }
      }
    },
    computed:{
      getRowStyle(){
        return {
          'marginLeft':-this.gutter/2+'px',
          'marginRight':-this.gutter/2+'px',
        }
      },
      getRowClass(){
        return [
          this.align && `align-${this.align}`
        ]
      }
    },
    mounted(){
      this.$children.forEach((vm)=>{
        vm.gutter = this.gutter
        console.log('vm.gutter',vm.gutter)
      })
    }
  }
</script>

<style scoped>
    .row{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }
    .align-left{
        justify-content: flex-start;
    }
    .align-right{
        justify-content: flex-end;
    }
    .align-middle{
        justify-content: center;
    }
</style>