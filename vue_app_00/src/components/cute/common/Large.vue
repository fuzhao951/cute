<template>
    <div class="container">
        <div class="good-item" v-for="(item,index) of list" :key="index" @click="toDetail(item.id)">
            <a href="javascript:;">
                <img :src="'http://127.0.0.1:3000/'+item.ssrc" alt="">
                <i></i>
                <div class="info">
                    <h4>{{item.sname}}</h4>
                    <span class="now">¥{{item.price.toFixed(2)}}</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        // toDetail:{type:Function}
    },
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.loadMore()
    },
    methods:{
        loadMore(){
            var url="large";
            var str="36,38,31";
            var obj={ids:str};
            this.axios.get(url,{params:obj}).then(result=>{
                var rows=result.data.data;
                this.list=rows;
            })
        },
        toDetail(id){
            this.$router.push({
                name:"detail",
                params:{
                    id:id
                }
            });
        }
    }
    
}
</script>

<style scoped>
.container{
    display:flex;/*弹性布局*/
    flex-wrap:wrap;/*子元素换行*/
    justify-content:center;
    padding:4px;
    overflow:hidden;
}
.good-item{
    display:flex;/*弹性布局*/
    flex-direction:column;/*方向按列*/
    width:100%;
    height:221px;
    overflow:hidden;
    position:relative;
    margin-bottom:10px;
}
.good-item img{
    width: 100%;
    height: 211px;
    overflow:hidden;
   
}
.info{
    width:100%;
    height:20%;
    color:#fff;
    padding:0 8px;
    background-color:rgba(0, 0, 0, 0.3);
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    position:absolute;
    bottom:4%;

}
.info h4{
    font-weight:bold;
}
</style>

