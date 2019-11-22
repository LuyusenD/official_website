<template>
  <div class="emailList" ref="dom">
    <h3 class="title">Look Email</h3>
    <table>
       <tr>
         <th>id</th>
         <th>name</th>
         <th>Phone</th>
         <th>Email</th>
         <th>Content</th>
         <th>Time</th>
       </tr>
       <tr v-for="(i,index) in list" :key="index" class="content">
         <td>{{i.id}}</td>
         <td>{{i.sName}}</td>
         <td>{{i.sPhone}}</td>
         <td>{{i.sEmail}}</td>
         <td>{{i.sContent}}</td>
         <td>{{i.sTime}}</td>
       </tr>
    </table>
  </div>
</template>
<script>
export default {
  data(){
    // if(sessionStorage.getItem('islogin')){
    return {
      list:[],
      is: false
    }
  },
  mounted () {
    this.$refs.dom.style.height = `${window.innerHeight}px`
    let that = this
    window.onresize = function () {
      that.$refs.dom.style.height = `${window.innerHeight}px`
    }
  },
  created () {
    if (sessionStorage.getItem('islogin')) this.is = true
    this.$nextTick(v => {
      this.getlist()
    })
  },
  methods:{
    getlist () {
      if (!this.is) {
        alert('请登录...')
        this.$router.push("/email")
      }
      var url="http://27.54.93.34:5050/emailList";
      this.axios.get(url).then(res=>{
        this.list = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" >
  ::-webkit-scrollbar{width: 4px;height:4px;background: transparent;}
  ::-webkit-scrollbar-thumb{border-radius:2px;background:rgba(0, 43, 47, 0.93)}
</style>
<style lang="scss" scoped>

  .emailList{min-width: 1366px;overflow: auto;background:rgba(0, 43, 47, 0.93);text-align: center;
    .title{padding: 10px 0 10px 0;color:#fff;margin:0 auto;}
    table{width: 100%;border: 1px solid #666;color: #fff;
      tr{
        th{border: 1px solid #666;}
        td{border: 1px solid #666;}
        td:nth-child(1){width:5%;}
        td:nth-child(2){width:10%;}
        td:nth-child(3){width:10%;}
        td:nth-child(4){width:10%;}
        td:nth-child(5){width:55%;}
        td:nth-child(6){width:30%;}
      }
    }
  }
</style>