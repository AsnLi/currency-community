<template>
 <el-dialog title="举报" :visible.sync="user.isShowReport" width="35%" :before-close="canceReport" class="wrapper">

  <h3>举报原因</h3>
  <el-checkbox-group 
    v-model="checkedReasons"
    :min="1"
    :max="3">
    <el-checkbox v-for="reason in reasons" :label="reason" :key="reason">{{reason}}</el-checkbox>
  </el-checkbox-group>

  <h3>补充说明</h3>
  <el-input type="textarea" placeholder="请输入内容" rows = "2" v-model="reportText"></el-input>
  <span>您已输入字数: {{reportText.length || 0}}</span>

  <span slot="footer" class="dialog-footer">
    <el-button @click="canceReport">取 消</el-button>
    <el-button type="primary" @click="submitReport">确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    const reasonOptions = ['垃圾营销', '不实信息', '有害信息', '违法信息','人身攻击', '内容抄袭', '淫秽色情', '其他'];
    export default {
        name:"user-report",
        components:{},
        props:{},
        data(){
            return {
                checkedReasons: [],
                reasons: reasonOptions,
                reportText: ""
            }
        },
        watch:{},
        computed:{ ...mapState(['user'])},
        methods:{
            ...mapActions([
                'toggleReportModal'
            ]),
            canceReport(){
                this.checkedReasons = []
                this.reportText = ""
                this.toggleReportModal()
            },
            submitReport(){
                console.log(this.checkedReasons, this.reportText)
                this.toggleReportModal()
            }
        },
        created(){},
        mounted(){
        }
    }
</script>
<style lang="stylus" scoped>
.wrapper
  h3
    font-weight normal
    margin-bottom 15px
  .el-checkbox-group
    margin-bottom 25px
    label:nth-child(5)
      margin-left 0
</style>