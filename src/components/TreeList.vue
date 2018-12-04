<template>
    <ul :class="['tree-list', { 'small': isParentCard }]">

        <p v-show="errorData.msg" style="text-align: center;">数据显示出错:({{errorData.msg}})
            <span @click="errorData.callBack()" style="color: blue; cursor: pointer">点击刷新</span>
        </p>

        <li v-for="news in newsList" :key="news.id">
            <span class="news-time">{{ isParentCard ? news.infopubldate : sliceDate(news.infopubldate) }}</span>
            <h3 v-html="news.newsTitle" class="news-title"></h3>
            <p :class="['news-content', { 'ellipsis--l3': isParentCard }]" v-html="news.newsAbstract" ></p>
            <div class="news-footer">
                <div class="tag-group" v-if="!isParentCard">
                    <span v-for="tag in news.tagMap" :key="tag.name">{{ tag.name }}</span>
                </div>
                <i v-else></i>
                <el-dropdown placement="top">
                    <span class="el-dropdown-link" @mouseover="shareNews(news)">
                        <i class="el-icon-share"></i> 分享
                    </span>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <img src="../assets/qcode.png" width="100px" height="100px">
                        <div>
                            <p>打开微信扫一扫</p>
                            <p>打开网页后点击屏幕</p>
                            <p>右上角"分享"按钮</p>
                        </div>
                    </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </li>
    </ul>
</template>

<script>
    import { sliceDate } from "@/common/util/index"
    export default {
        name: 'TreeList',
        data(){
            return {
                errorData: {}
            }
        },
        props: {
            newsList: {
                type: Array,
                required: true
            },
            isParentCard: {
                type: Boolean
            }
        },
        methods: {
            shareNews(oCurNews){
                console.log(oCurNews)
            },
            sliceDate(s){
                return sliceDate(s)
            }       
        },
        mounted() {
            this.$Bus.$on("dataError", errorData => {
                this.errorData = errorData
            })
        },
    }
</script>

<style lang="stylus" scoped>
    baseFs = 16px
    makerColor = #3393fc
    .small {
        max-height 450px
        overflow-y scroll
        position relative
        &::-webkit-scrollbar {
            width: 5px;
            background-color: rgba(0,0,0,0.34);
        }
        &::-webkit-scrollbar-thumb {
            background-color: #8b8b8b;

            border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
            background-color: #f5f5f5;
        }
        // &::after {
        //     content ''
        //     position absolute
        //     top 0
        //     height 10px
        //     background-color rgba(0,0,0,0.1);
        //     width 90%
        // }
        .news-title {
            font-size baseFs - 1
        }
        .news-content {
            font-size baseFs - 3 !important
        } 
    }
    .tree-list {
        padding-top: 10px;
        padding-left: 15px;
        margin-left: 15px;
        margin-bottom: 25px;
        min-height 300px
        border-left: 2px solid #dae0eb;
        > li {
            margin-bottom: 20px;
            > h3 {
            margin-top: 10px
                margin-bottom: 10px
            }
            > .news-time {
            font-size: baseFs - 1
            position relative
            &:after {
                content ""
                position absolute
                width 8px
                height 8px
                border-radius 50%
                background-color makerColor
                left -20px
                top 50%
                margin-top -4px
            }
            }
            > .news-content {
                font-size baseFs - 1
                line-height 1.6
                color #4f5053
            }
            > .news-footer {
                margin-top 10px
                display: flex;
                justify-content: space-between;
            > .tag-group {
                    font-size baseFs - 2
                    color #99999c
                > span {
                    margin-right 15px
                    cursor pointer
                }
            }
            .el-dropdown-link {
                cursor pointer
                margin-right 20px
                color makerColor
            }
            }
        }
    }
    .ellipsis--l3 {
        max-height: 60px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
</style>


