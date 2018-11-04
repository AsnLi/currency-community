<template>
    <el-dialog title="登录智子社区" :inline="true" :visible.sync="user.isShowLogin" :before-close="toggleLoginModal" width="35%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="phone">
                <el-input v-model="ruleForm.phone" placeholder="手机号码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="passwd">
                <el-input type="password" v-model="ruleForm.passwd" placeholder="输入8~16位密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox label="2周内自动登录" name="type" v-model="ruleForm.isAutoLogin"></el-checkbox>
                <span style="float: right;cursor:pointer;"  @click="toggleForgotModal">忘记密码</span>
            </el-form-item>
            <el-button size="medium" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form>
        <div slot="footer" class="dialog-footer">
             <p class="register" @click="toggleRegisterModal">立即注册
                <span class="help"><i class="el-icon-question" style="color: #bdbfc1"></i> 帮助</span>
            </p>
        </div>
    </el-dialog>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'Login',
        data(){
            return {
                ruleForm: {
                    phone: '',
                    passwd: '',
                    isAutoLogin: false
                },
                rules: {
                    phone: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        { min: 13, message: '请输入正确的手机号码', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            ...mapActions([
                'toggleLoginModal',
                'toggleRegisterModal',
                'toggleForgotModal'
            ]),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.toggleLoginModal()
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
            cursor pointer
            overflow hidden
            vertical-align middle
            text-align center
            > .help {
                display inline-block
                color: #409EFF;
                font-size: 14px;
                float right
            }
        }
    }
</style>

