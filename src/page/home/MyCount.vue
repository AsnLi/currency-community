<template>
<div class="container">
    <div class="user-pane box-shadow flex-between">
        <div class="user-base clearfix">
            <img src="../../assets/firend.png" width="90px" height="90px" class="fl">
            <div class="user-some fl">
                <p class="user-name">
                    <b class="font-22">Asn</b> 
                    <span class="font-14" style="margin-left: 15px">邀请码: XGEO</span>
                </p>
                <p class="user-more font-16">
                    <span><b>0 </b>关注</span>
                    <span><b>0 </b>粉丝</span>
                    <span><b>0 </b>金币</span>
                    <span><b>0 </b>SALT</span>
                    <span>邀请好友</span>
                </p>
                <p class="user-abstract">他很懒，什么都没留下哦</p>
            </div>
        </div>
        <el-button type="primary" size="small" @click.native="goUpdateView">编辑资料</el-button>
    </div>
    <el-row class="content">
      <el-col :span="16" class="main box-shadow">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">帖子</el-menu-item>
            <el-menu-item index="2">我参与的</el-menu-item>
            <el-menu-item index="3">收藏</el-menu-item>
            <el-submenu index="4">
                <template slot="title">更多</template>
                <el-menu-item index="4-1">关注 0</el-menu-item>
                <el-menu-item index="4-2">粉丝 0</el-menu-item>
                <el-menu-item index="4-3">金币 0</el-menu-item>
                <el-menu-item index="4-3">SALT 0</el-menu-item>
            </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="8" class="sidebar">
        <BaseCard title="达人榜单" more="换一换" isFirst>
            <list-hotTalents></list-hotTalents>
        </BaseCard>
      </el-col>
    </el-row>
</div>
</template>

<script>
import HotTalent from '@/components/HotTalent'
export default {
    components:{
        "list-hotTalents": HotTalent
    },
    props:{},
    data(){
    return {
        activeIndex: '1'
    }
    },
    watch:{},
    computed:{},
    methods:{
        goUpdateView(){
            this.$router.push({path: "updatecount", query: {type: "data"}})
        },
        handleSelect(tab, event) {
            // console.log(tab, event);
        }
    },
    created(){},
    mounted(){}
}
</script>
<style lang="stylus" scoped>
.container
  .user-pane
    padding 15px
    margin-bottom 20px
    img
      border-radius 50%
    .user-some
      height 100%
      margin-left 20px
      display flex
      flex-direction column
      justify-content space-between
      p
        line-height 1
      .user-more
        span:not(:first-child)
          display inline-block
          margin-left 8px
          padding-left 8px
          border-left 1px solid #ccc
    .el-button
      height: 30px;
      padding: 0 50px;
.content 
  .el-menu--horizontal
    border-bottom none 
    .el-menu-item
      height: 40px;
      line-height: 40px;
    .el-submenu > .el-submenu__title
      height: 40px;
      line-height: 40px;
</style>