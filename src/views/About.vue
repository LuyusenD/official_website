<template>
  <div class="about" ref="dom">
    <div style="font-size: 10px;">System Ver 1.0</div>
    <table>
      <tr>
        <td colspan="2"><h3>Backstage Login</h3></td>
      </tr>
      <tr class="input">
        <td>User：</td>
        <td><input type="text" v-model="uname"></td>
      </tr>
      <tr class="input">
        <td>Password：</td>
        <td><input type="password" v-model="upwd"></td>
      </tr>
      <tr class="btn">
        <td colspan="2"><a href="javascript:;" @click="login()">Login</a></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"",
      upwd:""
    }
  },
  mounted () {
    
    this.$refs.dom.style.height = `${window.innerHeight}px`
  },
  methods:{
    login(){
      //if(this.upwd!="0488028919"||this.uname!="xiniqichefuwu"){
      if(this.upwd!="Fwq.133/129"||this.uname!="hhbfwq1969"){
      // if(this.upwd!=""||this.uname!=""){
        alert("User or password error");
        return;
      }
      sessionStorage.setItem('islogin','true')
      this.$router.push("/emailList")
    }
  }
}
</script>

<style lang="scss" scoped>
  .about{
    background:rgba(0, 43, 47, 0.93);
    table{position:relative;margin: -100px auto 0;top: 50%;background:#fff;width: 300px;height: 200px;border-radius: 10px;
      tr:nth-child(1){
        td{text-align: center;}
      }
      .input{
        td:nth-child(1){text-align:right;line-height: 26px;}
        input{margin-left: 10px;width: 180px;height: 26px;border-radius: 4px;border: 1px solid #ccc;}
      }
      .btn{text-align:center;
        a{position:relative;display: inline-block;width: 100px;height: 30px;line-height: 30px;text-align: center;border-radius: 4px;color:#fff;margin: 0 auto; background:#1c625f}
      }
    }
  }
</style>