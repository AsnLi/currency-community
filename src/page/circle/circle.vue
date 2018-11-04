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
                <img src="../../assets/firend.png" alt="" width="48px" height="48px">
                <div>
                    <p class="font-bold">圈友-01</p>
                    <p class="font-12">6个小时前</p>
                </div>
              </div>
              <div class="circle-item">
                <div class="flex-between">
                  <img src="../../assets/k.png" width="205px" height="128px" alt="">
                  <div>
                      <h3>区块链的中国路</h3>
                      <p>区块链脱胎于比特币，而比特币是目前最著名的数字货币系统，它具有天然的金融领域属性，
                        所以经过比特币系统验证的区块链技术无疑在银行保险以及互联网金融领域有着天然的基因。</p>
                  </div>
                </div>
                  <p>
                    <span><i class="el-icon-edit"></i>评论(50)</span>
                    <span><i class="el-icon-edit"></i>赞(40)</span>
                    <span><i class="el-icon-edit"></i>收藏</span>
                  </p>
              </div>
          </li>
        </ul>
        </el-col>
        <el-col :span="8" class="sidebar">
          <div class="card" style="margin-top: 0">
            <div class="card-header">
              <span class="font-bold">达人榜单</span>
              <span class="card-more">换一换</span>
            </div>
            <div class="card-content">
                <ul>
                  <li class="flex-between" style="align-items:center">
                    <div class="user-info">
                      <img src="../../assets/firend.png" alt="" width="48px" height="48px">
                      <div>
                          <p class="font-bold">圈友-01</p>
                          <p class="font-12">6个小时前</p>
                      </div>
                    </div>
                    <el-button icon="el-icon-plus font-bold" size="small"></el-button>
                  </li>
                </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <span class="font-bold">大家都在谈</span>
            </div>
            <div class="card-content">
               9999999999999999999
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'fourstep',
    data () {
      return {
         activeIndex: "推荐",
         navlist: ["推荐", "热榜","干货","糖果"],
      }
    },
    methods: {
      handleSelect(tab, event) {
        console.log(tab, event);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.el-menu--horizontal > .el-menu-item {
  padding: 0;
  margin-right 20px 
  height: 40px;
  line-height: 40px;
}
</style>
