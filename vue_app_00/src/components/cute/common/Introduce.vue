<template>
  <div class="introduce">
    <span class="shop">商品详情</span>
    <img src="http://127.0.0.1:3000/normal/head.png" alt="">
    <img v-if="item!=''" :src="'http://127.0.0.1:3000/'+item" alt="">

    <img src="http://127.0.0.1:3000/normal/foot.png" alt="">
    <span class="footer">
      <pre>
        ->小可爱火锅&lt;-
      </pre>
    </span>
  </div>
</template>
<script>
export default {
  props:{
    id:{default:""}
  },
  data(){
    return{
      item:"",
    }
  },
  created(){
    this.iload()
  },
  methods:{
    iload(){
      var url="subtitle";
      var obj={id:this.id};
      this.axios(url,{params:obj}).then(result=>{
        var result=result.data.data;
        this.item=result[0].ssrc;
      })
    }
  }
}
</script>
<style scoped>
  .introduce .shop{
    display: block;
    margin:20px 0 10px 10px;
  }
  .introduce img{
    width:100%;
  }
  .footer{
    display: block;
    height:30px;
    line-height: 30px;
    text-align: center;
    background-color: #ddd;
    color:#bbb;
    font-size:15px;
  }
</style>
