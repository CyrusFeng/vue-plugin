<template>
    <div class="wrapper" @click="addListener">
        <div class="pop-wrapper" v-if="showPop">
            <slot name="pop"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "g-popover",
    data(){
      return {
        showPop:false,
      }
    },
    methods:{
      addListener(){
        this.showPop = !this.showPop

        if(this.showPop){
          console.log('显示')
          this.$nextTick(()=>{
            document.addEventListener('click',this.hiddenPop,{
              once : true
            })
            //document.removeEventListener('click',this.hiddenPop)
          })
        }else{
          console.log('隐藏')
        }
      },
      hiddenPop(){
        this.showPop = false
        console.log('隐藏')
      }
    }
  }
</script>

<style scoped lang="scss">
    .wrapper{
        margin: 100px;
        display: inline-block;
        vertical-align: middle;
        position: relative;
        .pop-wrapper{
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;
        }
    }
</style>