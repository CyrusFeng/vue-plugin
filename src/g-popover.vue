<template>
    <div class="wrapper" @click="addListener($event)" ref="wrapper">
        <div class="pop-wrapper" ref="popWrapper" v-if="showPop">
            <slot name="pop"></slot>
        </div>
        <span ref="triggerWrap" class="btn">
            <slot></slot>
        </span>
    </div>
</template>

<script>
  export default {
    name: "g-popover",
    created(){
      this.showPop = false
    },
    data(){
      return {
        showPop:false,
      }
    },
    methods:{
      addListener(e){
        if (this.$refs.triggerWrap.contains(e.target)){
          if(this.showPop){
            this.close()
          }else{
            this.open()
          }
        }
      },
      hiddenPop(e){
        if (this.$refs.triggerWrap.contains(e.target) || this.$refs.popWrapper.contains(e.target)) {
            console.log('什么都不做')
        }else{
          this.close()
        }
      },
      close(){
        this.showPop = false
        document.removeEventListener('click',this.hiddenPop)
        console.log('关闭，监听器消失')
      },
      open(){
        this.showPop = true
        document.addEventListener('click',this.hiddenPop)

        this.$nextTick(()=>{
          document.body.appendChild(this.$refs.popWrapper)
          //将弹出层放在body中，以防用户在组件外使用overflow：hidden时弹出层被遮盖
          let { width,height,top,left} = this.$refs.triggerWrap.getBoundingClientRect()
          this.$refs.popWrapper.style.left = left+ window.scrollX+'px'
          this.$refs.popWrapper.style.top = top+ window.scrollY +'px'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
    .wrapper{
        padding: 20px;
        margin: 100px;
        display: inline-block;
        vertical-align: middle;
        position: relative;
        border: 1px solid red;
    }
    .pop-wrapper{
        position: absolute;
        /*bottom: 100%;*/
        /*left: 0;*/
        transform: translateY(-100%);
        border: 1px solid red;
    }
    .btn{
        border: 1px solid red;
    }

</style>