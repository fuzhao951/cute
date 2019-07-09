<template>
    <div class="contain-bottom">
        <div class="back">
            <i class="iconfont icon-ffanhui-" style="font-size:20px;color:white;"></i>
            <span>导航</span>
        </div>
        <div class="continue" @click="toList">
            <i class="iconfont icon-caidan"  style="font-size:20px;color:white;"></i>
            <span>继续点菜</span>
        </div>
        <div class="paid" @click="toPaid">
            <i class="iconfont icon-dingdan"  style="font-size:20px;color:white;"></i>
            <span>下单</span>
        </div>
        <!-- <button>提交订单</button> -->
    </div>
</template>
<script>
export default {
    props:{
        total:{default:""}
    },
    methods:{
        toPaid(){
            if(this.total>0){
            this.$toast(`下单成功,合计${this.total}元`);
            this.$router.push("/home")
            }
            else{
                this.$toast(`您的购物车里没有东西呀`);
            }
        },
        toList(){
            this.$router.push("/List");
        }
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
    .contain-bottom{
        position: fixed;
        width:100%;
        top:90%;
        display: flex;
        justify-content: space-around;
    }
    .back,.continue,.paid{
        width:55px;
        height:55px;
        border-radius:50%;
        text-align: center;
        line-height: 45px;
        padding: 0;
        background-color:rgba(0,0,0,0.7);
        position: relative;
    }
    .paid{
        background:rgba(255,0,0,0.7);
    }
    .contain-bottom>div span{
        position: absolute;
        display: block;
        color:#fff;
        top:21px;
        left:16px;
        font-size: 8px;
        padding: 0;
        margin:0;
        transform:scale(0.8);
    }
    .contain-bottom>div:nth-child(2) span{
        left:5px;
    }
</style>
