<template>
  <div class="container">
    <el-row class="content">
        <el-col :span="16" class="main box-shadow">
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
              <li v-for="item in 10" :key="item">
                  <h3><span class="hot">热</span> 香港证监会：将为加密货币交易设置监管沙盘</h3>
                  <p class="incident-abstract">今日香港证监会行政总裁欧达礼称，香港证监会将为加密货币交易设置监管沙盘，只有专业投资者才将被允许投资加密货币基金。</p>
                  <span class="incident-soure">加密货币合法化</span>
                  <el-row class="font-14">
                    <el-col :span="8" class="font-orange">利好</el-col>
                    <el-col :span="8" class="font-center">投票后显示</el-col>
                    <el-col :span="8" class="font-blue font-right">利空</el-col>
                 </el-row>
                 <el-row :gutter="10" class="incident-vote">
                    <el-col :span="12">
                      <el-progress :percentage="countPercent('good')" color="#f70" :show-text="false"></el-progress>
                    </el-col>
                    <el-col :span="12">
                      <el-progress :percentage="countPercent('bad')" color="#3393fc" :show-text="false"></el-progress>
                    </el-col>
                 </el-row>
                 <div class="incident-discuss flex-between">
                    <span style="line-height: 2"><i class="el-icon-all-weibiaoti-"></i> {{Incidentvote.count}}</span>
                    <div>
                      <span @click="voteHandle(true)"><i class="el-icon-all-zan"></i> 利好</span>
                      <span @click="voteHandle(false)" style="margin-left: 10px"><i class="el-icon-all-chaping"></i> 利空</span>
                    </div>
                 </div>
              </li>
              <el-button size="small" style="width: 100%; margin-top:20px" type="info">点击加载更多...</el-button>
            </ul>
        </el-col>
        <el-col :span="8" class="sidebar">
          <BaseCard :titleArray='["本周热榜", "本月热榜"]' isFirst>
            <ul class="hot-list">
                  <li v-for="(item, index) in 8" :key="index">
                    <span class="list-nums">{{index + 1}}</span> 香港证监会：将为加密货币交易设置监管沙盘
                  </li>
              </ul>
          </BaseCard>
          <BaseCard :titleArray='["涨幅榜(24h)", "跌幅榜(24h)"]'>
              <HotCoinsList></HotCoinsList>
          </BaseCard>  
        </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'incident',
    data () {
      return {
        Incidentvote: {
          good: 0,
          bad: 0,
          count: 0
        },
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
      voteHandle(isGood){
        if (isGood) {
          ++this.Incidentvote.good
        } else {
          ++this.Incidentvote.bad
        }
        this.Incidentvote.count = this.Incidentvote.good + this.Incidentvote.bad 
      }
    },
    computed: {
      countPercent(sIndex){
        const parent = this.Incidentvote
        return sIndex => {
           return (!parent.good && !parent.bad) ? 100 : parent[sIndex] / parent.count * 100 
        }
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
        > .incident-vote {
          margin-top 7px
          margin-bottom 12px
        }
        > .incident-discuss {
          font-size 13px
          :last-child {
             > span {
              display inline-block
              font-size 10px
              border 1px solid black
              cursor pointer
              padding 3px
              border-radius 15px
            }
          }
        }
      }
    }
  }
  .sidebar {
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
</style>
