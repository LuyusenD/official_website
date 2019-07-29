<template>
  <div id="box">
    <div class="setColor-nav">
      <div class="nav max">
        <img src="../../assets/time.png">
        <span>周一 - 周日: 9AM - 7PM</span>
        <img src="../../assets/location.png" class="location">
        <span>中国大陆 广东省 深圳市</span>
      </div>
    </div>
    <div class="setColor-title">
      <div class="title max">
        <div class="iphone">
          GET FREE QUOTE <br>
          <span>+61 439 556 666</span>
        </div>
        <img src="../../assets/logo.png">
        <a href="javascript:;" class="zxbj">咨询报价</a>
      </div>
    </div>
    <div class="setColor-nav"  v-show="show" style="position:fixed;z-index:999;width: 100%;background:#002b2f;top: 0;">
      <div class="nav max">
        <img src="../../assets/time.png">
        <span>周一 - 周日: 9AM - 7PM</span>
        <img src="../../assets/location.png" class="location">
        <span>中国大陆 广东省 深圳市</span>
      </div>
    </div>
    <div class="setColor-title" v-show="show" style="position:fixed;z-index:999;width: 100%;background:#fff;top: 36px;border-bottom:1px solid #ccc;">
      <div class="title max">
        <div class="iphone">
          GET FREE QUOTE <br>
          <span>+61 439 556 666</span>
        </div>
        <img src="../../assets/logo.png">
        <a href="javascript:;" class="zxbj">咨询报价</a>
      </div>
    </div>
    <div class="setColor-banner">
      <img src="../../assets/banner.png" ondragstart="return false;" oncontextmenu="return false;">
      <div class="banner">
        <div class="banner-bb">
          <div ref='bannBl'></div>
          <div ref='bannBr'></div>
        </div>
        <div class="banner-cont">
          <h1>{{bannerCont.title}}</h1>
          <i ref="hg"></i>
          <p v-html="bannerCont.cont"></p>
          <a href="javascript:;">立即预定</a>
        </div>
        <div class="banner-btn">
          <!-- <button @click="bannBBmove">1</button> -->
          <a href="javascript:;" v-for="(item,i) in bannerList" :key="i" @click="bannBBmove(item.content)" :class="{active:item.content.id === bannerCont.id ? true : false}">{{item.name}}<br>{{item.alias}}</a>
        </div>
      </div>
    </div>
    <div class="setColor-server">
      <div class="server max">
        <div class="title">
          <span>我们提供的服务</span>
        </div>
        <div class="server-item">
          <div v-for="(item,i) in serverList" :key="i">
            <img :src="item.url">
            <h3>{{item.title}}</h3>
            <p>{{item.cont}}</p>
          </div>
        </div>
      </div>
     </div>
    <div class="setColor-cn">
      <div class="cn max">
        <div class="title">
          <span>我们提供的服务</span>
        </div>
        <div>
          <img src="../../assets/cntp1.png">
          <img src="../../assets/cntp2.png">
          <img src="../../assets/cntp3.png">
        </div>
      </div>
     </div>
    <div class="setColor-fyt">
      <div class="fw">
        <div>
          <img src="../../assets/fw.png">
        </div>
        <div>
          <div class="fw-box">
            <h2>优秀的服务</h2>
            <div class="fw-txts">
              <div>
                <img src="../../assets/fw-1.png">
                <h3>友好的客户服务</h3>
                <p>一个平易近人的团队，您可以在个人层面上了解</p>
              </div>
              <div>
                <img src="../../assets/fw-2.png">
                <h3>安全</h3>
                <p>为员工和客户提供安全的服务</p>
              </div>
              <div>
                <img src="../../assets/fw-3.png">
                <h3>适用于紧急问题</h3>
                <p>我们不受营业时间的限制。 我们的工作人员很乐意为紧急事项提供24小时协助（费用可能会有所不同）</p>
              </div>
              <div>
                <img src="../../assets/fw-4.png">
                <h3>支持可用</h3>
                <p>支持和理解船员，以适应您的需求灵活</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fy">
        <div>
          <div class="fy-box">
            <h2>额外费用</h2>
            <div>
              <div><img src="../../assets/1.png"></div>
              <div>
                <p>楼梯费</p>
                <span>每趟楼梯额外$15。 10级或更低的楼梯不需要额外费用</span>
              </div>
            </div>
            <div>
              <div class="w-104"><img src="../../assets/2.png"></div>
              <div>
                <p>重量费</p>
                <span>额外费用可能适用于较重的物品，如; 钢琴，按摩椅，大理石桌，大型鱼缸等。联系我们获取重量报价。</span>
              </div>
            </div>
            <div>
              <div class="w-104"><img src="../../assets/3.png"></div>
              <div>
                <p>包装费</p>
                <span>如果需要包装，并且在搬迁前需要交付包装用品，请提前通知。 包装包括：泡沫包装，屠夫纸，盒子等，用于小件物品。</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="../../assets/fy.png">
        </div>
      </div>
     </div>
    <div class="setColor-bj">
      <img src="../../assets/banner.png" ondragstart="return false;" oncontextmenu="return false;">
      <div class="bj">
        <div>
          <h2>赶快! 立即联系我们获取</h2>
          <p>免费第一次报价</p>
          <a href="javascript:;">预订报价</a>
        </div>
      </div>
     </div>
     <div class="setColor-toast">
      <div class="cn max">
        <div class="title">
          <span>有用的提示</span>
        </div>
        <div class="cont">
          <div v-for="(item,i) in toastList" :key="i">
            <img :src="item.url" alt="">
            <div>
              <h2>{{item.title}}</h2>
              <i></i>
              <h5>点击查询详情></h5>
            </div>
          </div>
        </div>
      </div>
     </div>
    <div class="setColor-email">
      <div class="cn max">
        <div class="title">
          <span>现在预订! </span>
        </div>
        <h5>HOME EASY可以让您顺畅地体验穿越城市或穿越整个州或全国各地。 您只需要一个能够快速联系到您的报价，您就可以完成交易并立即开始行动！</h5>
        <div class="cont">
          <input type="text" placeholder="姓名">
          <input type="text" placeholder="电子邮箱">
          <input type="text" placeholder="电话">
          <textarea cols="30" rows="10"></textarea>
          <a href="javascript:;">联系我们</a>
        </div>
      </div>
     </div>
    <div class="foot">
      <div class="logo">
        <img src="../../assets/footlogo.png">
        <p>悉尼家易搬运</p>
        <a href="javascript:;">预约报价</a>
      </div>
      <div class='cont'>
        <p>联系我们</p>
        <p>
          地址:<br>
          <span>1 Railway Parade Burwood</span>
        </p>
        <p>
          联系电话:<br>
          <span>0439 556 666</span>
        </p>
        <p>
          电子邮箱:<br>
          <span>info@ozhomeeasy.com.au</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss'
import { setTimeout } from 'timers';

export default {
  data () {
    return {
      show: false,
      toastList:[
        {title: '8个非常有用的提示,让您的孩子应对移动',url: require('../../assets/toast1.png')},
        {title: '如何包装菜肴和玻璃移动',url: require('../../assets/toast2.png')},
        {title: '移动家具时节省时间和金钱的3个技巧',url: require('../../assets/toast3.png')},
        {title: '3种方式标记您的移动箱像专业人士',url: require('../../assets/toast4.png')},
      ],
      serverList:[
        {title: '家庭搬家',cont:'我们有最专业的员工，在确保家具安全的同时，以最合理的价格为客户提供最优质的服务.',url: require('../../assets/moveHome.png')},
        {title: '办公室搬运',cont:'为您提供最快速便捷的服务，节省办公室搬迁的时间，让您可以拥有实惠价格的同时有更多时间专注于您的重要业务',url: require('../../assets/bgsMove.png')},
        {title: '清洁服务',cont:'方便，快捷，高效的清洁服务，以合理的价格以及高于中介的退租标准，让您轻松拿回押金。',url: require('../../assets/clean.png')},
        {title: '洲际长途搬运',cont:'以合理的价格，门到门的服务，安全、高效、省心。让您不必再为长途搬家而烦恼。',url: require('../../assets/banyun.png')}
      ],
      bannerList:[
        {name: '4.5顿卡车',alias: 'Studio to Two Bedrooms',content: {title: '$75/小时 - 4.5吨卡车',cont: '20+立方米空间<br>适合一房及两房搬家<br>$75每小时（两位师傅加一台卡车）<br>2小时起<br>按距离远近收取回程费用<br> ',id: 1}},
        {name: '6顿卡车',alias: 'Two Bedrooms to Three Bedrooms',content: {title: '$80每小时 - 6吨卡车',cont: '28+立方米空间<br>适合两房至三房搬家<br>$80每小时（两位师傅加一台卡车）<br>2小时起<br>按距离远近收取回程费用<br>',id: 2}},
        {name: '10顿卡车',alias: 'Three Bedrooms or more',content: {title: '$85每小时 - 10吨卡车',cont: '40+立方米空间<br>适合三房以上及办公室搬运<br>$85每小时（两位师傅加一台卡车）<br>2小时起<br>按距离远近收取回程费用<br>',id: 3}},
        {name: '$250+',alias: 'One Bedroom Cleaning',content: {title: '$250起 一房一卫清洁 ',cont: '专业退租清洁<br>1个卧室加1个洗手间以及阳台客厅<br>包含地毯蒸汽清洗<br>墙壁和百叶窗帘不包含<br>保证磅金退回<br> ',id: 4}},
        {name: '$350+',alias: 'Two Bedroom Cleaning',content: {title: '$350起 - 两房两卫清洁',cont: '专业退租清洁<br>2个卧室加2个洗手间以及阳台和客厅<br>包含地毯蒸汽清洗<br>墙壁和百叶窗帘不包含<br>保证磅金退回<br>',id: 5}},
        {name: '$450+',alias: 'Three Bedroom Cleaning',content: {title: '$450起 - 三房两卫清洁',cont: '专业退租清洁<br>3个卧室加2个洗手间以及阳台和客厅<br>包含地毯蒸汽清洗<br>墙壁和百叶窗帘不包含<br>保证磅金退回<br> ',id: 6}}
      ],
      bannerCont: {
        id: null,
        title: null,
        cont: null,
      }
    }
  },
  created () {
    this.bannerCont = this.bannerList[0].content
  },
  mounted () {
    document.body.offsetWidth < 415 ? this.show = true :
    window.addEventListener('scroll',this.handleScroll,true)
  },
  methods: {
    handleScroll(e){
      console.log(document.documentElement.scrollTop,document.body.scrollTop)
      document.documentElement.scrollTop > 79 ? this.show = true : this.show = false
    },
    bannBBmove (v) {
      let {title,cont,id} = v
      this.bannerCont = {title,cont,id}
      this.$refs.bannBl.style.transition = '.1s'
      this.$refs.bannBl.style.opacity = '.3'
      this.$refs.bannBl.style.left = '-400px'
      this.$refs.bannBr.style.transition = '.1s'
      this.$refs.bannBr.style.opacity = '.3'
      this.$refs.bannBr.style.left = '99%'
      this.$refs.hg.style.transition = '.1s'
      this.$refs.hg.style.width = '0'
      setTimeout(v => {
        this.$refs.bannBl.style.transition = '.5s'
        this.$refs.bannBl.style.opacity = '1'
        this.$refs.bannBl.style.left = '-300px'
        this.$refs.bannBr.style.transition = '.5s'
        this.$refs.bannBr.style.opacity = '1'
        this.$refs.bannBr.style.left = '96%'
        this.$refs.hg.style.transition = '.5s'
        this.$refs.hg.style.width = '320px'
      },100)
    }
  },
}
</script>