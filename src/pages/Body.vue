<template>
    <navbar></navbar>
    <div class="container">
        <h1 style="text-align: center; font-size: 40px">
            Эта страница {{ $route.params.name }}
        </h1>
      </div>
</template>

<script>
import navbar from '@/components/navbar.vue';

export default {
    components: {
        navbar
    }
}
</script>


<style>

</style>