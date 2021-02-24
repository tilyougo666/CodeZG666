<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="">主页</a><span>|</span>
            <a href="">VUE全栈课程</a><span>|</span>
            <a href="">VUE主页</a><span>|</span>
            <a href="">课程咨询</a>
        </div>
        <div class="copyright">
            dsfialfhneofgieawrhnfwioaue;wfe;aowiewfjhfwoa;i
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
    .footer{
        height: 234px;
        border-top: 4px solid #FF7301;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;

            }
            span{
                margin: 0 10px;
            }
            margin-top: 13px;
        }
    }
</style>