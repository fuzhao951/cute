<template>
    <div class="contain-sname" @click="toDetail(id)">
        <div style="height:250px;overflow:hidden;border-radius:10px;">
            <img :src="src" :width="width" alt="">
        </div>
        <span class="names">{{sname}}</span>
        <span class="price">¥{{price}}</span>
    </div>
</template>
<script>
export default {
    props:{
        id:{default:""},
        sname:{default:""},
        width:{default:""},
    },
    created(){
        this.xload();
    },
    data(){
        return { 
            src:"",
            price:""
        };
    },
    methods: {
        toDetail(id){
            this.$router.push({
                name:"detail",
                params:{
                    id:id
                }
            });
        },
        xload(){
        var url="home";
        var obj={sname:this.sname};
        this.axios.get(url,{params:obj}).then(result=>{
            var result=result.data.data[0];
            this.src='http://127.0.0.1:3000/'+result.ssrc;
            this.price=result.price.toFixed(2);
        })
    }
    }
}
</script>
<style scoped>
    .names{
        display: block;
       
        bottom:-25px;
        font-size:12px;
        color:#333;
    }
    .price{
        
        font-size:12px;
        color:#000;
        bottom:-40px;
        left:3px;
        letter-spacing: 1px;
    }
</style>