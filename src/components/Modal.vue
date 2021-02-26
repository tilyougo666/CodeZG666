<template>
    <div class="modal" v-show="showModal">
        <div class="mask"></div>
        <div class="modal-dialog">
            <div class="modal-header">
                <span>标题</span>
                <a href="javascript:;" class="icon-close"></a>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                 <a href="javascript:;" class="btn">确定</a>
                 <a href="javascript:;" class="btn">取消</a>
            </div>        
        </div>
    </div>
</template>
<script>
export default {
    name:"modal",
    props:{
        modalType:{
            type:String,
            default:"form"
        },
        title:String,
        btnType:String,
        sureText:{
            type:String,
            default:"确定"
        },
        cancelText:{
            type:String,
            default:"取消"
        },
        showModal:Boolean
    }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
.modal{
    @include position(fixed);
    z-index: 10;
    .mask{
        @include position(fixed);
        background-color: #000000;
        opacity: 0.5;
    }
    .modal-dialog{
        @include position(absolute,40%,50%,660px,auto);
        background-color: #ffffff;
        transform: translate(-50%,-50%);
        .modal-header{
            
            background-color: #F5F5F5;
            height: 60px;
            padding: 0,25px;
            line-height: 60px;
            font-size: 16px;
            .icon-close{
                @include positionImg(absolute,14px,14px,'/imgs/icon-close.png',23px,25px);
                transition: transform .3s;
                &:hover{
                    transform: scale(1.5);
                }
            }
            span{
                margin-left: 15px;
            }
        }
        .modal-body{
            padding: 42px 40px 54px;
            font-size: 14px;
        }
        .modal-footer{
            height: 82px;
            line-height: 82px;
            background-color: #F5F5F5;
            text-align: center;
            .btn{
                display: inline-block;
                width: 110px;
                line-height: 30px;
                text-align: center;
                color: #ffffff;
                background-color: #ff6600;
                border: none;
                cursor: pointer;
                margin-right: 20px;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
}
</style>