<template>
     <el-button type="primary" icon="el-icon-arrow-up" circle class="backTop" @click="backTop()" v-show="isShowBack"></el-button>
</template>

<script>
    export default {
        name: 'the-backTop',
        data(){
            return {
                isShowBack: false,
                isFlexTime: false
            }
        },
        methods: {           
            backTop(){
                let winTop = document.documentElement.scrollTop
                if(!winTop) return;
                setTimeout( () => {
                    document.documentElement.scrollTop = Math.floor(winTop * 0.3) 
                    this.backTop()
                }, 50)
            },
            flexTime(top){
                let isFlexTime = this.isFlexTime
                if(top > 200) {
                    if(isFlexTime) return;
                    this.isFlexTime = true
                    this.$Bus.$emit('flexTime', true)
                } else {
                    if(!isFlexTime) return;
                    this.isFlexTime = false
                    this.$Bus.$emit('flexTime', false)
                };   
            }
        },
        mounted() {
            window.addEventListener("scroll", e => {
                let { documentElement: { scrollTop: top } } = document
                this.isShowBack = top > 1200 ? !0 : !1 
                this.flexTime(top)  
            })
        },
    }
</script>

<style lang="stylus" scoped>
    .backTop {
        position fixed 
        bottom 25%
        right 8%
        z-index 999
    }
</style>


