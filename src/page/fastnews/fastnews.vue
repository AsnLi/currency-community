<template>
    <div class="center-box">
      <el-row class="token-indexs box-shadow">
        <el-col :span="4" v-for="index in 6" :key="index">
          <p class="index-name">
            <img src="../../assets/BTC.png" alt="" srcset="">
            <span>&nbsp; BTC 比特币</span>
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
                  <el-button size="small" v-for="(item, index) in label.hotLabels" :key="index" 
                  :type="index == label.curLabel ? 'primary' : ''" round @click="switchLabel(index, item)">{{item}}</el-button>
              </div>
              <Search></Search>
            </div>
            <div class="now-time flexCloseTopNav" v-show="isShowFlexTime">{{ nowDate }}</div>
            <div class="now-time " ref="time">{{ nowDate }}</div>

            <p style="text-align: center" v-if="loading">
                <i class="el-icon-loading"></i>
            </p>

            <ul class="content-list">
                <li v-for="news in newsList" :key="news.id">
                  <span class="news-time">{{ some(news.infopubldate) }}</span>
                  <h3>{{ news.newsTitle }}</h3>
                  <p class="news-content">{{ news.newsAbstract }}</p>
                  <p class="news-share">
                    <el-dropdown placement="top">
                      <span class="el-dropdown-link" @mouseover="shareNews(news)">
                        <i class="el-icon-share"></i> 分享
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <img src="../../assets/qcode.png" alt="" srcset="" class="shareQrcode">
                            <div>
                              <p>打开微信扫一扫</p>
                              <p>打开网页后点击屏幕</p>
                              <p>右上角"分享"按钮</p>
                            </div>
                        </el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </p>
                </li>
            </ul>
            <el-button size="small" style="width: 100%" type="info" @click="showMore">点击加载更多...</el-button>
        </el-col>
        <el-col :span="8" class="fastNews-sidebar">
            <div class="banner">
              <el-carousel style="height:300px;">
                <el-carousel-item v-for="item in 4" :key="item"  style="height:300px;">
                  <img src="../../assets/share.jpg" alt="" srcset="" width="100%" height="300px">
                  <!-- <p class="banner-tip">万科企业境外增发股份材料已获证监会接收</p> -->
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="fastNews-circle box-shadow">
                  <div class="circle-header flex-between">
                    <span style="font-weight: bold;">圈子</span>
                    <span style="font-size: 14px; color: #99999c;">更多</span>
                  </div>
                  <ul class="circle-hots">
                    <li v-for="index in 6" :key="index">
                      <div class="circle-user">
                        <img src="../../assets/firend.png" alt="">
                        <div>
                            <p style="font-weight: bold;">圈友-01</p>
                            <p>6个小时前</p>
                        </div>
                      </div>
                      <h4>阿里巴巴农场整合区块链溯源等技术 提高农事效率</h4>
                      <p class="circle-content">据IMEOS消息，在 EOS 全球行深圳站中，EOSToken 曾子涛谈到了 EOS 目前用户</p>
                    </li>
                  </ul>
            </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import { dateFormat } from "@/common/util/index"
  export default {
    name: 'fastnews',
    data () {
      return {
        indexs: [],
        newsList: [],
        some: Function,
        isShowFlexTime: false,
        loading: true,
        label: {
            curLabel: 0,
            hotLabels: ["全部", "ETC","监管","ETH","交易所"]
        }
      }
    },
    methods: {
      shareNews(oCurNews){
        console.log(oCurNews)
      },
      switchLabel(nIndex, sLabel){
        this.label.curLabel = nIndex
        console.log(sLabel)
      },
      showMore(){
        console.log("more")
      },
      someFn(str){
        return str.substring(str.indexOf(" ") + 1, str.lastIndexOf(":"))
      },
    },
    computed: {
      nowDate () {
        return dateFormat('今天MM月dd日 星期w')
      },
    },
    mounted() {
      this.some = this.someFn

      this.$Bus.$on("flexTime", (toggle)=>{
        this.isShowFlexTime = toggle
      })
      // this.$Bus.$emit("showLoading")
      let obj = {"pageIndex":1,"pageSize":10,"filter":{"key":"万科A(000002.SZ)","byDate":"byDate","type":1,"code":"000002.SZ"}}
      this.$api.sentimentNewsList(obj).then(({ Data: { rows } }) => {
        this.newsList = rows
        this.loading = false
        // this.$Bus.$emit("hiddenLoading")
      })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  baseFs = 16px
  makerColor = #3393fc
  .el-icon-loading {
    color #3393fc
    font-size 3em
    margin 0 auto
  }
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
  .center-box {
    width: 90%;
    min-width: 1170px;
    margin-left: auto;
    margin-right: auto;
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
          > .content-list {
            padding-top: 10px;
            padding-left: 15px;
            margin-left: 15px;
            margin-bottom: 25px;
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
              > .news-share {
                text-align: right
                margin-top 10px
                .el-dropdown-link {
                  cursor pointer
                  margin-right 20px
                  color makerColor
                }
              }
            }
          }
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
          > .banner {
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
          > .fastNews-circle {
            margin-top: 20px;
            padding 15px 15px 30px 15px;
            > .circle-hots {
                font-size baseFs - 2
              > li {
                margin-top 20px
                > .circle-user {
                  display flex
                  flex-direction row
                  align-items center
                  > img {
                    width 45px
                    height 45px 
                    border-radius 50%
                    margin-right 10px
                  }
                }
                > .circle-content {
                  padding-top 10px
                  padding-bottom  20px
                }
              }
              > li:not(:last-child) {
                  border-bottom: 1px solid #edf0f5;
              }
            }
          }
        }
    }
  }
  .el-dropdown-menu__item {
    display flex
    flex-direction row
    .shareQrcode {
      width 100px
      height 100px
    }
    p {
      line-height 2
    }
  }

</style>
