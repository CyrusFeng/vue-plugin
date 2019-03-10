<template>

    <div>
        <gButton>默认按钮</gButton>
        <gButton icon-name="setting" icon-position="left" :loading="true">按钮</gButton>
        <gButton icon-name="setting" icon-position="right" :loading="true">按钮</gButton>
        <pre><code>{{code}}</code></pre>
    </div>
</template>

<script>
    import Button from '../../../src/button'
  export default {
    name: "button-demo",
    components:{
      gButton:Button
    },
    data(){
      return{
        code:`<gButton>默认按钮</gButton>
        <gButton icon-name="setting" icon-position="left" :loading="true">按钮</gButton>
        <gButton icon-name="setting" icon-position="right" :loading="true">按钮</gButton>`.replace(/^\t+| +/g, '').trim()
      }
    }
  }
</script>

<style scoped>

</style>