  <template>
  <div class="wrap">
    <NavigationBar></NavigationBar>
    <el-main>
        <router-view></router-view>
    </el-main>
    <Copyright></Copyright>
    <Login></Login>
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
</style>
