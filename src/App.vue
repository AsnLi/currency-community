<template>
  <div id="app">
    <app-navigationBar></app-navigationBar>
    <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
    <user-login></user-login>
    <user-register></user-register>
    <user-forgotPasswd></user-forgotPasswd>
    <user-report></user-report>
    <app-copyright></app-copyright>
    <the-backTop></the-BackTop>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-main {
    width: 100%;
    background-color: #f5f6f7;
    padding: 0 !important;
}
</style>
