<template>
    <div class="container" :id="type" style="margin-top:40;">
        <h4 >--{{type}}--</h4>
        <div class="good-item" v-for="(item,index) of list" :key="index" @click="toDetail(item.id)">
            <img :src="'http://127.0.0.1:3000/'+item.ssrc" alt="">
            <i></i>
            <div class="info">
                <h4>{{item.sname}}</h4>
                <span class="now">¥{{item.price.toFixed(2)}}</span>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    props:{
        // toDetail:{type:Function},
        type:{default:""},
        num:{default:""}
    },
    data(){
        return{
            list:[],
            name:[],
        }
    },
    created(){
        this.load()
    },
    methods:{
        load(){
            var url="list";
            console.log(this.type);
            var obj={type:this.type};
            this.axios.get(url,{params:obj}).then(result=>{
                var rows=result.data.data;
                this.list=rows;
                // console.log(rows);
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
    padding:0 4px;
    overflow:hidden;
    justify-content: space-between; 
    
}
.good-item{
    width:30%;
    display:flex;/*弹性布局*/
    flex-direction:column;/*方向按列*/
    min-height:95px;
    overflow:hidden;
    position:relative;
    border-radius:5px;
    margin-bottom:20px;
}
.good-item img{
    width:100%;
    overflow:hidden;
    
}
.info{
    width:100%;
    height:50px;
    color:#000;
    padding:0 8px;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    bottom:0;
    

}
.info h4{
    font-size:14px;
    font-weight:bold;
}
.info span{
    font-size:12px;
}
.container>h4{
    width:100%;
    font-size:14px;
    color:#555;
    display:block;
    margin-bottom:10px;
    text-align:center;
}

</style>

