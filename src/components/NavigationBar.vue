<template>
  <el-header class="top-fixedNav" ref="topNav">
    <el-row>
      <el-col :span="12">
        <img src="../assets/logo.png" alt="Logo" srcset="">
        <el-menu  :default-active="activeIndex" 
                  mode="horizontal" 
                  @select="handleSelect"
                  class="nav-menu" 
                  text-color="#000"
                  router>
          <el-menu-item v-for="item in navlist" :key="item.path" v-if="!item.submenu" :index="item.path">
            {{item.title}}
          </el-menu-item>
          <el-submenu index="/quotes_all">
            <template slot="title">工具</template>
            <el-menu-item index="5-1">知识图谱查询</el-menu-item>
            <el-menu-item index="5-2">白皮书查重</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="11" :offset="1">
          <Search></Search>
          <div class="user_login">
              <span>没有账号? 立即注册</span>
              <el-button round size="medium" @click="toggleLoginModal">登录</el-button>
          </div>
      </el-col>
  </el-row>
  </el-header>
</template>

<script>
import { mapState, mapActions} from 'vuex';
export default {
  name: "navigationBar",
  data() {
    return {
      activeIndex: location.pathname,
      navlist: [
        {
          path: "/home",
          title: "快讯"
        },
        {
          path: "/news",
          title: "深度"
        },
        {
          path: "/incident",
          title: "事件"
        },
        {
          path: "/circle",
          title: "圈子"
        },
        {
          path: "/quotes",
          title: "行情",
        },
        {
          path: "/tool",
          title: "工具",
          submenu: ["选项1", "选项2"]
        }
      ],
    };
  },
  methods: {
     ...mapActions([
      'toggleLoginModal',
    ]),
    handleSelect(tab, event) {
      console.log(tab, event);
    },
    insertHoldBlock(){
      const elm = this.$refs.topNav.$el
      const holdBlock = document.createElement("header")
      holdBlock.setAttribute("style", "height: 60px")
      holdBlock.setAttribute("id", "holdBlock")
      elm.parentElement.insertBefore(holdBlock, elm)
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
      .nav-menu{
        font-weight: bold;
      }
   }
</style>
