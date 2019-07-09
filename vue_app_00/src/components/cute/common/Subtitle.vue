<template>
  <div class="subtitle">
    <span class="name">{{sname}}</span>
    <span class="sale">月售132份</span>
    <span class="price">￥ {{price}}/份</span>
    <ul>
      <li><i class="iconfont icon-zan"></i></li>
      <li><i class="iconfont icon-zan"></i></li>
      <li><i class="iconfont icon-zan"></i></li>
    </ul>
   
  </div>
</template>
<script>
export default {
  props:{
    id:{default:""}
  },
  created(){
    this.dload();
  },
  data(){
    return{
      sname:"",
      price:""
    }
  },
  methods:{
    dload(){
      var url="subtitle";
      var obj={id:this.id};
      this.axios(url,{params:obj}).then(result=>{
        var result=result.data.data;
        this.sname=result[0].sname;
        this.price=result[0].price;
       
      })
    }
  }
}
</script>
<style scoped>
  .subtitle{
    width:100%;
    height:80px;
    
  }
  .subtitle .name{
    display: block;
    font-size:20px;
    margin:10px 0 5px 10px;
  }
  .subtitle .sale{
    display: block;
    font-size:15px;
    color:#bbb;
    margin:5px 0 5px 10px;
  }
  .subtitle .price{
    display: inline;
    font-size:20px;
    color:red;
    margin:5px 0 5px 10px;
  }
  .subtitle ul{
    float:right;
  }
  .subtitle ul li{
    float:left;
    margin-right:10px;
  }
  .subtitle i{
    font-size:20px;
    color:#ffc333;
  }
</style>
