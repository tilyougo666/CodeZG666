<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" @click="login">登录</a>
                    <a href="javascript:;">我的订单</a>
                    <a href="javascript:;" class="my-cart" v-on:click='goToCart'><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米手机</div>
                                        <div class="pro-price">666元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米电视</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="pro-name">小米电视</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data(){
        return{
            username:"jack",
            phonelist:[]
        }
    },
    mounted(){
        // this.getProductList();
    },
    methods:{
        // getProductList(){
        //     this.axios.get('/products',{
        //         params:{
        //             categoryId:'100012'
        //         }
        //     }).then((res)=>{
        //         if(res.list>6){
        //             this.phonelist=res.list.slice(0,6)
        //         }
        //     })
        // }
        goToCart(){
            this.$router.push('/cart')
        },
        login(){
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
  .header{
    .nav-topbar{
        height: 39px;
        line-height: 39px;
        background-color: #333333;
        color: #B0B0B0;
        .container{
            @include flex();
            a{
                display: inline-block;
                color: #B0B0B0;
                margin-right: 17px;
            }
            .my-cart{
                width: 110px;
                background-color: #FF6600;
                text-align: center;
                color: #ffffff;
                .icon-cart{
                    @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');                  
                    // display: inline-block;
                    // width: 16px;
                    // height: 12px;
                    // background:url('/imgs/icon-cart-checked.png') no-repeat center;
                    // background-size: contain;
                    margin-right: 4px;
                }
            }
        }
    }
    .nav-header{
        .container{
            height: 112px;
            position: relative;
            @include flex();
            .header-logo{
               display: inline-block;
               width: 55px;
               height: 55px; 
               background-color: #FF6600;
               a{
                   display: inline-block;
                   width: 110px;
                   height: 55px;
                   &:before{
                       content:' ';
                       @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                       transition:margin .2s;
                   }
                   &:after{
                       content:' ';
                       @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                   }
                   &:hover:before{
                       margin-left: -55px;
                       transition:margin .2s;
                   }
               }
            }
            .header-menu{
                display: inline-block;
                width: 643px;
                padding-left: 209px;
                .item-menu{
                    display: inline-block;
                    color: #333333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;
                    span{
                        cursor: pointer;
                    }
                    &:hover{
                        color: $colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children{
                        position: absolute;
                        top: 112px;
                        left: 0;
                        height: 0;
                        opacity: 0;
                        overflow: hidden;
                        width: 1226px;
                        border-top: 1px solid #E5E5E5;
                        box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                        z-index: 10px;
                        transition: all 0.5s;
                        background-color: #ffffff;
                        .product{
                            position:relative;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            height: 220px;
                            text-align: center;
                            background-color: #ffffff;//个人添加
                            z-index: 10;//个人添加
                            a{
                                display: inline-block;
                            }
                            img{
                                height: 111px;
                                width: auto;
                                margin-top: 26px;
                            }
                            .pro-img{
                                height: 137px;
                                
                            }
                            .pro-name{
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .pro-price{
                                color: $colorA;
                            }
                            &:before{
                            content: ' ';
                            position: absolute;
                            top: 28px;
                            right: 0px;
                            border-left: 1px solid #D7D7D7;
                            height: 100px;
                            width: 1px;
                            }
                            &:last-child::before{
                                display: none;
                            }
                        }
                    }
                }
            }
            .header-search{
                width: 319px;
                .wrapper{
                    height: 50px;
                    border: 1px solid #E0E0E0;
                    display: flex;
                    align-items: center;
                    input{
                        border:none;
                        box-sizing: border-box;
                        border-right: 1px solid #E0E0E0;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                    }
                    a{
                        @include bgImg(18px,18px,'/imgs/icon-search.png');
                        margin-left: 17px;
                    }
                }
            }
        }
    }
  }
</style>