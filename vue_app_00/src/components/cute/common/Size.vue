<template>
  <div class="foot">
    <span class="count">数量</span>
    <button @click="duce" class="reduce"><span>-</span></button>
    <span class="num">{{i}}份</span>
    <button @click="rise" class="add"><span>+</span></button>
    <button class="addcart" @click="intoCart">加入购物车</button>
  </div>
</template>
<script>
export default {
  props:{
    id:{default:""}
  },
  data(){
    return{
      i:1,
      list:{}
    }
  },
  created(){
    this.getData();
  },
  methods:{
    duce(){
      var reduce=document.querySelector(".reduce");
      if(this.i==1){
        reduce.style.disabled=true;
      }else{
         this.i--;
      }
    },
    rise(){
       this.i++;
    },
    intoCart(){
        this.list.count=this.i;
        var url="intoCart";
        var obj=this.list;
        // console.log(obj);
        this.axios.get(url,{params:obj}).then(result=>{
          console.log(result);
        })
    },
    getData(){
      var url="large";
      var str=this.id;
      var obj={ids:str};
      this.axios.get(url,{params:obj}).then(result=>{
        var data=result.data.data[0];
        for(var key in data){
          if(key=="sname"){
            this.list.sname=data.sname;
          }else if(key=="type"){
            this.list.type=data.type;
          }else if(key=="ssrc"){
            this.list.src=data.ssrc;
          }else if(key=="price"){
            this.list.price=data.price;
          }
        }  
      })
  }
}
}
</script>
<style scoped>
  .foot{
    background-color:aliceblue;
    height:50px;
    width:100%;
    line-height:50px;
    position:fixed;
    bottom:0;
  }
  .count{
    margin-left:10px;
  }
  .foot button{
    display: inline;
   
    border-radius:10px;

    
  }
  .foot button span{
    font-size:30px;
    line-height: 20px;
    color:red;
    
  }
  .foot .num{
    margin:0 10px 0 10px;
  }
  .foot .reduce{
    margin-left:10px;
    margin-top:10px;
  }
  .foot .add{
     margin-top:10px;
  }
  .foot .addcart{
    float:right;
    width:100px;
    color:white;
    border-radius:20px;
    background-color:rgba(255,0,0,0.8);
    margin-right:10px;
    margin-top:10px;
  }
</style>
