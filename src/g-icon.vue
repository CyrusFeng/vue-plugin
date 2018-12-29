<template>
    <svg class="icon">
        <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
</template>

<script>
  export default {
    name: "g-icon",
    props: {
      iconName: {
        type: String,
      }
    },
  }
</script>

<style scoped lang="scss">
    .icon {
        width: 1em;
        height: 1em;
    }
</style>