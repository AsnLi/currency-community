<template>
    <div ref="wordCloud" class="word-cloud-body"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import chartOptions from '@/components/talks/option'
require('echarts-wordcloud')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')  //按需引入
export default {
    components:{},
    props:{},
    data(){
        return {
            wordsData: [],
            wordCloud: null,
            chartOptions
        }
    },
    watch:{},
    computed:{},
    methods:{
        initWordCloud() {
            this.wordCloud = echarts.init(this.$refs.wordCloud);
            // 配置
            this.wordCloud.setOption(this.chartOptions);
    }
    },
    created(){},
    mounted(){
        this.initWordCloud();
    }
}
</script>
<style lang="stylus" scoped>
  .word-cloud-body 
    width 100%
    height 200px
</style>