<template>
    <el-dialog title="找回密码" :visible.sync="user.isShowForgot" :before-close="toggleForgotModal" width="35%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" :label-position="labelPosition">
            <el-form-item label="手机号码" prop="phone">
                <el-input v-model="ruleForm.phone" placeholder="手机号码" autocomplete="off">
                    <template slot="prepend">+86<i class="el-icon-arrow-down el-icon--right"></i></template>
                </el-input>
            </el-form-item>
             <el-form-item label="验证码" prop="smsCode">
                <el-input v-model="ruleForm.smsCode" placeholder="输入4位短信验证码" autocomplete="off">
                    <template slot="append">获取验证码</template>
                </el-input>
            </el-form-item>
             <el-form-item label="新密码" prop="passwd">
                <el-input v-model="ruleForm.passwd" placeholder="输入8~16位密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-button size="medium" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form>
        <div slot="footer" class="dialog-footer"></div>
    </el-dialog>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'Login',
        data(){
            return {
                labelPosition: 'right',
                ruleForm: {
                    phone: '',
                    passwd: '',
                    smsCode: '',
                },
                rules: {
                    phone: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    smsCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]       
                }
            }
        },
        methods: {
            ...mapActions([
                'toggleForgotModal'
            ]),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.toggleForgotModal()
                        console.log(this.ruleForm)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
        computed: {...mapState(['user'])}
    }
</script>

<style lang="stylus" scoped>
    .el-button {
        width: 100%;
    }
    .dialog-footer {
        position relative
        > .register {
            position: absolute;
            left: 42%;
            transform: scale(42%, 0);
        }
        > .help {
            color: #409EFF;
            font-size: 14px;
        }
    }
</style>

