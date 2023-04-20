<template>
    <div class="hystmodal" v-if="show" @click="hideDialog">
        <div @click.stop class="hystmodal__window">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-dialog",
    props: {
        show: {
            type: Boolean,
            default: false 
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
}
</script>

<style>

</style>