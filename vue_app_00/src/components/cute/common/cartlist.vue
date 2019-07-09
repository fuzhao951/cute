<template>
    <div class="container">
        <div v-for="list of lists">
            <div class="clears">
                <img class="imgBorder" :src="'http://127.0.0.1:3000/'+list.src" width="30%" alt="">
                <div class="textAll">
                    <span>{{list.sname}}</span>
                    <span>单价:¥{{list.price}}</span>
                    <span>共:¥{{list.price*list.count}}</span>
                </div>
                <div class="btnAll">
                    <button @click="add(-1,list.sname,list.count)">-</button>
                    <span>{{list.count}}</span>
                    <button @click="add(1,list.sname,list.count)">+</button>
                    <button class="del" @click="delone(list.sname)">删除</button>
                </div>
            </div>
            <div>
                <hr class="hhr">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lists:"",
            src:""
        }
    },
    created() {
        this.loadList();
    },
    methods: {
        delone(e){
            var url="delone";
            var obj={sname:e};
            this.axios.get(url,{params:obj}).then(result=>{
                this.loadList();
            })
        },
        loadList(){
            var url="cartlist";
            this.axios.get(url).then(result=>{
                this.lists=result.data.data;
                var totals=0;
                var arr=[];
                for(var list of this.lists){
                    totals+=list.price*list.count;
                    if(arr[list.type]==undefined){
                        arr[list.type]=1;
                    }
                    else{
                        arr[list.type]=arr[list.type]+1;
                    }
                }
                // console.log(arr);
                this.$emit('addtotals',{totals:totals,type:arr});
                
                // this.src='http://127.0.0.1:3000/'+result.src;
            })
        },
        add(t,n,c){ 
            console.log(c);
            c=c+t;
            if(c==0){
                c=1
            }
            var url="add";
            var obj={
                sname:n,
                num:c
            }
            this.axios.get(url,{params:obj}).then(result=>{
               this.loadList();
            })
        }
    },

}
</script>
<style scoped>
    *{
        margin:0;
        padding: 0;
    }
    .container{
        position: relative;
        padding:10px 10px;
        height:600px;
    }
    .container>.clears{
        height:90px;
    }
    .imgBorder{
        width:108px;
        border-radius: 5px;
        float:left;
    }
    .textAll{
        float:left;
        color:#555;
       margin-left:10px;
        
    }
    .textAll>span:nth-child(3){
        color:#123afc;
    }
    .btnAll>span{
        display: inline-block;
        margin-top:5px;
        width:25px;
        text-align: center;
    }
    .textAll>span{
        display: block;
        margin-bottom: 10px;
        
    }
    .btnAll{
        margin-top:15px;
        float:right;
    }

    .btnAll>button{
        text-align: center;
        line-height: 30px; 
        font-size:32px;
        width:30px;
        height:30px;
        margin:0 5px;
    }
    .btnAll>.del{
        margin-top:10px;
        margin-left:50px;
        display: block;
        font-size:14px;
        width:50px;
        background-color:rgba(255,0,0,0.7);
        color:#fff;
    }
    .hhr{
        width:100%;
    }
</style>
