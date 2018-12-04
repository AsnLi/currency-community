<template>
    <div class="container">
    <el-row class="content">
      <el-col :span="16" class="main box-shadow">
        <div class="user-info">
            <img src="../../assets/firend.png" alt="" width="48px" height="48px" class="user-avater">
            <div class="user-message">
                <p class="font-bold">圈友-01</p>
                <p class="more">6个小时前</p>
            </div>
        </div>
        <h2 class="article-title">星月解惑：概率和赔率，很多陷阱都是在扮演机会</h2>
        <div class="article-content">
            <p>人生总是在做选择，也总是在等待结果，道路不可能一帆风顺，总会有坎坎坷坷，活出本色是每个人都追求的目标。投资市场也是如此，
                不可能顺风顺水，而暴利都是每个人追求的梦想，但路途总会有各种阻挠和陷阱。走惯了单边，总要被震荡洗盘扼杀，这是市场的规律。
                大家周六好，我是依旧活跃在市场一线的星月！</p>
        </div>
        <div class="article-labels">
            <el-button type="info" round size="small">比特币</el-button>
        </div>
        <div class="article-related flex-between">
            <div class="article-status">
                <span>0评论 · 3赞</span>
                <span @click="toggleReportModal">举报</span>
            </div>
            <div class="article-like">
                <span><i class="el-icon-all-zan"></i> 赞(40)</span>
                <span><i class="el-icon-star-off"></i> 收藏</span>
                <el-dropdown placement="top">
                    <span class="el-dropdown-link" @mouseover="shareNews()">
                        <i class="el-icon-share"></i> 分享
                    </span>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <img src="../../assets/qcode.png" width="100px" height="100px">
                        <div>
                            <p>打开微信扫一扫</p>
                            <p>打开网页后点击屏幕</p>
                            <p>右上角"分享"按钮</p>
                        </div>
                    </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="article-input clearfix">
            <el-input
                type="textarea"
                placeholder="请输入内容"
                rows = "1"
                v-model="textarea">
            </el-input>
            <el-button type="primary" size="small" style="float: right; margin-top: 10px">评论</el-button>
        </div>
        <div class="article-comments">
            <div class="comments-header">全部评论(1)</div>
            <ul class="article-comments-list">
                <li class="article-comments-item" v-for="(item, index) in 3" :key="index">
                    <div class="comments-item-userInfo flex-between">
                        <div style="position:relative">
                             <img src="../../assets/firend.png" alt="" width="40px" height="40px" 
                             style="position:absolute; left: -58px; top: -10px; border-radius: 50%">
                            <b>小神仙</b>
                        </div>
                        <span>2018-11-26 17:43:46</span>
                    </div>
                    <div class="comments-item-content">给力</div>
                    <div class="comments-item-related">
                        <span><i class="el-icon-all-zan"></i> 赞(40)</span>
                        <span @click="showReplyMedal(index)"><i class="el-icon-star-off"></i> 回复</span>
                        <span @click="toggleReportModal">举报</span>
                    </div>
                    <div class="article-input clearfix" v-show="index == curReply">
                        <el-input
                            type="textarea"
                            placeholder="请输入内容"
                            rows = "1"
                            v-model="textarea">
                        </el-input>

                        <el-button type="primary" size="small" style="float: right; margin-top: 10px">回复</el-button>   
                    </div>
                </li>
            </ul>
        </div>
      </el-col>
      <el-col :span="8" class="sidebar">
        <BaseCard title="达人榜单" more="换一换" isFirst>
            <list-HotTalents></list-HotTalents>
        </BaseCard>
        <BaseCard title="大家都在谈">
            <list-wordcloud></list-wordcloud>
        </BaseCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AllTalkword from '@/components/talks/AllTalkword'
import HotTalent from '@/components/HotTalent'
export default {
    name: "newsDetail",
    components:{
        "list-wordcloud": AllTalkword,
        "list-HotTalents": HotTalent
    },
    data(){
        return {
            userId: "",
            textarea: "",
            curReply: 999
        }
    },
    computed: {
      ...mapState(['user'])
    },
    methods:{
        ...mapActions([
            'toggleReportModal'
        ]),
        shareNews(){
            console.log(1111)
        },
        showReplyMedal(oCurIndex){
            let curReply = this.curReply

            if(curReply == oCurIndex) return this.curReply = 999;
            
            this.curReply = oCurIndex
        }
    },
    mounted() {
        this.userId = this.$route.query.userId
    },
}
</script>

<style lang="stylus" scoped>
    .main
      min-height 800px
      .article-title
        margin-top 25px
        margin-bottom 15px
      .article-labels
        margin-top 45px
        margin-bottom 35px
      .article-related
        font-size 14px
        span 
          cursor pointer
      .article-input
        margin-top 25px
        margin-bottom 15px
        padding 15px 8px
        background-color #f9f9f9
      .article-comments
        .comments-header
          font-size 15px
        &-item 
          padding-top 15px
          padding-left 70px
          margin-top 10px
          border-top 1px solid #f9f9f9
          .comments-item-content
            margin-top 15px
            margin-bottom 15px
          .comments-item-related
            span 
              cursor pointer
</style>

