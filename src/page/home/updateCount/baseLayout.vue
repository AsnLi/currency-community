<template>
 <div class="container box-shadow">
    <el-row>
        <el-col :span="4">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @select="handleSelect">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">个人资料</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">修改密码</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">个性化设置</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="20">
            <div class="banner">Panel title</div>
            <base-info v-show="activeIndex == 1"></base-info>
            <base-passwd v-show="activeIndex == 2"></base-passwd>
        </el-col>
    </el-row>
 </div>
</template>

<script>
import baseInfo from '@/page/home/updateCount/updateBaseInfo'
import basePasswd from '@/page/home/updateCount/updatePasswd'
export default {
 components:{
     "base-info": baseInfo,
     "base-passwd": basePasswd
 },
 props:{},
 data(){
   return {
      activeIndex: "1",
   }
 },
 watch:{},
 computed:{},
 methods:{
     handleSelect(nTabIndex){
         this.activeIndex = nTabIndex
     }
 },
 created(){},
 mounted(){
     let { type } = this.$route.query
     this.activeIndex = type == "data" ? 1 : 2
 }
}
</script>
<style lang="stylus" scoped>
.container
  .banner
    padding 15px 20px
    margin-bottom 20px
    color: #fff;
    background-color: #337ab7   
</style>