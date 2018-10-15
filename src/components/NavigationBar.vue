<template>
  <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs> -->
  <nav>
    <ul>
        <li v-for="item in headerlist" :key="item.path">
            <router-link :to="{ path: item.path }" 
                         tag="span" 
                         exact-active-class = "_active">{{item.title}}</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
  /*查找为什么单个组件需要引入router，router-link才能生效*/
  import Vue from 'vue'
  import Router from 'vue-router'
  Vue.use(Router)
  export default {
    name: 'navigationBar',
    data(){
      return {
        activeName: 'first',
        headerlist: [{
            path: '/fastnews',
            title: '快讯'
          },
          {
            path: '/news',
            title: '深度'
          },
          {
            path: '/threestep',
            title: '事件'
          },
          {
            path: '/fourstep',
            title: '圈子'
          },{
            path: '/quotes_all',
            title: '行情'
          }]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  nav > ul {
    margin 0;
    padding 0;
    > li {
       display: inline-block;
    }
    ._active {
      color: rgb(52, 143, 249);
      border-bottom: 1px solid rgb(52, 143, 249);
    }
  }

</style>
