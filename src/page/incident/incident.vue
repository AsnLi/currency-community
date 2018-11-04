<template>
  <div class="container">
    <el-row class="content">
        <el-col :span="17" class="main box-shadow">
            <div class="main-header">
                <div>
                  <label for="sort">排序: &nbsp;</label>
                  <el-select v-model="value" placeholder="按热度" size="small" style="width: 150px" id="sort">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
               <Search></Search>
            </div>
            <ul class="incident-list">
              <li v-for="item in 5" :key="item">
                  <h3><span class="hot">热</span> 香港证监会：将为加密货币交易设置监管沙盘</h3>
                  <p class="incident-abstract">今日香港证监会行政总裁欧达礼称，香港证监会将为加密货币交易设置监管沙盘，只有专业投资者才将被允许投资加密货币基金。</p>
                  <span class="incident-soure">加密货币合法化</span>
                  <el-row class="font-14">
                    <el-col :span="8" class="font-orange">利好</el-col>
                    <el-col :span="8" class="font-center">投票后显示</el-col>
                    <el-col :span="8" class="font-blue font-right">利空</el-col>
                 </el-row>
                 <el-row :gutter="10" class="vote-show">
                    <el-col :span="12">
                      <el-progress :percentage="80" color="#f70" :show-text="false"></el-progress>
                    </el-col>
                    <el-col :span="12">
                      <el-progress :percentage="80" color="#3393fc" :show-text="false"></el-progress>
                    </el-col>
                 </el-row>
                 <div class="flex-between">
                    <span><i class="el-icon-edit"></i>44</span>
                    <div>
                      <span><i class="el-icon-edit"></i>利好</span>
                      <span><i class="el-icon-edit"></i>利空</span>
                    </div>
                 </div>
              </li>
              <el-button size="small" style="width: 100%; margin-top:20px" type="info">点击加载更多...</el-button>
            </ul>
        </el-col>
        <el-col :span="7" class="sidebar">
          <div class="card" style="margin-top: 0">
              <div class="card-header">
                <div class="hot-date">
                  <span>本周热榜</span>
                  <span>本月热榜</span>
                </div>
              </div>
               <ul class="hot-list">
                  <li v-for="(item, index) in 8" :key="index">
                    <span class="list-nums">{{index + 1}}</span> 香港证监会：将为加密货币交易设置监管沙盘
                  </li>
              </ul>
          </div>
          <div class="card">
              <div class="card-header">
                <div class="hot-date">
                  <span>涨幅榜(24h)</span>
                  <span>跌幅榜(24h)</span>
                </div>
                <span class="card-more">更多</span>
              </div>
               <ul class="hot-list">
                  <li v-for="(item, index) in 10" :key="index">
                   <el-row>
                      <el-col :span="2">{{index+1}}</el-col>
                      <el-col :span="6">TPAY</el-col>
                      <el-col :span="7">￥13.04</el-col>
                      <el-col :span="9">+22.06%</el-col>
                  </el-row>
                    <!-- <span class="list-nums">{{index + 1}}</span> 香港证监会：将为加密货币交易设置监管沙盘 -->
                  </li>
              </ul>
          </div>  
        </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'threestep',
    data () {
      return {
        activeIndex: '1',
        options: [{
          value: 'hot',
          label: '按热度'
        }, {
          value: 'time',
          label: '按时间'
        }],
        value: ''
      }
    },
    methods: {
      handleSelect(){

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus" scoped>
  .main {
    > .incident-list {
       margin-top 20px
      > li {
        margin-top 15px
        padding-bottom 15px
        border-bottom 1px solid #edf0f5
        h3 {
          vertical-align middle
          > .hot {
            background-color #d20
            color white
            padding 3px
            font-size 14px
          }
        }
        > .incident-abstract {
          font-size 15px
          color #5e5e69
          line-height 1.5
          margin-top 5px
        }
        > .incident-soure {
          display block
          font-size 14px
          color: #99999c;
          margin-top 5px
          margin-bottom 5px
        }
        > .vote-show {
          margin-top 7px
          margin-bottom 12px
        }
      }
    }
  }
  .sidebar {
    .card {
      .hot-date {
        font-weight: bold;  
        > span {
          display inline-block
          padding-bottom 15px
          margin-right 20px
          border-bottom 3px solid #3393fc
        }
      }
      .hot-list {
        margin-top 20px
        font-size 14px
        color #5e5e69;
        :nth-child(-n+3) > .list-nums {
            color #f70
        }
        > li {
          margin-top 10px
          margin-bottom 10px
          > .list-nums {
            margin-right 10px
            color #99999c
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
