<template>
    <div class="group">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "g-button-group",
    mounted(){
      for(let element of this.$el.children){
        let name = element.nodeName.toLocaleLowerCase()
        if(name !== 'button'){
          console.warn(`g-button-group的直接子元素最好为g-button,不能为${name}`)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    $margin:1px;
    .group{
        display: inline-flex;
        vertical-align: middle;
        .g-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -($margin);
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }

    }
</style>