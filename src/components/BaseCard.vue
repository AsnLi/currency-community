<template>
    <div class="card" :style="isFirst ? '': 'margin-top:20px'">
          <div class="card-header">
            <span class="header-title" v-if="title">{{ title }}</span>
            <div class="header-nav" v-else>
                <span v-for="item in titleArray" :key="item" 
                      @click="tabSelect(item)" :class="{activeIndex: item == activeIndex}">{{ item }}</span>
            </div>
            <span class="header-more">{{ more || '更多' }}</span>
          </div>
          <div class="card-content">    
              <slot></slot>
          </div>
    </div>
</template>

<script>
    export default {
        name: 'basecard',
        data(){
            return {
                activeIndex: ''
            }
        },
        props: {
            title: {
                type: String,   
            },
            titleArray: {
                type: Array
            },
            more: {
                type: String,
                value: ''
            },
            isFirst: {
                type: Boolean
            }
        },
        methods: {
            tabSelect(item){
                this.activeIndex = item
            }     
        },
        mounted() {
            const { titleArray } = this

            if(titleArray) this.activeIndex = titleArray[0]
        },
    }
</script>

<style lang="stylus" scoped>
    .card {
        padding 15px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0px 0px 3px rgba(26,26,26,0.1);
        > .card-header {
            display: flex;
            justify-content: space-between;
            > .header-title {
                font-weight: bold;
            }
            > .header-nav {
                font-weight: bold;  
                > span {
                    display inline-block
                    padding-bottom 15px
                    margin-right 20px
                    border-bottom 3px solid white
                    cursor pointer
                }
                > .activeIndex {
                    border-bottom 3px solid #3393fc
                }
            }
            > .header-more {
                font-size 14px
                color #99999c
                cursor pointer
            }
        }
        > .card-content {
            margin-top 20px
        }
    }
</style>


