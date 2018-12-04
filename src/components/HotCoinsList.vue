<template>
    <ul class="coins-list">
        <li v-for="(item, index) in 10" :key="index">
            <span class="coin-num"><b>{{ index + 1 }}</b></span>
            <span class="coin-name"><img src="../assets/BTC.png" width="18px" height="18px"> TPAY</span>
            <span class="coin-price">￥13.04</span>
            <span class="coin-drop">+22.06%</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'Hotcoinslist',
        data(){
            return {

            }
        },
        props: {
            // newsList: {
            //     type: Array,
            //     required: true
            // }
        },
        methods: {

        },
    }
</script>

<style lang="stylus" scoped>
    .coins-list {
        font-size 15px
        :nth-child(-n+3) > .coin-num {
            color #f70
        }
        :last-child {
            .coin-num {
                 margin-right 7px
            }
        }
        > li {
            margin-bottom 10px
            overflow hidden
            // > span {
            //     height 100%
            // }
            .coin-num {
                margin-left 10px
                margin-right 15px
            }
            .coin-price {
                margin-left 25px
            }
            .coin-drop {
                float right
            }
        }
    }
</style>


