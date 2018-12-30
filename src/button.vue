<template>
    <button class="g-button" :class="`icon-${iconPosition?iconPosition:undefined}`" @click="changeLoading">
    <!--<button class="g-button" :class="{[`icon-${iconPosition}`]:true}">-->
    <!--<button class="g-button" :class="iconPosition">-->
        <g-icon v-show="iconName && !loading" :iconName="iconName"></g-icon>
        <g-icon v-show="loading" class="loading" iconName="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
  export default {
    props: {
      iconName: {
        type: String,
      },
      iconPosition:{
        type:String,
        default:'left',
        validator(val){
          console.log(val);
          if(val !== 'left' && val !== 'right'){
            return false
          }else {
            return true
          }
        }
      },
      loading:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      changeLoading(){
        this.loading = !this.loading
      }
    }
  }
</script>

<style scoped lang="scss">
    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .g-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: var(--border-width) solid var(--border-color);
        background-color: var(--button-bg);
        &:hover {
            border: 1px solid var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }

        &.icon-left{
            .icon {
                order: 1;
            }
            .content{
                order: 2;
            }
        }
        &.icon-right{
            .icon {
                order: 2;
            }
            .content{
                order: 1;
            }
        }
        .loading{
            animation: spin 1s infinite linear;
        }
    }
</style>