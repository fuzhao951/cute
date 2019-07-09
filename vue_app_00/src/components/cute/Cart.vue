<template>
    <div>
        <titlebar title="购物车"></titlebar>
        <div style="height:40px;"></div>
        <div class="contain-top">
            <span>购物车</span>
            <hr>
            <div class="typeall">
                <div v-for="(type,index) in typearr" :key="index">
                    <span>购物车里有{{type.name}}{{type.times}}个,</span>
                </div>
                <div class="all">
                    <span >合计:¥{{total}}</span>
                </div>
                <button @click="delall">清空</button>
            </div>
        </div>
        <cartlist v-on:addtotals="showtotals"></cartlist>
        <cartbottom :total="total"></cartbottom>
    </div>
</template> 
<script>
import titlebar from "./common/Titlebar.vue"
import cartlist from "./common/cartlist.vue"
import cartbottom from "./common/cartbottom.vue"
export default {
    data(){
        return{
            total:"",
            typearr:[]
        }
    },
    created(){
        this.do();
    },
    methods:{
        delall(){
            
            var url="delall";
            //这里需要添加一个确定验证
            this.axios.get(url).then(result=>{
               location.reload();
            })
        },
        do(){
            window.scrollTo(0,0);

        },
        showtotals(data){
            this.total=data.totals;
            this.typearr=data.type; 
            var arr=[];
            var i=0;
            for(var item in this.typearr){
                var obj={};
                obj.name=item;
                obj.times=this.typearr[item];
                arr[i]=obj;
                i++;
                // console.log(this.typearr[item]);
            }
            
            this.typearr=arr;
              
        }
    },
    components:{
        "titlebar":titlebar,
        "cartlist":cartlist,
        "cartbottom":cartbottom
    }
}
</script>
<style scoped>
    .contain-top{
        position: relative;
        min-height: 90px;
        background-color:#fff;
        margin:10px;
        border-radius: 5px;
        color:#000;
        text-align: center;
        padding:5px;
        border-top:3px dotted #ccc;
    }
    .typeall{
        color:#777;
        font-size:12px;
    }
    .typeall>div{
        float:left;
    }
    .typeall>.all{
      color:red;
      
    }
    .typeall>button{
        width:35px;
        height:35px;
        text-align: center;
        line-height: 35px;
        padding:0px;
        position: absolute;
        right: 5px;
        background: red;
        color:#fff;
    }
</style>