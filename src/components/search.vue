<template>
    <div class="header_search">
        <input type="text" v-model="seachText" 
               placeholder = "搜索.."
               class="search_input">
        <span class="search_sub" @click="test"></span>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data(){
            return {
                seachText: "",
                placeholder: "搜索.."
            }
        },
        methods: {
            test(){
                console.log(this.seachText)
            }
        },
        watch: {
            seachText: v => {
                console.log(v)
            }
        },
        mounted() {
        },
    }
</script>

<style lang="stylus" scoped>
    .header_search {
        position: relative;
        > .search_input {
            padding: 8px 15px;
            border-radius: 25px;
            border: none;
            outline: none;
            background: #f6f8fa url("../assets/search.png") 95% center no-repeat;
        }
        > .search_sub {
            position: absolute;
            top: 0;
            right: 5%;
            width: 20px;
            height: 100%;
        }
    }

</style>


