  <template>
  <div class="wrap">
    <NavigationBar></NavigationBar>
    <el-main>
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
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
    name: 'Home',
    data () {
      return {
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .el-main {
    width: 100%;
    background-color: #f5f6f7;
  }
</style>
