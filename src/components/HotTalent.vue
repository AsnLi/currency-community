<template>
 <div class="wrapper">
     <ul>
        <li class="flex-between" style="align-items:center; margin-bottom: 20px" v-for="item in 3" :key="item">
            <div class="user-info">
                <img src="../assets/firend.png" alt="" width="48px" height="48px" class="user-avater">
                <div class="user-message">
                    <p class="font-bold">圈友-01</p>
                    <p class="more">6个小时前</p>
                </div>
            </div>
            <el-button icon="el-icon-plus font-bold" size="small"></el-button>
        </li>
    </ul>
 </div>
</template>

<script>
export default {
 name: "hotTalent",
 components:{},
 props:{},
 data(){
   return {
   }
 },
 watch:{},
 computed:{},
 methods:{},
 created(){},
 mounted(){}
}
</script>
<style lang="stylus" scoped>
@import '../styles/public';
.wrapper{}
</style>