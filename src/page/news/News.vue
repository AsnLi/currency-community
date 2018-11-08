<template>
  <div class="container">
    <el-row class="content">
      <el-col :span="16" class="main">
        <ul class="article-list">
          <li class="box-shadow flex-between" v-for="item in 10" :key="item">
            <img src="../../assets/article.jpg" width="300px" height="187px" class="test">
            <div class="article-abstract" style="margin-left: 15px">
              <h3>V神：拿出不要慌，扩展性提升1000倍的以太坊2.0真的不那么遥远</h3>
              <p class="font-15 font-black ellipsis--l2" style="margin-top: 15px;">以太坊每年差不多都会在10月底到11月初举办devcon开发者研讨大会，貌似国内除了和以太坊有点关联的项目媒体有报道之外，关注的人不多。而这些工作将会使以太坊的扩展性提升1000倍，按现在14tps的状态，可以到14000tps。</p>
              <div class="article-footer font-gray">
                  <span>币世界&nbsp;&nbsp;7小时前</span>
                  <div class="fr">
                    <span><i class="el-icon-view"></i> 67</span>
                    <span><i class="el-icon-all-zan"></i> 55</span>
                  </div>
              </div>
            </div>
          </li>
          <el-button size="small" style="width: 100%" type="info">点击加载更多...</el-button>
        </ul>
      </el-col>
      <el-col :span="8" class="sidebar">
        <BaseBanner></BaseBanner>
        <BaseCard title="快讯" more="更多">
              <TreeList :newsList="newsList" isParentCard></TreeList>
        </BaseCard>
        <BaseCard :titleArray='["涨幅榜(24h)", "跌幅榜(24h)"]' more="更多">
             <HotCoinsList></HotCoinsList>
        </BaseCard>  
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'News',
    data () {
      return {
        newsList: []
      }
    },
    methods: {
      getNewsList(oParm = {}, bIsMore = false){
        let loadingInstance = this.$loading({ target: ".tree-list", text: "拼命加载中..." });
        let token = {"pageIndex": this.curPageIndex, "pageSize": 10,"filter": Object.assign({"byDate":"byDate"}, oParm)}
        this.$api.sentimentNewsList(token).then(({ Data: { rows } }) => {
          this.newsList = bIsMore ? this.newsList.concat(rows) :  rows
          this.$nextTick(() => { 
            loadingInstance.close();
            this.isLoading = false
          });
        })
      },
    },
    mounted() {
      this.getNewsList()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .main {
    padding 0 !important
    > .article-list {
      > li {
        padding 20px
        margin-bottom 20px
        .article-abstract {
            position relative
           > .article-footer {
              width 100%
              vertical-align middle
              position absolute
              bottom 0
           }
        }
      }
    }
  }
  .test {
    min-height 187px
    min-width 300px
  }
</style>
