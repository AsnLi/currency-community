<template>
 <div class="wrapper">
     <el-form :model="formLabelAlign">
          <el-form-item>
            <div class="addCover box-shadow">
                <span class="font-14 color-gray"><i class="el-icon-picture font-22"></i>添加封面</span>
            </div>
          </el-form-item>
          <el-form-item>
             <el-input v-model="formLabelAlign.input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <div id="editor">
                <p>This is the editor content.</p>
            </div>
          </el-form-item>
          <el-form-item>
            <span>话题:</span>
            <el-input v-model="formLabelAlign.input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
             <el-button  round>预览</el-button>
             <el-button type="primary" round>发布</el-button>
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
           input:""
       }
   }
 },
 watch:{},
 computed:{},
 methods:{},
 created(){},
 mounted(){
    CKEDITOR.replace('editor');
 }
}
</script>
<style lang="stylus" scoped>
.wrapper
  width 70%
  margin 20px auto
  .addCover
    height 30vh
</style>