<template>
    <el-form label-position="right" label-width="80px" :model="formLabelAlign" class="user-base">
        <el-form-item label="昵称" required >
            <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="居住地">
            <el-input v-model="formLabelAlign.adress"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-select v-model="formLabelAlign.sex" placeholder="">
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="简介">
            <el-input type="textarea" :rows="4" v-model="formLabelAlign.abstract"></el-input>
        </el-form-item>
        <el-form-item label="上传头像">
            <img src="../../../assets/firend.png">
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
 components:{},
 props:{},
 data(){
   return {
       formLabelAlign: {
        name: '',
        adress: "",
        emall: "",
        sex: "",
        abstract: ''
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
.user-base
  width 70%
  margin-left auto 
  margin-right auto
</style>