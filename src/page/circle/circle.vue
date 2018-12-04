<template>
    <div class="container">
      <el-row class="content">
        <el-col :span="16" class="main box-shadow" style="padding-top: 0">
        <el-menu  :default-active="activeIndex" 
                  mode="horizontal" 
                  @select="handleSelect"
                  class="nav-menu" 
                  text-color="#000">
        <el-menu-item v-for="item in navlist" :key="item" :index="item">{{ item }}</el-menu-item>
        </el-menu>
        <ul class="circle-list">
          <li v-for="item in 5" :key="item">
              <div class="user-info">
                <img src="../../assets/firend.png" alt="" width="48px" height="48px" class="user-avater">
                <div class="user-message">
                    <p class="font-bold">圈友-01</p>
                    <p class="more">6个小时前</p>
                </div>
              </div>
              <div class="circle-item">
                <div class="item-content flex-between">
                  <img src="../../assets/k.png" width="205px" height="128px" style="margin-right: 10px" class="test">
                  <div>
                      <h3>区块链的中国路</h3>
                      <p>区块链脱胎于比特币，而比特币是目前最著名的数字货币系统，它具有天然的金融领域属性，
                        所以经过比特币系统验证的区块链技术无疑在银行保险以及互联网金融领域有着天然的基因。</p>
                  </div>
                </div>
                <p class="item-related">
                  <span><i class="el-icon-all-weibiaoti-"></i> 评论(50)</span>
                  <span><i class="el-icon-all-zan"></i> 赞(40)</span>
                  <span><i class="el-icon-star-off"></i> 收藏</span>
                </p>
              </div>
          </li>
           <el-button size="small" style="width: 100%; margin-top:20px" type="info">点击加载更多...</el-button>
        </ul>
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
  import AllTalkword from '@/components/talks/AllTalkword'
  import HotTalent from '@/components/HotTalent'
  export default {
    name: 'circle',
    components:{
        "list-wordcloud": AllTalkword,
        "list-HotTalents": HotTalent
    },
    data () {
      return {
         activeIndex: "推荐",
         navlist: ["推荐", "热榜","干货","糖果"]
      }
    },
    methods: {
      handleSelect(tab, event) {
        console.log(tab, event);
      },
    },
    mounted() {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.main {
  > .el-menu--horizontal > .el-menu-item {
      padding: 0;
      margin-right 20px 
      height: 40px;
      line-height: 40px;
    }
  > .circle-list {
   
    > li {
      margin-top 20px
      padding-bottom 20px
      border-bottom 1px solid #edf0f5
      > .circle-item > .item-content {
        margin-top 18px
        margin-bottom 10px
        h3 {
          margin-top 5px
          margin-bottom 5px
        }
      }
    }
  }
}

.test {
  min-height 128px
  min-width 205px
}

</style>
