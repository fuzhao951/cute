<template>
  <div class="container">
    <titlebar
    title="注册/登录"
    ></titlebar>
     <!--01:登录提示文字-->
    <div class="tipslogin" v-show="isclose">
      <span>你需要登录才能继续访问</span>
      <span class="closeSpan" @click="close">关闭</span>
    </div>
    <!--02:淘宝logo图片-->
    <div class="imgDiv">
      <img src="../../assets/shopname.jpg" class="logo" />
    </div>
    <!--操作区域-->
    <div class="operateDiv">
      <!--01:帐号-->
      <mt-field :placeholder="accountPlaceholder" v-model="uname"></mt-field>
      <!--02:密码-->
      <mt-field v-show="isUserAccount"
      placeholder="请输入密码"
      type="password"
      v-model="upass"
      class="myinput"></mt-field>
      <div class="info" v-show="isinfo">
        <input 
        placeholder="请输入短信验证码"
        type="text"
        v-model="captcha"
        class="myinfo">
        <!-- 验证码 -->
        <img src="../../assets/shopname.jpg" alt="captcha" @click="getCaptcha">
      </div>
      <!--03:短信验证码-->
      <!--04:免费注册-->
      <!--05:登录和切换登录方式 -->
      <div>
        <mt-button size="large"
        class="mybutton"
        @click="login">登录</mt-button>
        <mt-button type="primary" size="large"
        class="mybutton"
        @click="changeLoginMethod">
         {{defaultAccountText}} 
        </mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import Titlebar from "./common/Titlebar"
export default {
  data(){
    return{
      accountPlaceholder:"请输入用户名",
      uname:"",
      upass:"",
      textinfo:"",
      defaultAccountText:"短信验证登录",
      //是否是帐户方式
      isUserAccount:true,
      isinfo:false,
      isclose:true,
      captcha:""//图形验证码
    }
  },
  components:{
      "titlebar":Titlebar,
  },
  methods:{
    login(){
      console.log(123)
      // 完成用户登陆
      // 1：获取用户输入用户名 3~10
      var n=this.uname;
      // 2：获取用户输入密码 3-8 
      var p=this.upass;
      // 3：创建两个正则表达式
      var nreg=/^[a-zA-Z0-9]{3,10}$/;
      var preg=/^[a-zA-Z0-9]{3,8}$/;
      // 4：判断用户名格式不正确 提示出错
      if(!nreg.test(n)){
        this.$toast("用户名格式不正确");
        return;
      }
      // 5：判断密码格式不正确 提示出错
      if(!preg.test(p)){
        this.$toast("密码不正确");
        return;
      }
      // 6：将用户名和密码发送ajax请求
      var url="login";
      var obj={uname:n,upass:p}
      // 7：并且获取服务器返回结果
      this.axios.get(url,{params:obj}).then(result=>{
        if(result.data.code==1){
          //this.$messagebox("消息",result.data.msg);
          console.log(result);
          this.$router.push("/Home");
        }else{
          this.$messagebox("消息",result.data.msg);
        }
        
      });
      // 8：返回失败提示

      // 9：返回成功 跳转Home.vue
    },
    changeLoginMethod(){
        if(this.isUserAccount){
          this.accountPlaceholder="请输入手机号码";
          this.defaultAccountText = "帐户密码登录"
        }else{
          this.defaultAccountText="短信验证登录";
          this.accountPlaceholder="手机/邮箱/会员名";
        }
        this.isUserAccount = !this.isUserAccount;
        this.isinfo=!this.isinfo;
      },
    close(){
        this.isclose=!this.isclose;
        
    },
    // 获取图片验证码
    getCaptcha(event){
      // 每次指定的src值变化
      event.target.src='http://localhost:4000/captcha?time'+Date.now();
    }

  }
}
</script>
<style scoped>
   .container{
     height:600px;
   }
   .tipslogin {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      background: rgb(238, 238, 238);
      padding-left: 20px;
      padding-right: 20px;
    }
    /* 半闭样式 */
    .closeSpan {
      color: rgb(153, 153, 153)
    }
    /* 图片 logo 根样式 */
    .imgDiv {
      display: flex;
      justify-content: center;
    }
    /* 图片样式 */
    .logo{
      width: 80px;
      height: 80px;
    }
    /* 上面的线隐藏 */
    .mint-cell-wrapper  {
      background-image: linear-gradient(180deg, #fff, #fff 0%, transparent 0%);
    }
   /* 输入框底边框样式 */
    .mint-cell-wrapper  {
      border-bottom: 1px solid #ff5000;
    }

    /* 修改按钮按钮下的默认颜色 */
    .mint-button::after {
      background-color: transparent;
    }
    /* 操作区域的样式*/
    .operateDiv {
      padding-left: 20px;
      padding-right: 20px;
      position:relative;
    }
    /* 输入框边距 */
    .myinput {
      margin-top: 30px;
    }
    .myinfo{
      height:48px;
      width:50%;
    }
    .info{
      width:100%;
      height:48px;
      margin-top:30px;
      margin-bottom:30px;
      text-align:left;
      line-height:48px;
      display:flex;
      justify-content: space-between;
      align-items: center;
      /* position:absolute;
      top:78px;
      right:19px; */
    }
    .info img{
      width:48%;
      height:48px;
      font-size:20px;
      font-weight:bold;
      font-style:italic;
      letter-spacing:14px;

    }
    /* 获取短信验证码字体颜色 */
    .getCode {
      color:#ff5000;
      font-size: 17px;
      border-left:1px solid #b5b5b5;
      padding-left: 7px;
    }
    /* 免费注册根样式 */
    .registerDiv {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* 免费注册字体样式*/
    .registerDiv span {
      color: #555;
    }
    /* 登录短信验证按钮边距 */
    .mybutton {
      margin-top: 20px;
    }
    /* 修改默认 butoon 的样式 达到和淘宝登录一样 */
    .mint-button--default {
      background: -webkit-linear-gradient(left,#fcb419,#f87902d7) no-repeat;
      border-radius: 25px;
      color: #fff;
      height: 48px;
    }
    /* 同上 */
    .mint-button--primary {
      border-radius: 25px;
      height: 48px;
      background-color: transparent;
      border: 1px solid #fcb419;
      color: #fcb419;
    }
    /* 修改默认弹框的样式，达到基本和淘宝的效果一样 */
    .mint-msgbox{
      border-radius: 8px;
      width: 70%
    }
    /* 弹出框内容样式 */
    .mint-msgbox-content {
      min-height: 50px;
      font-size: 18px;
    }
    /* 弹出内容居中 */
    .mint-msgbox-message{
      line-height: 50px;
    }
    /* 弹出框确定按钮样式 */
    .mint-msgbox-btns{
      height: 60px;
    }
    /* 弹出框确定按钮字体 */
    .mint-msgbox-confirm {
      color: #f40;
    }
    .operateDiv >>> input{
      border:none;
      background:#fff;
      margin-bottom: 0px;
    }
</style>