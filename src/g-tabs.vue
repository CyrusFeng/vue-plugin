<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "g-tabs",
    data() {
      return {
        eventBus: new Vue()
      }
    },
    props: {
      selected: {
        type: String,
        required: true
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.eventBus.$on('changeTab', (val) => {
        this.$emit('update:selected', val)
      })
      this.eventBus.$emit('changeTab', this.selected)
    },
  }
</script>

<style scoped>

</style>