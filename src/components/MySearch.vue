<template>
    <div class="wrapper">
        <form @submit.prevent role="search">
            <label for="search">Search for stuff</label>
            <input v-model="SearchQuery" id="search" type="search" placeholder="Поиск..." autofocus />
            <button @click="sendSearch">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#EDEDED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 21.5L16.65 17.15" stroke="#EDEDED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>    
            <ul class="options">
                <li v-for="item in updateList" :key="item.name" @click="clickItem(item.name)">{{ item.name }}</li>
            </ul>
        </form>
    </div>
</template>

<script>
import products from '@/components/json/products.json'

export default {
    data() {
        return {
            SearchQuery: '',
            items: products,
            nameItem: ''
        }
    },

    methods: {
        sendSearch() {
            this.$emit('search', this.SearchQuery)
            this.SearchQuery = ''
        },
        clickItem(e) {
            this.SearchQuery = e
            this.nameItem = e   
        }
    },
    computed: {
        updateList: function() {
            if (this.SearchQuery !== "" && this.SearchQuery !== this.nameItem) {
                return this.items.filter(s => {
                    const regex = new RegExp(this.SearchQuery.toLowerCase(), 'gi')
                    return s.name.toLowerCase().match(regex)
                })
            } 
        }
    }
}
</script>

<style>

</style>