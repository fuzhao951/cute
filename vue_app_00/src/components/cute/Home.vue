<template>
    <div class="home">
        <titlebar
        title="小可爱火锅"
        ></titlebar>
        <!-- 占位符 -->
        <div style="height:40px"></div>
        <div class="container">
            <div class="container-top">
                <span class="welcome">欢迎光临</span>
                <a href="javascript:;">
                    <i class="iconfont icon-fenxiang" style="font-size:18px;"></i>
                </a>
                <div class="shopname">    
                    <div class="sp1">
                        <img src="../../assets/shopname.jpg"  alt="">
                        <span>小可爱·麻辣皮卡丘火锅店</span>
                        <span>(真新镇店)</span>
                        <span>51~100元 &nbsp;&nbsp;综合</span>
                    </div>
                    <div class="shoucang" @click="zan">
                        <i class="iconfont icon-shoucang" style="font-size:18px;" :class="{redcolor:isred}"></i>    
                    </div> 
                    <div class="address">
                        <i class="iconfont icon-dizhi" style="font-size:18px"></i> 
                        <span>盘石路123号&nbsp;&nbsp;黄老鼠美食街</span>
                        <i class="iconfont icon-dianhua" style="font-size:18px;" ></i>
                    </div>             
                </div>
            </div>
            <div class="container-center">
                <div class="shopfood">
                    <span>本店美食</span>
                    <div class="foodpic">
                        <bpic sname="火锅龙虾" :id="38" width="100%" ></bpic>
                    </div>
                    <div class="foodmeat">
                        <spic sname="鸿运毛肚" :id="31"></spic>
                        <spic sname="明虾" :id="32"></spic>
                        <spic sname="黄喉" :id="29"></spic>
                        <spic sname="鸡爪" :id="30"></spic>
                        <spic sname="目鱼蛋" :id="33"></spic>
                        <spic sname="大泥鳅" :id="34"></spic>
                    </div>
                    <mt-button @click="toList" type="danger" size="large" style="margin-top:30px;background-color:red;">进入菜单</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import titlebar from "./common/Titlebar.vue"
import bpic from "./common/bpic.vue"
import spic from "./common/spic.vue"
export default {
    data(){
        return{
            isred:false,
            src:"",
        }
    },

    methods:{   
        toList(){
            this.$router.push("/List");
        },
        zan(){
            if(this.isred){
                this.isred=false;
            }
            else{
                this.isred=true;
            }
        }
    },
    components:{
        "titlebar":titlebar,
        "bpic":bpic,
        "spic":spic
    }
}
</script>
<style scoped>
    
    .redcolor{
        color:#F00;
    }

    .container{
        position: relative;
     
       
    }
    .welcome{
       color:#555;
       font-size:14px;
   } 
   .container-top{
        padding-top:15px;
        padding-left:10px;
        background-color:rgba(255,255,255,0.5);
        padding-bottom:40px;

   }
   .container-top>a{
        display: block;
        position:absolute;
        top:10px;
        right: 8px;
        width:28px;
        height:28px;
        background:rgba(0,0,0,0.3);
        border-radius: 50%;
        text-align: center;
        line-height:28px;
        color:#fff;
    }
    .shopname{
        position: relative;
        width:100%;
        border-bottom: 1px solid #ccc;
        padding-top:10px;
    }
    .shopname>div.sp1{
        width:85%;
        border-right:1px solid #ccc;

    }
    .shopname>div>img{
        width:75px;
        height:75px;
        border-radius: 10px;
        border:3px solid white;
        margin-left:5%;
    }
    .shopname>div>span:nth-child(2){
        font-weight: bold;
        position: absolute;
        padding-left:10px;
    }
    .shopname>div>span:nth-child(3){
        font-weight: bold;
        position: absolute;
        top:30px;
        padding-left:10px;
    }
    .shopname>div>span:nth-child(4){
        font-size:12px;
        color:#555;
        position: absolute;
        bottom:10px;
        padding-left:10px;
    }
    .shoucang{
        position: absolute;
        right:5%;
        top:30px;
    }
    .address{
        position: absolute;
        width:92%;
        bottom:-30px;
        left:10px;
    }
    .address>span{
        font-size:12px;
        color:#555;
        font-weight: normal;
        width:200px;
        padding-left:0px !important;
    }
    .address>.icon-dianhua{
        position: absolute;
        right:0px;
    }
    .container-center{
        margin-top:10px;
        background-color:rgba(255,255,255,0.5);
        padding-left:5px;
        padding-right: 5px;
        padding-top:20px;
    }
    .container-center>.shopfood>span:first-child{
        display: block;
        font-weight: bold;
        font-size:16px;
        height:30px;
        line-height: 30px;
        margin-bottom:10px;

        
    }
    .foodmeat{
        background-color:#fff;
        display: flex; 
        justify-content: space-around;
        flex-wrap:wrap;
    }
</style>
