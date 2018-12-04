<template>
    <el-dialog title="注册" :inline="true" :visible.sync="user.isShowRegister" :before-close="finish" width="35%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="phone">
                <el-input v-model="ruleForm.phone" placeholder="手机号码" autocomplete="off">
                    <template slot="prepend">+86<i class="el-icon-arrow-down el-icon--right"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item prop="passwd">
                <el-input v-model="ruleForm.passwd" placeholder="输入8~16位密码" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item prop="smsCode">
                <el-input v-model="ruleForm.passwd" placeholder="输入4位短信验证码" autocomplete="off">
                    <template slot="append" >
                        <el-button type="primary" round size="small" style="width: 103px" @click="getCode" :disabled='!!countDown'>
                            {{ countTip }}
                        </el-button>
                    </template>
                </el-input>
            </el-form-item>
             <el-form-item prop="inviteCode">
                <el-input v-model="ruleForm.passwd" placeholder="输入邀请码" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item>
                   <TheSlipCheck></TheSlipCheck>
            </el-form-item>
            <el-button size="medium" type="primary" @click="submitForm('ruleForm')">注册</el-button>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <p class="login" @click="toggleLoginModal">已有账号, 立即登录
                <span class="help"><i class="el-icon-question" style="color: #bdbfc1"></i> 帮助</span>
            </p>
            <p class="service">登录 / 注册代表您已阅读并同意 <a href="#">智子社区服务协议</a></p>
        </div>
    </el-dialog>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'user-register',
        data(){
            return {
                ruleForm: {
                    phone: '',
                    passwd: '',
                    smsCode: '',
                    inviteCode: ''
                },
                countDown: null,
                rules: {
                    phone: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    smsCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                    inviteCode: [
                        { required: true, message: '请输入邀请码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            ...mapActions([
                'toggleRegisterModal',
                'toggleLoginModal'
            ]),
            finish (){
                this.$store.dispatch("toggleRegisterModal")
            },
            getCode(){
                let { countDown } = this
                if(countDown === null) this.countDown = 60;

                if(countDown == 55) return this.countDown = null;

                this.countDown -= 1
                setTimeout(this.getCode, 1000)
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.finish()
                        console.log(this.ruleForm)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
        computed: {
            ...mapState(['user']),
            countTip(){
                let { countDown } = this
                return  countDown !== null ? countDown + '秒后重发' : '获取验证码' 
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .el-button {
        width: 100%;
    }
    .dialog-footer {
        position relative
        p {
            text-align center
            line-height 1.5
        }
        > .login {  
            cursor pointer
            overflow hidden
            vertical-align middle
            > .help {
                display inline-block
                color: #409EFF;
                font-size: 14px;
                float right
            }
        }
        > .service {  
           font-size 14px  
        }
    }
</style>

