<template>
    <div>
        <h2>My Vue Components</h2>  
        <div class="title">{{messages}}</div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('My Component mounted.')
        },
        data() {
            return {
                messages: 'Hello My Vue Components'
            }
            
        }
    }
</script>
<style lang="scss" scoped>
    .title {
        color: green;
    }
</style>

