<template>
  <el-header class="top-fixedNav" ref="topNav">
    <el-row>
      <el-col :span="12">
        <img src="../assets/logo.png" alt="Logo" srcset="">
        <el-menu  :default-active="activeIndex" 
                  mode="horizontal" 
                  class="nav-menu" 
                  text-color="#000"
                  router>
          <el-menu-item v-for="menuItem in navlist" 
                        :key="menuItem.path" 
                        v-if="!menuItem.submenu"
                        :index="menuItem.path">{{menuItem.title}}
          </el-menu-item>
          <el-submenu index="/quotes_all">
            <template slot="title">工具</template>
            <el-menu-item v-for="(menuChildItem, index) in navlist[5].submenu" 
                          :index="menuChildItem.path" 
                          :key="index">{{ menuChildItem.title}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="11" :offset="1">
          <div class="flex-center">
            <Search></Search>
            <div class="user-count flex-center">
                <i class="el-icon-bell" style="font-size: 22px; font-weight:bold" @click="goMsgRoute()"></i>
                <el-dropdown placement="bottom-start">
                  <span class="el-dropdown-link">
                    <div class="flex-center"> 
                      <img src="../assets/firend.png" width="35px" height="35px" class="user-avater">
                      <b>Asn</b>
                    </div>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="funcItem in userFuncList" :key="funcItem.title" 
                      @click.native="goViewRoute(funcItem)"> {{funcItem.title}}
                    </el-dropdown-item>
                    <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </div>
          </div>
          <el-button round size="medium" style="color: blue; border-color: blue;" @click="goPostView">发帖</el-button>
          <!-- <Search></Search>
          <div class="user_login">
              <span>没有账号? 立即注册</span>
              <el-button round size="medium" @click="toggleLoginModal">登录</el-button>
          </div> -->
      </el-col>
  </el-row>
  </el-header>
</template>

<script>
import { mapState, mapActions} from 'vuex';

const navlist = [{ path: "/home", title: "快讯" },
                { path: "/news", title: "深度" },
                { path: "/incident", title: "事件" },
                { path: "/circle", title: "圈子" },
                { path: "/quotes", title: "行情" },
                { path: "/tool", title: "工具", submenu: 
                  [{path: "/knowledgemap", title: "知识图谱查询"},{path: "/recheck", title: "白皮书查重"}]
                }];

const userFuncList = [{ path: "/mycount", title: "个人资料" },
                      { path: "/updatecount", type:"data", title: "编辑资料" },
                      { path: "/updatecount", type:"passwd",  title: "修改密码" }];

export default {
  name: "app-navigationBar",
  data() {
    return {
      activeIndex: location.pathname,
      navlist,
      userFuncList
    }
  },
  methods: {
     ...mapActions([
      'toggleLoginModal',
    ]),
    insertHoldBlock(){
      const elm = this.$refs.topNav.$el
      const holdBlock = document.createElement("header")
      holdBlock.setAttribute("style", "height: 60px")
      holdBlock.setAttribute("id", "holdBlock")
      elm.parentElement.insertBefore(holdBlock, elm)
    },
    goViewRoute(oParms){
      this.$router.push({ path: oParms.path, query: { type: oParms.type }})
    },
    goPostView(){
      this.$router.push({ path:"postcontent"})
    },
    goMsgRoute(){
      this.$router.push({ path:"message"})
    },
    logOut(){
      console.log("退出...")
    }
  },
  mounted () {
    setTimeout(()=> {
      if(this.app.activeItem){
        this.activeIndex = this.app.activeItem
      }
    }, 300)
    if(!document.getElementById("holdBlock")) this.insertHoldBlock()
  },
  computed: {...mapState(['user', 'app'])}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
   .top-fixedNav {
      box-shadow: 0px 2px 2px rgba(26,26,26,0.1);
      width: 100%;
      padding: 0;
      margin-bottom: 5px;
      position fixed
      top 0
      background-color #fff;
      z-index 999
      > div {
          width: 90%;
          min-width: 1170px;
          margin-left: auto;
          margin-right: auto;
      }
      .el-row, .el-col  {
        height: 100%;
      }
      .el-col {
          display flex;
          flex-direction: row;
          justify-content: space-between;
          align-items center;
          > .user_login > span {
            font-size: 13px;
            margin-right: 10px;
            font-weight: bold;
          }
      }
      .user-count{
        margin-left 25px
        .user-avater{
          border-radius: 50%
          margin-left 10px
          margin-right 5px
        }
      }
      .nav-menu{
        font-weight: bold;
      }
   }
</style>
