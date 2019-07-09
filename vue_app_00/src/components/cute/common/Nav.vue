<template>
    <div class="container">
        <!-- button -->
        <ul class="nav_list" :class="{left:isClick}" >
            <li class="btn">
                <div class="button" @click="turnRight">
                    <i class="iconfont icon-tubiao113"></i>
                </div>
            </li>
            <li class="kinds">分类</li>
            <li class="vip">
                <i class="iconfont icon-dianji"></i>
                <a href="javascript:;">随便点</a>
            </li>
            <li class="vip">
                <i class="iconfont icon-tuijian"></i>
                <a href="javascript:;">本店热销榜</a>
            </li>
            <li class="vip">
                <i class="iconfont icon-caidan"></i>
                <a href="javascript:;">我点过的菜</a>
            </li>
            <li class="nav_food" v-for="(item,index) of list" :key="index">
                <a @click="toA(item)" >{{item}}</a>
            </li>  
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isClick:true,
            list:["店家推荐","荤食涮煮系列","火锅锅底","蔬菜系列","饮料酒水","豆菌系列","海鲜系列","面点小吃","其他","套餐","鲜榨现调系列","特色系列"]
        }
    },
    methods:{
        toA(item){
            document.querySelector('#'+item).scrollIntoView(true);
        },

        turnRight(){
           if(!this.isClick){
               this.isClick=true;
           }else{
               this.isClick=false;
           }
        }

    }
}

</script>

<style scoped>
    .nav_list{
        width:30%;
        height:100%;
        background-color:rgba(255,255,255,0.9);
        position: fixed;
        word-wrap:no-wrap;
        top:40px;
        left:0px;
        margin-left:0;
        transition:0.2s all linear;
        
    }
    .left{
        margin-left:-114px;
        
    }
    .btn{
        width:30px;
        height:30px;
        text-align:right;
        line-height:30px;
        position:absolute;
        padding:50%;
        top:45%;
        right:-18px;
  
    }
    .button{
        width:60%;
        height:30px;
        margin-left:40%;
        border-top-right-radius:90%;
        border-bottom-right-radius:90%;
        background-color:rgba(255,255,255,0.9);
  
    }
    .nav_list .btn{
        padding:0;
    }
    .icon-tubiao113{
        font-size:18px;
        color:#555;
    }
    .nav_list .kinds{
        font-size:10px;
        color:#555;
        border-bottom:1px solid rgba(167, 160, 160, 0.5);
    }
    .nav_list .vip{
        font-size:12px;
        border-bottom:1px solid rgba(167, 160, 160, 0.5);
    }
    .nav_list li{
        padding:5% 10% 5% 7%;
        font:14px;
        overflow:hidden;
        
    }
    .nav_list .nav_food{
         border-bottom:1px solid rgba(167, 160, 160, 0.5);
         
    }
    .nav_food a{
        text-decoration:none;
        font-size:14px;
        color:#555;
    }
</style>