<template>
    <el-dialog title="登录智子社区" :inline="true" :visible.sync="user.isShowLogin" :before-close="finish" width="35%">
        <el-form :model="form">
            <el-form-item>
                <el-input v-model="form.name" placeholder="手机号码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.name" placeholder="输入8/16位密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox label="2周内自动登录" name="type"></el-checkbox>
                <span style="float: right">忘记密码</span>
            </el-form-item>
            <el-button size="medium" type="primary" @click="finish()">登录</el-button>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <span class="register">立即注册</span>
            <span class="help"><i class="el-icon-question" style="color: #bdbfc1"></i> 帮助</span>
        </div>
    </el-dialog>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'Login',
        data(){
            return {
                form: {
                    name: '',
                    region: ''
                },
            }
        },
        methods: {
            ...mapActions([
                'toggleLoginModal'
            ]),
            finish (){
                this.$store.dispatch("toggleLoginModal")
                this.$Bus.$emit('refmasterlist')
            }
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

