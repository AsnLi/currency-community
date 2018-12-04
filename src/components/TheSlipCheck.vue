<template>
    <div class="verify">
        <div class="verify_box" ref="verify_box">
            <div class="verify_xbox" ref="verify_xbox" :style="{width: `${full}px`}">
                <div class="verify_btn" ref="verify_btn">
                    <img src="../assets/check-right.png" style="max-width: 100%" v-if="!isPass"/>
                    <img style="margin-top:8px" src="../assets/check-ok.png"  v-else/>
                </div>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;按住滑块，拖动到最右边
        </div>
        <div class="pass_tip" v-show="isPass">验证通过, 用时{{ timeCount.num.toFixed(1) }}s</div>
    </div>
</template>

<script>
    export default {
        name: 'TheSlipCheck',
        data(){
            return {
                isPass: false,
                full: 56,
                timeCount: {
                    num: 0,
                    stop: false
                }
            }
        },
        methods: {
            initMove(){
                const {verify_box, verify_btn} = this.$refs
                const {offsetWidth: box_ow} = verify_box
                const {offsetWidth: btn_ow, offsetLeft: btn_ol} = verify_btn;

                verify_btn.ondragstart   = () => false
                verify_btn.onselectstart = () => false

                return {
                    box_ow,
                    btn_ow,
                    btn_ol,
                    verify_btn
                }
            }, 
            countDown() {
                let {stop, num} = this.timeCount    
                if(stop) return;
                this.timeCount.num += 0.1
                setTimeout(this.countDown, 100)
            }
        },
        mounted() {
            const { box_ow, btn_ow, btn_ol, verify_btn } = this.initMove()

            verify_btn.onmousedown = e => {
                this.countDown()
                this.isPass = false
                const disX = e.clientX - btn_ol;
                let boxWidth = 0
                document.onmousemove =  e => {
                    boxWidth = e.clientX - disX + btn_ow;

                    if(boxWidth < btn_ow) boxWidth = btn_ow;
                    if(boxWidth > box_ow) boxWidth = box_ow;

                    this.full = boxWidth
                };
                document.onmouseup = e => {
                    boxWidth = e.clientX - disX + btn_ow;
                    this.full = boxWidth < box_ow ?  btn_ow : (this.isPass = true), box_ow
                    document.onmousemove = null;
                    document.onmouseup = null;

                    this.timeCount.stop = true
                };
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .verify{
        width: 100%;
        height: 40px;
        > div {
            display inline-block
        }
    }
    .verify_box{
        width: 240px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        margin-right 15px
        font-size: 14px;
        color:#fff;
        position: relative;
        background-color: rgba(212, 212, 212, 1);
    }
    .verify_xbox{
        width: 54px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color:#fff;
        position: absolute;
        background: #7BBB55;
    }
    .verify_btn{
        cursor: pointer;
        width: 54px;
        height: 38px;
        background-color: rgba(255, 255, 255, 1);
        border: solid 1px rgba(212, 212, 212, 1);
        float: right;
    }
</style>


