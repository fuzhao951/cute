<template>
  <div>
    <titlebar title="小可爱火锅">
      顶部
    </titlebar>
    <div style="height:40px;"></div>
    <bigtitle :id="id"></bigtitle>
    <subtitle :id="id"></subtitle>
    <introduce :id="id"></introduce>
    <sizeone :id="id"></sizeone>
  </div>
</template>
<script>
import Titlebar from "./common/Titlebar.vue";
import Title from "./common/Title.vue";
import Subtitle from "./common/Subtitle.vue";
import Introduce from "./common/Introduce.vue";
import Sizeone from "./common/Size.vue";
export default {
  data(){
    return{
      id:""
    }
  },
  created(){
    this.do()
  },
  methods:{
    do(){
      this.id=this.$route.params.id;
      window.scrollTo(0,0);
    }
  },
  components:{
    "titlebar":Titlebar,
     "bigtitle":Title,
    "subtitle":Subtitle,
    "introduce":Introduce,
    "sizeone":Sizeone
  }
}
</script>
<style>

</style>
