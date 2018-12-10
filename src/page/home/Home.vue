<template>
    <div class="container">
      <el-row class="token-indexs box-shadow">
        <el-col :span="4" v-for="index in 6" :key="index">
          <p class="index-name">
            <img src="../../assets/BTC.png" alt="" srcset="">
            <span @click="goDetailView">&nbsp; BTC 比特币</span>
          </p>
          <p class="index-price">￥444489</p>
          <p class="index-drop">-94.32(-0.21%)</p>
        </el-col>
      </el-row>
      <el-row class="token-fastNews">
        <el-col :span="16" class="fastNews-content box-shadow">
            <div class="flex-between">
              <div class="label-group">
                  <span class="label-hot" style="font-size: 14px;">热门标签: &nbsp;</span>
                  <el-button size="small" round v-for="(item, index) in label.hotLabels" :key="item.label" 
                  :type="index == label.curLabel ? 'primary' : ''" @click="switchLabel(index, item)">{{item.label}}</el-button>
              </div>
              <Search></Search>
            </div>
            <div class="now-time flexCloseTopNav" v-show="isShowFlexTime">{{ nowDate }}</div>
            <div class="now-time " ref="time">{{ nowDate }}</div>

            <TreeList :newsList="newsList"></TreeList>

            <el-button size="small" style="width: 100%" type="info" @click="showMore" :disabled="isLoading">点击加载更多...</el-button>
        </el-col>
        <el-col :span="8" class="fastNews-sidebar">
            <BaseBanner></BaseBanner>
            <BaseCard title="圈子">
                <CircleList></CircleList>
            </BaseCard>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import { dateFormat } from "@/common/util/index"
  export default {
    name: 'home',
    data () {
      return {
        indexs: [],
        newsList: [],
        isLoading: true,
        isShowFlexTime: false,
        curPageIndex: 1,
        label: {
            curLabel: 0,
            hotLabels: [{
                "label": "全部",
              },{
                "code": "000002.SZ",
                "label": "万科",
                "type": 1
              }, {
                "code": "002261.SZ",
                "label": "拓维信息",
                "type": 1
              }, {
                "code": 131,
                "plateId": 131,
                "label": "5G概念",
                "type": 3
              }, {
                "code": "000001.SZ",
                "label": "平安银行",
                "type": 1
              }
            ]
        }
      }
    },
    methods: {
      goDetailView(){
        this.$router.push({path: "digiccy"})
      },
      shareNews(oCurNews){
        console.log(oCurNews)
      },
      switchLabel(nIndex, sLabel){
        this.curPageIndex = 1
        this.label.curLabel = nIndex
        this.getNewsList(sLabel)
      },
      markKeyWord(sWord){
        if(sWord == "全部") return;
        this.newsList.forEach( v => {
          const {newsTitle, newsAbstract} = v
          v.newsTitle    = newsTitle.split(sWord).join(`<span style="color:#3393fc;">${ sWord }</span>`);
          v.newsAbstract = newsAbstract.split(sWord).join(`<span style="color:#3393fc;">${ sWord }</span>`);
			  })
      },
      showMore(){
        const {curLabel, hotLabels} = this.label
        this.curPageIndex += 1
        this.isLoading = true
        this.getNewsList(hotLabels[curLabel], true)
      },
      getNewsList(oParm = {}, bIsMore = false){
        let loadingInstance = this.$loading({ target: ".tree-list", text: "拼命加载中..." });

        let token = {"pageIndex": this.curPageIndex, "pageSize": 10,"filter": Object.assign({"byDate":"byDate"}, oParm)}
        this.$api.sentimentNewsList(token).then(({ Data: { rows } }) => {
          this.newsList = bIsMore ? this.newsList.concat(rows) :  rows
          this.markKeyWord(oParm.label)

          this.$nextTick(() => { 
            loadingInstance.close();
            this.isLoading = false
          });

        }).catch(e => {
           this.$nextTick(() => { 
            loadingInstance.close();
            this.isLoading = false
          });
          this.$Bus.$emit('dataError', {msg: e.message, callBack: () => {
            console.log("try again!")
            // this.getNewsList(oParm, bIsMore)
          }})
        })
      },
    },
    computed: {
      nowDate () {
        return dateFormat('今天MM月dd日 星期w')
      },
    },
    mounted() {
      this.$Bus.$on("flexTime", (toggle)=>{
        this.isShowFlexTime = toggle
      })
      this.$api.sentimentNewsList().then(data => {
        console.warn(data)
      })
      // this.getNewsList()
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  baseFs = 16px
  makerColor = #3393fc
  .flexCloseTopNav {
    position fixed
    top 60px
    left 105px
    width 705.39px
    height 19px
    background-color #fff
    margin 0 !important
    z-index 999
  }
  .container {
    > .token-indexs {
      padding: 20px;
      img {
        width: 25px;
        height: 25px;
      }
      >.el-col:not(:first-child) {
        border-left: 1px solid #edf0f5;
        padding-left: 30px;
      }
      .index-name {
        display: flex;
        align-items: center;
        color: black !important;
        font-size: baseFs - 1;
        span:hover{
          cursor pointer
          text-decoration underline
        }
      }
      .index-price {
        font-weight: bold;
        font-size: baseFs + 5;
      }
      .index-drop {
        font-size: baseFs - 2;
      }
    }
    > .token-fastNews {
        margin-top: 20px;
        margin-bottom: 100px;
        > .fastNews-content {
          padding: 20px 20px 70px 20px;
          > .now-time {
              color: makerColor;
              padding: 10px 20px;
              margin-top: 10px;
              margin-bottom: 10px;
              font-size: baseFs - 2;
              box-shadow: 0px 1px 3px rgba(26,26,26,0.2);
              font-weight: bold;
          }
        }
        > .fastNews-sidebar {
          padding-left: 30px
        }
    }
  }
  .el-dropdown-menu__item {
    .shareQrcode {
      width 100px
      height 100px
    }
    p {
      line-height 2
    }
  }

</style>
