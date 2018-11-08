<template>
    <ul class="circle-hots">
        <li v-for="index in listLength || 6" :key="index">
            <div class="circle-user">
            <img src="../assets/firend.png" alt="">
            <div>
                <p style="font-weight: bold;">圈友-01</p>
                <p>6个小时前</p>
            </div>
            </div>
            <h4>
            <router-link  tag="a"  target="_blank" :to='{name:"newsDetail",query:{userId:111}}'>
                阿里巴巴农场整合区块链溯源等技术 提高农事效率
            </router-link>
            </h4>
            <p class="circle-content">据IMEOS消息，在 EOS 全球行深圳站中，EOSToken 曾子涛谈到了 EOS 目前用户</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'circlelist',
        data(){
            return {

            }
        },
        props: {
            listLength: {
                type: Number,
            }
        },
        methods: {

        },
    }
</script>

<style lang="stylus" scoped>
    .circle-hots {
        font-size 14px
        > li {
            margin-top 20px
            > .circle-user {
                display flex
                flex-direction row
                align-items center
                > img {
                    width 45px
                    height 45px 
                    border-radius 50%
                    margin-right 10px
                }
            }
            > .circle-content {
                padding-top 10px
                padding-bottom  20px
            }
        }

        > li:not(:last-child) {
            border-bottom: 1px solid #edf0f5;
        }
    }
</style>


