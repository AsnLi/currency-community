<template>
  <div class="center_mainBox content">
    <ul class="article_list">
      <li>9999</li>
    </ul>
    <div class="sidebar">
        <div class="banner">9</div>
        <div class="more">8</div>
        <!-- <ajaxtest></ajaxtest> -->
    </div>
  </div>
</template>

<script>
  import ajaxtest from '@/page/fastnews/ajaxtest.vue'
  export default {
    name: 'fastnews',
    data () {
      return {
        msg: 'fastnews'
      }
    },
    components: {
      ajaxtest: ajaxtest
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .content {
    display: flex;
    flex-direction: row;
    .article_list {
      background-color: white;
      border-radius: 2px;
      width: 70%;
      box-shadow: 0px 0px 3px rgba(26,26,26,0.1);
      padding: 10px 20px;
    }
    .sidebar {
      margin-left: 3%;
      width: 27%;
      > div {
        background-color: white;
        border-radius: 2px;
        box-shadow: 0px 0px 3px rgba(26,26,26,0.1);
      }
      > div:first-child {
        margin-bottom: 10px;
      }
    }
  }
</style>
