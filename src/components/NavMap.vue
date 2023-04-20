<template>
  <div class="wrapper_flex">
    <ul class="list">
        <li v-for="item in arr" :id="item.id" @mouseout="isNotHover($event.target.id)" @mouseover="isHover($event.target.id)" :class="item.class" :key="item.id">
            {{ item.name }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        MapId: {
            type: String
        }
    },
    data() {
        return {
            arr: [
                {id: 1, name: 'Лабораторный корпус', class: 'lab'},
                {id: 2, name: "Конгресс центр", class: 'Congress'},
                {id: 3, name: "Главный корпус", class: 'Main'},
                {id: 4, name: "Музей истории электросвязи", class: 'Museum'},
                {id: 5, name: "ДИСиТ", class: 'Disit'},
                {id: 6, name: "Библиотечный корпус", class: 'library'},
                {id: 7, name: "УЛК(Учебно-лабораторный корпус)", class: 'ULK'}
            ]
        }
    },
    methods: {
        isHover(liId) {
            this.$emit('getNavId', liId)
            const newArr = this.arr.filter(el => el.id != liId)

            newArr.forEach(e => {
                document.querySelector(`.${e.class}`).classList.add('back')
            })

        },

        isNotHover(liId) {
            this.$emit('getNavId', "")
            const newArr = this.arr.filter(el => el.id != liId)

            newArr.forEach(e => {
                document.querySelector(`.${e.class}`).classList.remove('back')
            })
        },

    },
    updated() {
        if (this.MapId != "") {
            const newArr = this.arr.filter(el => el.id != this.MapId)

            newArr.forEach(e => {
                document.querySelector(`.${e.class}`).classList.add('back')
            })
        } else {
            const newArr = this.arr.filter(el => el.id != this.MapId)

            newArr.forEach(e => {
                document.querySelector(`.${e.class}`).classList.remove('back')
            })
        }

    }
}
</script>

<style>

</style>