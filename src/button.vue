<template>
    <button class="g-button" :class="`icon-${iconPosition?iconPosition:undefined}`" @click="changeLoading">
        <g-icon v-if="iconName && !loading" :iconName="iconName"></g-icon>
        <g-icon v-if="loading" class="loading" iconName="loading"></g-icon>
        <div class="button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
  // import Vue from 'vue'
  import Icon from './g-icon'
  // Vue.component('g-icon',Icon)
  export default {
    components:{
      'g-icon':Icon
    },
    props: {
      iconName: {
        type: String,
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(val) {
          if (val !== 'left' && val !== 'right') {
            return false
          } else {
            return true
          }
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      changeLoading() {
        this.loading = !this.loading
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "var.scss";
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .g-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        height: $button-height;
        font-size: $font-size;
        padding: 0 1em;
        border-radius: $border-radius;
        border: $border-width solid $border-color;
        background-color: $button-bg;
        &:hover {
            border: 1px solid $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }

        .icon {
            order: 1;
        }
        .button-content {
            order: 2;
        }

        &.icon-right {
            .icon {
                order: 2;
            }
            .button-content {
                order: 1;
            }
        }
        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>