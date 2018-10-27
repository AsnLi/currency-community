<template>
  <el-header>
    <el-row>
      <el-col :span="11">
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
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="12" :offset="1">
          <Search></Search>
          <div class="user_login">
              <span>没有账号? 立即注册</span>
              <el-button round size="medium" @click="login()">登录</el-button>
          </div>
      </el-col>
  </el-row>
  </el-header>
</template>

<script>
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import { mapState, mapActions} from 'vuex';

export default {
  name: "navigationBar",
  data() {
    return {
      activeIndex: "/fastnews",
      navlist: [
        {
          path: "/fastnews",
          title: "快讯"
        },
        {
          path: "/news",
          title: "深度"
        },
        {
          path: "/threestep",
          title: "事件"
        },
        {
          path: "/fourstep",
          title: "圈子"
        },
        {
          path: "/quotes_all",
          title: "行情",
        },
        {
          path: "/tool",
          title: "工具",
          submenu: ["选项1", "选项2"]
        }
      ],
      info: {}
    };
  },
  methods: {
     ...mapActions([
      'toggleLoginModal'
    ]),
    handleSelect(tab, event) {
      console.log(tab, event);
    },
    login (){
      this.$store.dispatch("toggleLoginModal")
    },
  },
  mounted () {
    let obj = {"pageIndex":1,"pageSize":10,"filter":{"key":"万科A(000002.SZ)","byDate":"byDate","type":1,"code":"000002.SZ"}}
    this.$api.sentimentNewsList(obj).then(res => {
      console.log(res)
    })
    this.$Bus.$on('refmasterlist', function () {
        console.log("from other comm")
    });
  },
  computed: {...mapState(['user'])}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
   header {
      box-shadow: 0px 2px 2px rgba(26,26,26,0.1);
      width: 100%;
      padding: 0;
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
