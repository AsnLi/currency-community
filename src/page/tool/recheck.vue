<template>
 <div class="container">
   <h3>白皮书查重 <span class="theSample color-blue font-14"><i class="el-icon-document"></i>查看示例</span></h3>
   <el-row class="content">
     <el-col :span="16" class="main box-shadow">
        <p class="font-14 color-gray">白皮书查重功能限时免费，选择中英文可提升查重效率。</p>
        <el-form label-position="top" label-width="80px" :model="formLabelAlign">
          <el-form-item label="项目名或币种名">
            <el-input v-model="formLabelAlign.name" placeholder="请输入项目名或币种名..."></el-input>
          </el-form-item>
          <el-form-item label="白皮书正文内容：">
            <el-input type="textarea" :rows="5" v-model="formLabelAlign.content" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item class="start-analyze">
            <el-dropdown>
              <span>查询语种：</span>
              <span class="el-dropdown-link">
                <b>中文</b><i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>中文</el-dropdown-item>
                <el-dropdown-item>英文</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button type="primary">查重分析</el-button>
          </el-form-item>
        </el-form>
     </el-col>
     <el-col :span="8" class="sidebar">
       <BaseCard title="白皮书重复率TOP10" isFirst>
          <div class="top10-header font-15">
              <span>币种名</span>
              <span>重复率</span>
          </div>
          <ul class="top10-list font-14">
            <li v-for="(item, index) in 5" :key="index">
              <span>ZENT</span>
              <el-progress :text-inside="true" :stroke-width="10" :percentage="50" 
              status="exception" :show-text="false" style="width: 100px; display:inline-block"></el-progress>
              <span>78.94%</span>
              <span class="color-blue">详情></span>
            </li>
          </ul>
       </BaseCard>
     </el-col>
   </el-row>
    <div class="paper-result box-shadow">
        <h4>总体结论</h4>
        <p class="font-15" style="text-indent:1em">
          总文字重复率: 
          <span class="color-red">99.05%</span>
        </p>
        <h4>相似白皮书汇总</h4>
        <el-table
            :data="tableData"
            style="width: 100%"
            :header-row-style="{backgroundColor: '#000'}">
            <el-table-column
              prop="number"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="repeatRate"
              label="重复率"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="项目名">
            </el-table-column>
            <el-table-column
              prop="coinName"
              label="币种名">
            </el-table-column>
            <el-table-column
              prop="time"
              label="上网时间">
            </el-table-column>
        </el-table>
        <h4>详细相似段落</h4>
        <ul class="contrast-list">
          <li v-for="(item, index) in 3" :key="index">
            <div class="contrast-original">
              <p>Filecoin 第1段 :</p>
              <p>
                The internet is in the middle of a revolution: centralized proprietary services are being replaced with 
                decentralized open ones; trusted parties replaced with verifiable computation; brittle location addresses 
                replaced with resilient content addresses; inefficient monolithic services replaced with peer-to-peer 
                algo- rithmic markets. Bitcoin, Ethereum, and other blockchain networks have proven the utility of 
                decen- tralized transaction ledgers. These public ledgers process sophisticated smart contract 
                applications and transact crypto-assets worth tens of billions of dollars. These systems 
                are the first instances of internet- wide Open Services, where participants form a decentralized 
              </p>
            </div>
            <div class="contrast-source">
              <p>来源：Filecoin:</p>
              <p>
                The internet is in the middle of a revolution: centralized proprietary services are being replaced with 
                decentralized open ones; trusted parties replaced with verifiable computation; brittle location addresses 
                replaced with resilient content addresses; inefficient monolithic services replaced with peer-to-peer 
                algo- rithmic markets. Bitcoin, Ethereum, and other blockchain networks have proven the utility of 
                decen- tralized transaction ledgers. These public ledgers process sophisticated smart contract 
                applications and transact crypto-assets worth tens of billions of dollars. These systems 
                are the first instances of internet- wide Open Services, where participants form a decentralized 
              </p>
            </div>
            <hr style="margin: 10px -10px" />
          </li>
        </ul>
    </div>
 </div>
</template>

<script>
export default {
 components:{},
 props:{},
 data(){
   return {
     tableData: [{
        number: 1,
        repeatRate: '99.05%',
        name: 'Filecoin',
        coinName: "FIL",
        time:"2017-07-19"
      }],
     formLabelAlign: {
       name: "",
       content: ""
     }
   }
 },
 watch:{},
 computed:{},
 methods:{},
 created(){},
 mounted(){}
}
</script>
<style lang="stylus" scoped>
.container
  h3
    margin-bottom 10px
    margin-left 20px
    .theSample
      font-weight normal
      i
        margin-left 25px
  .start-analyze
    display flex
    flex-direction row-reverse
    .el-button
      margin-left 10px
.sidebar
  .top10-header
    padding 5px
    border-top 1px solid red
    border-bottom 1px solid red
    span
      display inline-block
      width 45%
  .top10-list 
    padding-left 5px
    li
      padding-top 5px
      padding-bottom 5px
      .el-progress
        margin-left 10px
        margin-right 10px
.paper-result
  margin-top 20px
  padding 10px 15px
  h4
    margin-top 10px
    margin-bottom 10px
    padding-left 10px
    border-left 4px solid #3393fc
  .contrast-list
    border 1px solid #99999c
    padding 15px 10px
    position relative
    &::after
      content ""
      position absolute
      top 0
      left 45%
      width 1px
      height 100%
      background-color #99999c
    div
      display inline-block
      width 45%
</style>