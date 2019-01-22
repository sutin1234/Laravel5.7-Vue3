<template>
    <div>
        <h2>My Vue Components</h2>
        <button @click="onClick()">Update</button>
        <example-component></example-component>
        <deep-component></deep-component>
    </div>
</template>
<script>
    import ExampleComponent from '@/components/ExampleComponent';
    import DeepComponent from '@/components/DeepComponent';
    export default {
        components:{ ExampleComponent, DeepComponent },
        mounted() {
            console.log('My Component mounted.')
        },
        data() {
            return {
                messages: 'Updated! Hello My Vue Components'
            }
        },
        methods: {
            onClick(){
                this.$emit('update', this.messages);
            }
        }
    }
</script>


<style lang="scss" scoped>
    .title {
        color: green;
    }
</style>
