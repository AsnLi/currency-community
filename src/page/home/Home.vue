<template>
  <div class="wrap">
    <header>
      <div class="center_mainBox contariner">
        <img src="@/assets/logo.png" alt="Logo" srcset="">
        <NavigationBar></NavigationBar>
        <Search></Search>
        <div class="user_login">
          <label>没有账号, 立即注册</label>
          <button class="login_btn">登录</button>
        </div>
      </div>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>
      <div class="center_mainBox">版权信息XXXXXXXXXXXXXXXXXXXXXX
      </div> 
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
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
  header {
    background-color: white;
    box-shadow: 0px 2px 2px rgba(26,26,26,0.1);
    .contariner {
      display: flex;
      flex-direction: row;
      align-items: center;
       > .user_login {
      margin-left: 30px;
      > .login_btn {
        padding:  5px 15px;
        border: 1px solid black; 
        border-radius: 25px;
        background-color: white;
        outline: none;
      } 
    }
    }
  }
  main {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .wrap {
    // width: 80%;
    // margin-left: auto;w
    // margin-right: auto;
    background-color: #f5f6f7;
  }
  footer {
    background-color: #2f3236;
    color: #aeb4ba;
  }
</style>
