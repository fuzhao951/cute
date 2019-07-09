<template>
  <div class="bg">
    <img v-if="item!=''" :src="'http://127.0.0.1:3000/'+item" alt="">
    <button class="back" @click="reback">返回</button>
    <a href="#"><i class="iconfont icon-fenxiang"></i></a>
    <button @click="add" class="like"><i class="iconfont icon-shoucang"></i>{{n}}人喜欢</button>
  </div>
</template>
<script>
export default {
  props:{
    id:{default:""}
  },
  data(){
    return{
      n:1,
      item:""
    }
  },
  created(){
    this.load()
  },
  methods:{
    reback(){
        window.history.back();
      // this.$router.push("/List");
    },
    load(){
      var url="subtitle";
      var obj={id:this.id};
      this.axios(url,{params:obj}).then(result=>{
        var rows=result.data.data;
        this.item=rows[0].ssrc;
        
        
      })
    },
    add(){
      
      var like=document.querySelector(".like");
      var shoucang=document.querySelector(".bg>.like>i")
      if(like.innerText=="1人喜欢"){
        like.style.color="red";
        shoucang.style.color="red";
        this.n=2;
      }else{
        like.style.color="white";
        shoucang.style.color="white";
        this.n=1;
      }
    }
  }
}
</script>
<style scoped>
  .bg{
    position:relative;
  }
  .bg img{
    /* z-index:-999; */
    width:100%;
  }
  .bg button{
    display: block;
    position:absolute;
    height:28px;
    text-align: center;
    line-height: 14px;
    background-color:rgba(0,0,0,0.7);
    border-radius:15px;
  }
  .bg .back{
    width:50px;
    color:#fff;
    top:10px;
    left:8px;
    position:fixed;
    margin-top:40px;
  }
  .bg a{
    display: block;
    position:absolute;
    top:10px;
    right: 8px;
    width:28px;
    height:28px;
    background:rgba(0,0,0,0.7);
    border-radius: 50%;
    text-align: center;
    line-height:28px;
    color:#fff;
  }
  .bg i{
    color:#fff;
    font-size:18px;
  }
  .bg .like{
    color:#fff;
    bottom:15px;
    right:8px;
    line-height:14px;
  }
</style>
