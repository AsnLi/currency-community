<template>
 <div class="wrapper">
     
     <el-form label-position="right" label-width="80px" :model="formLabelAlign">
         <el-form-item>
            <h3>使用手机号码183****5482进行验证</h3>
        </el-form-item>
        <el-form-item label="验证码" required >
            <el-input v-model="formLabelAlign.smaCode" placeholder="输入四位数验证码"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
            <el-input v-model="formLabelAlign.newPasswd" placeholder="输入8~16位密码"></el-input>
        </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item>
    </el-form>
 </div>
</template>

<script>
export default {
 components:{},
 props:{},
 data(){
   return {
       formLabelAlign: {
        smaCode: '',
        newPasswd: ""
      }
   }
 },
 watch:{},
 computed:{},
 methods:{
     submitForm(){

     }
 },
 created(){},
 mounted(){}
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>