<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
    <Login></Login>
    <Register></Register>
    <ForgotPasswd></ForgotPasswd>
    <BackTop></BackTop>
    <Copyright></Copyright>
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
