<template>
    <div class="wrapper">
        <input type="text"
               :class="{'error':error}"
               :value="value"
               :disabled="disabled"
               :readonly="readonly"
               @input="$emit('input',$event.target.value)"
               @change="$emit('change',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('focus',$event.target.value)"
        >
        <template v-if="error">
            <g-icon iconName="setting" class="icon-error"></g-icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
  import Icon from './g-icon'

  export default {
    name: "gInput",
    components: {
      'g-icon': Icon
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style scoped lang="scss">
    $font-size: 12px;
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #999;
    $border-radius: 4px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #f1453d;
    .wrapper {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: $font-size;
        * {
            margin-right: 0.5rem;
            &:last-child {
                margin-right: 0;
            }
        }
        input {
            padding: 0 8px;
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled] {
                border-color: #ccc;
                color: #ccc;
                cursor: not-allowed;
            }
            &[readonly] {
                border-color: #ccc;
                color: #ccc;
            }
            &.error {
                border-color: $red;
            }
        }
        .icon-error {
            fill: $red;
        }
        .error-message {
            color: $red;
        }

    }
</style>


