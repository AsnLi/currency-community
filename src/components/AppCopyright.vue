<template>
    <el-footer style="height: auto">
        <el-row>
            <el-col :span="18">
                <p>智子社区是基于区块链与人工智能的一站式数字资产投资服务社区。</p>
                <p>香港智子科技有限公司 HONG KONG SOPHON TECHNOLOGY LIMITED。</p>
                <p>香港湾仔卢押道18号海德中心16楼D室 </p>
                <p>Unit D, 16/F, One Capital Place, 18 Luard Road, Wan Chai, Hong Kong</p>
                <p>风险提示：智子社区里任何用户或者嘉宾的发言，都有其特定立场，投资决策需要建立在独立思考之上。</p>
            </el-col>
            <el-col :span="6">
                <p>产品建议：contact@sophon.in</p>
                <p>商务合作：media@sophon.in</p>
                <p>添加客服：微信号sophoncc</p>
                <p class="contact_group">
                    <img src="../assets/index.png" alt="" srcset="">
                    <img src="../assets/facebook.png" alt="" srcset="">
                    <img src="../assets/twitter.png" alt="" srcset="">
                </p>
            </el-col>
        </el-row>
    </el-footer>
</template>

<script>
    export default {
        name: 'app-copyright',
        data(){
            return {
            }
        },
    }
</script>

<style lang="stylus" scoped>
    footer {
        width: 100%;
        font-size: .75em;
        background-color: #2f3236;
        color: #aeb4ba;
        position relative;
        padding: 15px 0;
        line-height: 1.7;
        > div {
          width: 90%;
          min-width: 1170px;
          margin-left: auto;
          margin-right: auto;
        }
        .contact_group {
            margin-top: 10px; 
            > img {
                display: inline-block;
                width: 30px;
                height: 30px;
                margin-right: 15px;
            }
        }
    }
</style>


