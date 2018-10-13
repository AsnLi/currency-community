<template>
    <div class="header_search">
        <input type="text" v-model="seachText" 
               placeholder="搜索..." 
               class="search_input">
        <span class="search_sub" @click="test"></span>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data(){
            return {
                seachText: ""
            }
        },
        methods: {
            test(){
                console.log(this.seachText)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .header_search {
        position: relative;
        > .search_input {
            padding: 5px 10px;
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


