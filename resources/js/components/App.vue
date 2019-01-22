<template>
  <div id="app">
    {{ message }}
    <my-component @update="onUpdate"></my-component>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: 'Hello World Vue Components '
      }
    },
    methods: {
      onUpdate(textMessage){
        console.log('update from child ' + textMessage)
        this.message  = textMessage;
      }
    },
    
  }
</script>