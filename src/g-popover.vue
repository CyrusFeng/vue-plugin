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
        console.log('点击了组件')
        if (this.$refs.triggerWrap.contains(e.target)){

          this.showPop = !this.showPop

          if(this.showPop){

            this.$nextTick(()=>{
              document.body.appendChild(this.$refs.popWrapper)

              // document.addEventListener('click',this.hiddenPop,{
              //   once : true
              // })
              document.addEventListener('click',this.hiddenPop)

              //将弹出层放在body中，以防用户在组件外使用overflow：hidden时弹出层被遮盖


              let { width,height,top,left} = this.$refs.triggerWrap.getBoundingClientRect()

              this.$refs.popWrapper.style.left = left+ window.scrollX+'px'
              this.$refs.popWrapper.style.top = top+ window.scrollY +'px'

              //document.removeEventListener('click',this.hiddenPop)
            })
          }else{
            console.log('点击按钮隐藏')
          }
        }else{
          console.log('没点击按钮')
        }

      },
      hiddenPop(e){
        if (this.$refs.popWrapper.contains(e.target)) {
            console.log('点击了pop')
        }else{
          console.log('没点击弹出层')
          this.showPop = false
          console.log('document隐藏')
          document.removeEventListener('click',this.hiddenPop)
          console.log('监听器消失')
        }


      },
      xxx(){
        console.log('haha')
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