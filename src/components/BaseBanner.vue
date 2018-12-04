<template>
    <div class="banner">
        <el-carousel style="height:300px;">
        <el-carousel-item v-for="item in 4" :key="item"  style="height:300px;">
            <img src="../assets/share.jpg" alt="" srcset="" width="100%" height="300px">
            <!-- <p class="banner-tip">万科企业境外增发股份材料已获证监会接收</p> -->
        </el-carousel-item>
        </el-carousel>
     </div>
</template>

<script>
    export default {
        name: 'BaseBanner',
        data(){
            return {
            }
        },
        methods: {           
        },
        mounted() {
        },
    }
</script>

<style lang="stylus" scoped>
    .banner {
        position relative
        img {
            border-bottom-left-radius  5px
            border-bottom-right-radius  5px
        }
        > .banner-tip {
            display block
            position absolute
            border-bottom-left-radius  5px
            border-bottom-right-radius  5px
            top 14px
            left 0
            padding-top 10px
            padding-bottom 10px
            width 100%
            background-color rgba(0,0,0,0.3)
            color #fff
            text-indent 1em
            font-size baseFs - 1
        }
    }
</style>


