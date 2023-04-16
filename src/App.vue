<template>
    <router-view/>
</template>

<script>
import navbar from './components/navbar.vue';


export default {
  components: {
    navbar
  },
  data() {
    return {
      currSearch: ''
    }
  },
  methods: {
    getSearch(searchQuery) {
      this.currSearch = searchQuery
      console.log(this.currSearch)
    }
  }
}

</script>

<style lang="scss">

</style>
