<template>
 <div class="container box-shadow">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">赞我的</el-menu-item>
        <el-menu-item index="2">评论我的</el-menu-item>
        <el-menu-item index="3">系统消息</el-menu-item>
        <el-menu-item index="4">预警消息</el-menu-item>
    </el-menu>
    <div>
        <div class="user-info">
            <img src="../../assets/firend.png" alt="" class="user-avater">
            <div class="user-message">
                <p>圈友-01</p>
                <p class="more">6个小时前</p>
            </div>
        </div>
        <p>欢迎来到智子社区！要记得多多发表精彩的帖子哦！</p>
    </div>
 </div>
</template>

<script>
export default {
 components:{},
 props:{},
 data(){
   return {
       activeIndex: "1"
   }
 },
 watch:{},
 computed:{},
 methods:{
     handleSelect(){

     }
 },
 created(){},
 mounted(){}
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>