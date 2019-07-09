<template>
    <div class="page-tabbar">
        <!-- top -->
        <titlebar
        title="小可爱火锅"
        ></titlebar>
        <div style="height:40px;"></div>
        <!-- VIP -->
        <div class="policy">
            <div class="top">
                <img class="bg" src="../../assets/top_img.png" alt="">
                <span class="top_context">本店优惠</span>
            </div>
            <div class="vip">
                <i class="iconfont icon-huiyuanquanyi"></i>
                <span class="v_s">会员特权:充得越多送得越多;加入会员送2张优惠券</span>
                <a href="javascript:;">查看详情&nbsp;&gt;</a>
            </div>
            <div class="hot">
                <div class="pointer">
                    <i class="iconfont icon-dianji"></i>
                    <a href="javascript:;">随便点</a>
                </div>
                <div class="pointer">
                    <i class="iconfont icon-tuijian"></i>
                    <a href="javascript:;">热销榜</a>
                </div>
                <div class="pointer">
                    <i class="iconfont icon-caidan"></i>
                    <a href="javascript:;">点过的菜</a>
                </div>
            </div>
        </div>
        <!-- species list -->
        <div class="species">
             <h4>--招牌五宝--</h4>
            <large></large>
            <little  
            type="荤食涮煮系列"
            ></little>
            <little 
            type="火锅锅底"
            ></little>   
            <little 
            type="蔬菜系列"
            ></little>
            <little 
            type="饮料酒水"
            ></little>   
        </div>
        <!-- nav -->
        <leftbar></leftbar>
        <!-- cart -->
        <div class="container">
            <div @click="toCart" class="cart">
                <i class="iconfont icon-icon01"></i>
                <p class="cart-font">购物车</p>
            </div>
        </div>
    </div>
</template>

<script>
import Titlebar from "./common/Titlebar"
import Large from "./common/Large"
import Little from "./common/Small"
import Leftbar from "./common/Nav"
export default {
    data(){
        return{
            type:"",
            num:"" 
        }
    },
    methods: {
        toCart(){
             this.$router.push("/cart");
        }
    },
    components:{
        "titlebar":Titlebar,
        "large":Large,
        "little":Little,
        "leftbar":Leftbar
    }
}
</script>

<style scoped>
    .policy{
        width:100%;
        height:200px;
        padding:0 10px;
        margin:0 auto;
    }
    .top{
        width:100%;
        margin:0 auto;
        padding:10px  0;
        display:flex;
        justify-content: center;
        position:relative;
        
    }
    .bg{
        width:100px;
        height:30px;
    }
    .top_context{
        font-size:14px;
        position:absolute;
        color:#fff;
        font-family: Arial, Helvetica, sans-serif;
        top:15px;
        left:41%;
    }
    .vip{
        width:100%;
        height:50px;
        background-color:#fff;
        display:block;
        border-radius:5px;
        padding:8px;
        margin-bottom:15px;
        position:relative;
        
    }
    .icon-huiyuanquanyi{
        font-size:22px;
        color:burlywood;
        margin:0px 8px 0 8px;
    }
    .v_s{
        font-size:12px;
        color:#555;
        position:relative;
        top:-6px;
    }
    .vip a {
        font-size:5px;
        color:#555;
        display:block;
        position:absolute;
        right:2%;
        bottom:0;
    }
    .hot{
        width:100%;
        height:50px;
        background:#fff;
        border-radius:5px;
        display:flex;
        align-items: center;
        justify-content: center;
        padding-top:5px;
    }
    .pointer{
        width:113px;
        text-align:center;
        display:flex;
        flex-direction:column;

    }
    .hot a{
        display:inline-block;
        color:#555;
        font-size:8px;
        
        
    }
    .icon-dianji,.icon-tuijian,.icon-caidan{
        font-size:22px;
    }
    .species h4{
        width:100%;
        font-size:14px;
        color:#555;
        display:block;
        margin-bottom:10px;
        text-align:center;
    }
    .cart{
        width:60px;
        height:60px;
        background-color:rgb(248, 41, 4);
        position:fixed;
        border:3px solid #fff;
        top:542px;
        right:9px;
        z-index:300;
        border-radius:50%;
        text-align:center;
        
    }
    .icon-icon01{
        font-size:20px;
        color:white;
        border-radius:50%;
        position:relative;
        bottom:-5px;
        left:-1px;
    }
    .cart-font{
        color:#fff;
        margin-top:5px;
        font-size:8px;
        

    }
</style>
