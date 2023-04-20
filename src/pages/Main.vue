<template>
  <navbar @search="getSearch"></navbar>
  <div class="container">
    <div class="main__wrap">
      <MainMap
        :NavId="NavId"
        :curSearch="curSearch"
        @getMapId="getMapId"
      >
      </MainMap>
      <NavMap 
        :MapId="MapId"
        @getNavId="getNavId"
      >
      </NavMap>
    </div>
  </div>
</template>

<script>
'use strict' 

import navbar from '@/components/navbar.vue';
import MainMap from '@/components/MainMap.vue';
import NavMap from '@/components/NavMap.vue';

export default {
  name: 'HomeView',
  components: {
    MainMap, navbar, NavMap
  },
  data() {
    return {
      curSearch: '',
      MapId: 0,
      NavId: 0,
    }
  },
  methods: {
    getSearch(SearchQuery) {
      this.curSearch = SearchQuery
    },
    getMapId(e) {
      this.MapId = e
    },
    getNavId(e) {
      this.NavId = e
    }
    // getIdSearch(e) {
    //   this.id = e
    //   console.log(e)
    // }
  }
}
</script>
