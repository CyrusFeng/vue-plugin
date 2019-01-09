<template>
    <div :style="getColStyle" class="col" :class="getColClass">
        <slot></slot>
    </div>
</template>

<script>
  let validator = (val)=>{
    let flag = true
    let keys = Object.keys(val)
    keys.forEach((key)=>{
      if(!['span','offset'].includes(key)){
        flag = false
      }
    })
    return flag
  }
  export default {
    name: "col",
    data(){
      return{
        gutter:0
      }
    },
    props:{
      span:{
        type:[Number,String]
      },
      offset:{
        type:[Number,String]
      },
      ipad:{
        type:Object,
        validator
      }
    },
    computed:{
      getColStyle(){
        console.log('col',this.gutter)
        return{
          'paddingLeft':this.gutter/2+'px',
          'paddingRight':this.gutter/2+'px'
        }
      },
      getColClass(){
        let {span,offset,ipad} = this
        return [
          ...this.createClass({span,offset}),
          ...this.createClass(ipad,'ipad-')
        ]
      }
    },
    methods:{
        createClass(obj,str = ''){
          if (!obj) {
            return []
          }
          let array = []
          if(obj.span){
            array.push(`col-${str}${obj.span}`)
          }
          if (obj.offset){
            array.push(`offset-${str}${obj.offset}`)
          }
          return array
        }
    }
  }
</script>

<style scoped lang="scss">
    .col{
        /*width: 100%;*/
        border: 1px solid dodgerblue;
        box-sizing: border-box;
        background-color: #666666;
    }
    $class-prefix: col-;
    @for $n from 1 through 24 {
        .#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%;
        }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
        .#{$class-prefix}#{$n} {
            margin-left: ($n / 24) * 100%;
        }
    }
    @media (min-width: 577px) {
        $class-prefix: col-ipad-;
        @for $n from 1 through 24 {
            .#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-ipad-;
        @for $n from 1 through 24 {
            .#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>