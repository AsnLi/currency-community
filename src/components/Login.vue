<template>
    <el-dialog title="登录智子社区" :inline="true" :visible.sync="user.isShowLogin" :before-close="toggleLoginModal" width="35%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="phone">
                <el-input v-model.trim="ruleForm.phone" placeholder="手机号码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="passwd">
                <el-input type="password" v-model.trim="ruleForm.passwd" placeholder="输入8~16位密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox label="2周内自动登录" name="type" v-model="ruleForm.isAutoLogin"></el-checkbox>
                <span style="float: right;cursor:pointer;"  @click="toggleForgotModal">忘记密码</span>
            </el-form-item>
            <el-button size="medium" type="primary" @click="submitForm('ruleForm')" :disabled="!isPass">登录</el-button>
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
                        { validator: this.checkPhone, trigger: 'blur'},
                    ],
                    passwd: [
                         { validator: this.checkPasswd, trigger: 'blur'},
                    ],
                },
                isPass: false
            }
        },
        methods: {
            ...mapActions([
                'toggleLoginModal',
                'toggleRegisterModal',
                'toggleForgotModal'
            ]),
            checkPhone(rule, value, callback){
                if (!value || !(/^1[34578]\d{9}$/.test(value))){ 
                    return callback(new Error('手机号码有误，请重填'))
                };
                this.isPass = true
            },
            checkPasswd(rule, value, callback){
                let nrrorMsg = ""
                nrrorMsg = !value ? "密码不能为空" : !(/^[0-9a-zA-Z]{8,16}$/.test(value)) ? "密码长度为8~16位！" : ""
                if (nrrorMsg) return callback(new Error(nrrorMsg))
            },
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
        computed: {...mapState(['user'])},
        mounted() {
        },
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

