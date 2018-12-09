<template>
 <div class="container">
     <div class="top-hotMsg box-shadow">
        <div class="marquee" onmouseover="this.stop()" onmouseout="this.start()" style="font-size: 15px">
            <p><span>【热门】</span> 智子社区数据显示，24小时dash资金净流入1.78亿美元，较昨日减少1101.57万美元，降幅为5.84%，在资金净流入前十中排名第一。</p>
            <p><span>【资金】</span> 今日20:00:32，EOS发生大额转账，binanc开头的地址向heztan开头的地址转入110766.69个EOS，价值约26.47万美元，</p>
            <p><span>【提示】</span>智子社区里任何用户或者嘉宾的发言，都有其特定立场，投资决策需要建立在独立思考之上</p>
        </div>
     </div>
     <div class="k-chars box-shadow">
         <div class="coin-name flex-center">
             <img src="../../assets/BTC.png" alt="" srcset="" width="30px" height="30px">
             <span class="coin-call font-20">BTC 比特币</span>
             <span class="font-14 color-gray">Bitcoin</span>
             <el-button type="primary" size="small" class="addSele">加自选</el-button>
         </div>
         <div class="coin-now">
            <p><b class="font-22 color-red">$3414</b> <span class="coin-applies font-12">-8.28%</span></p>
            <p class="font-14 color-gray">≈￥23489≈1.00000000 BTC</p>
         </div>
          <div style="width: 100%;height: 610px;background: transparent;padding: 0 !important;">
        <iframe id="tradingview_696e8" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_696e8&amp;symbol=BITFINEX%3ABTCUSD&amp;interval=60&amp;hidesidetoolbar=0&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=MACD%40tv-basicstudies%1FMASimple%40tv-basicstudies&amp;theme=Light&amp;style=1&amp;timezone=Asia%2FShanghai&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=zh_CN&amp;utm_source=www.zhiziclub.com&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=BITFINEX%3ABTCUSD" 
        style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;" 
        frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen=""></iframe>
    </div>
     </div>
  <div class="coin-baseInfo box-shadow">
      <h4>基本信息</h4>
      <el-row class="info-list font-14">
          <el-col :span="8" v-for="(item, index) in 3" :key="index">
              <p>流通市值</p>
              <p class="coin-price font-18">￥4615.92</p>
              <p>≈$670.28亿</p>
              <p>≈1740.94万 BTC</p>
              <div class="coin-progress">
                  <p class="font-14">占全球总市值20%</p>
                  <el-progress :text-inside="true" :stroke-width="18" :percentage="70" :show-text="false"></el-progress>
              </div>
          </el-col>
      </el-row>
      <p class="coin-abstract font-14">
比特币（bitcoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的p2p网络。
比特币是一种p2p形式的数字货币。点对点的传输意味着一个去中心化的支付系统。 与大多数货币不同，比特币不依靠特定货币机构发行，
它依据特定算法，通过大量的计算产生，比特币经济使用整个p2p网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，
并使用密码学的设计来确保货币流通各个环节安全性。p2p的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。
基于密码学的设计可以使比特币只能被真实的拥有者转移或支付。这同样确保了货币所有权与流通交易的匿名性。比特币与其他虚拟货币最大的不同，
是其总数量非常有限，具有极强的稀缺性。该货币系统曾在4年内只有不超过1050万个，之后的总数量将被永久限制在2100万个。  
      </p>
  </div>
  <el-row class="content">
    <el-col :span="16" class="main box-shadow">
        <div class="main-header">
            <b class="font-14">相关报道</b>
            <div>
                <el-button type="info" plain size="mini" v-for="(item, index) in 4" :key="index">事件</el-button>
            </div>
        </div>
        <ul class="relatedReport">
            <li class="report-item" v-for="(item, index) in 4" :key="index">
                <el-button type="primary" plain size="mini" class="that-label">事件</el-button>
                <h4>BTC发生2000枚大额转账</h4>
                <p>2018-12-06 14:26</p>
                <p>今日14:26:46，BTC出现大额转账，1NDyJt开头的地址向34xp4v开头的地址转入2000个BTC，价值约770.80万美元，
                    交易哈希值为d4b33e2558ec43437df3c6a952d8ab03b9f9f0decbddf124d06a6d68bfac317d。</p>
                <p>转账时价格：$3854</p>
            </li>
        </ul>
        <el-button size="small" style="width: 100%" type="info" @click="showMore" :disabled="isLoading">点击加载更多...</el-button>
    </el-col>
    <el-col :span="8" class="sidebar">
        <BaseCard title="知识图谱" isFirst>
            <div class="image-box">
                <span class="image-tip font-14">点击查看大图</span>
                <img id="image" src="../../assets/view.jpg" alt="Picture" style="width: 100%;">
            </div>
        </BaseCard>
        <BaseCard :titleArray='["涨幅榜(24h)", "跌幅榜(24h)"]' isFirst>
            <HotCoinsList></HotCoinsList>
        </BaseCard>  
    </el-col>
  </el-row>
 </div>
</template>

<script>
require('@/common/util/viewer.min.js')
export default {
 components:{},
 props:{},
 data(){
   return {
       isLoading: false
   }
 },
 watch:{},
 computed:{},
 methods:{
     showMore(){

     },
     startMove(){
        const box = document.querySelector(".marquee")
        let [count, timeId, isStop] = [0, null, false]
        box.stop = () => {
            isStop = true
            clearTimeout(timeId)
        }
        box.start = () => {
            isStop = false
            setTimeout(rollTitle, 1500)
        }
        box.start()
        function rollTitle() {
            clearTimeout(timeId)
            if(isStop) return;
            if(count == box.children.length - 1){
                box.style = null
                count = 0;
                timeId = setTimeout(rollTitle, 2500)
                return;
            }
            ++count
            box.style.top = (-30 * count) + "px"
            timeId = setTimeout(rollTitle, 2500)
        }
     }
 },
 created(){},
 mounted(){
    new Viewer(document.getElementById('image'), {
        url: 'data-original'
    });
    this.startMove()
 }
}
</script>
<style lang="stylus" scoped>
@import '../../common/util/viewer.min.css';
.container
  .top-hotMsg
    height: 35px;
    overflow: hidden;
    padding: 5px;
    padding-left: 15px;
    position: relative;
    margin-bottom 20px
    .marquee
      transition: all 1.5s ease-in-out;
      position: absolute;
      top: 5px;
      left: 15px;
      width: 100%;
      p
        line-height: 35px;
        span
         color #f00
  .k-chars
    padding 30px 15px
    .coin-name
      .coin-call
        margin-left 10px
        margin-right 10px
      .addSele
        margin-left 100px
    .coin-now
      margin-top 25px
      margin-bottom 20px
      .coin-applies
        background-color #f00
        color white
        padding 3px 8px
        border-radius 5px
        margin-left 10px
  .coin-baseInfo
    padding 15px
    margin-top 30px
    margin-bottom 30px
    h4
      padding-bottom 10px
      border-bottom 1px solid #edf0f5
    .info-list
      margin-top 20px
      margin-bottom 20px
      .el-col
        padding-right 100px
        .coin-price
          line-height 2
          font-weight bold
        > p:not(.coin-price)
          color #99999c
          line-height 1.8
        .coin-progress
          margin-top 8px
          > p 
            line-height 1.5
    .coin-abstract
      line-height 1.6
      color: #33353c
  .relatedReport
    .report-item
      padding-top 10px
      margin-top 10px
      border-top 1px solid #edf0f5
      position relative
      padding-left 70px
      .that-label
        position absolute
        left 0
      p
        font-size 14px
        line-height 2
        color #333
  .image-box
    width: 100%
    height: 180px
    overflow: hidden
    position relative
    .image-tip
      position absolute
      top 0
      left 50%
      top 70px
      margin-left -65px
      width 130px
      height 35px
      line-height 35px
      text-align center
      color white
      border-radius 35px
      cursor pointer
      background-color rgba(0,0,0,0.5)
    // &:after
    //     content ""
    //     width 100%
    //     height 180px
    //     background-color rgba(0,0,0,0.2)
    //     position absolute
    //     top 0
    //     left 0
</style>