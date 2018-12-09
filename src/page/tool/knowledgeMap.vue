<template>
 <div class="container">
    <h4>知识图谱查询</h4>
    <el-input v-model="input" placeholder="请输入内容" size="small" style="width: 30%"></el-input>
    <el-button type="primary" size="small" style="margin-left: 15px">查询</el-button>
    <el-checkbox-group v-model="options">
        <el-checkbox v-for="option in options" :label="option" :key="option">{{option}}</el-checkbox>
    </el-checkbox-group>
    <div class="content box-shadow">
        <el-row>
            <el-col :span="6">
                <div class="side-coinName">
                    代币: 比特币
                </div>
                <ul class="side-tips font-14">
                    <li class="font-15"><b>现价:</b></li>
                    <li class="color-gray">$3452≈￥23731≈1.00000000BTC</li>
                    <li class="font-15"><b>现价:</b></li>
                    <li class="color-gray">$3452≈￥23731≈1.00000000BTC</li>
                    <li class="font-15"><b>现价:</b></li>
                    <li class="color-gray">$3452≈￥23731≈1.00000000BTC</li>
                    <li class="font-15"><b>现价:</b></li>
                    <li class="color-gray">$3452≈￥23731≈1.00000000BTC</li>
                    <li class="font-15"><b>现价:</b></li>
                    <li class="color-gray">$3452≈￥23731≈1.00000000BTC</li>
                    <li class="font-15"><b>现价:</b></li>
                    <li class="color-gray">$3452≈￥23731≈1.00000000BTC</li>
                </ul>
            </el-col>
            <el-col :span="18">
                <div ref="graphMap" class="map-body"></div>
            </el-col>
        </el-row>
    </div>
 </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import chartOptions from '@/page/tool/option'
require('echarts/lib/chart/graph');
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')  //按需引入
export default {
 components:{},
 props:{},
 data(){
   return {
      input: "",
      options: ['代币', '项目', '人物'],
      graphMap: null,
      chartOptions
   }
 },
 watch:{},
 computed:{},
 methods:{
     initGraph(){
        this.graphMap = echarts.init(this.$refs.graphMap);
        this.graphMap.setOption(this.chartOptions);
     }
 },
 created(){},
 mounted(){
     this.initGraph();
     this.graphMap.on('click', 'series', function (params) {
         console.log(params)
     });
 }
}
</script>
<style lang="stylus" scoped>
.container
  h4
    margin-bottom 15px
  .el-checkbox-group
    margin-top 15px
    margin-bottom 15px
  .content
    padding 10px
    .side-coinName
      background-color #e2633b
      color #fff
      padding 5px 8px
    .side-tips
      border 1px solid #edf0f5
      li
       padding 6px
       margin-left 5px
       margin-right 5px
       border-bottom 1px solid #edf0f5
  .map-body
    width 100%
    height 500px
</style>