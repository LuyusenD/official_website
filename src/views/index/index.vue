<template>
  <!-- chinese -->
  <div id="box" v-if="isChinese">
    <div class="setColor-nav">
      <div class="nav max">
        <img src="../../assets/time.png">
        <span>周一 - 周日: 9AM - 7PM</span>
        <img src="../../assets/location.png" class="location">
        <span>中国大陆 广东省 深圳市 </span>
      </div>
    </div>
    <div class="setColor-title">
      <div class="title max">
        <div class="iphone">
          联系电话<br>
          <span>0488 0289 19</span>
        </div>
        <img src="../../assets/logo.png">
        <a href="javascript:;" class="zxbj" @click="to">咨询报价</a>
      </div>
    </div>
    <!-- 滚动后的导航栏 -->
    <div class="setColor-nav"  v-show="show" style="position:fixed;z-index:999;width: 100%;background:#002b2f;top: 0;">
      <div class="nav max">
        <img src="../../assets/time.png">
        <span>周一 - 周日: 9AM - 7PM</span>
        <img src="../../assets/location.png" class="location">
        <span>中国大陆 广东省 深圳市</span>
        <button @click="changeL">语言：中文</button>
      </div>
    </div>
    <!-- <div class="setColor-title" v-show="show" style="position:fixed;z-index:999;width: 100%;background:#fff;top: 36px;border-bottom:1px solid #ccc;">
      <div class="title max">
        <div class="iphone">
          联系电话<br>
          <span>0488 0289 19</span>
        </div>
        <img src="../../assets/logo.png">
        <a href="javascript:;" class="zxbj">咨询报价</a>
      </div>
    </div> -->
    <!-- 横幅 -->
    <div class="setColor-banner">
      <img src="../../assets/banner.jpg" ondragstart="return false;" oncontextmenu="return false;">
      <div class="banner">
        <div class="banner-bb">
          <div ref='bannBl'></div>
          <div ref='bannBr'></div>
        </div>
        <div class="banner-cont">
          <!-- 添加动画效果 -->
          <transition enter-active-class="animated fadeInUp" 
          :duration="1000">
            <h1 v-if="show">{{bannerCont.title}}</h1>
          </transition>
            <i ref="hg"></i>
          <transition enter-active-class="animated fadeInDown" 
          :duration="1000">
            <p v-if="show" v-html="bannerCont.cont"></p>
          </transition>
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
          <transition enter-active-class="animated fadeInUp" :duration="1000">
            <div class="title" v-if="showTitle">
                <span>我们提供的服务</span>
            </div>
          </transition>
          <transition enter-active-class="animated fadeInUp" :duration="1000">
            <div class="server-item" v-if="showContent">
              <div v-for="(item,i) in serverList" :key="i">
                <img :src="item.url">
                <h3>{{item.title}}</h3>
                <p>{{item.cont}}</p>
              </div>
            </div>
          </transition>
      </div>
     </div>
    <div class="setColor-cn">
      <div class="cn max">
        <transition enter-active-class="animated fadeInUp" :duration="1000">
            <div class="title" v-if="showCom">
                <span>我们的承诺</span>
            </div>
          </transition>
        <div class="commitment">
          <img src="../../assets/cntp1.png">
          <img src="../../assets/cntp2.jpg">
          <img src="../../assets/cntp3.png">
        </div>
      </div>
     </div>
    <div class="setColor-fyt">
      <div class="fw">
        <div>
          <img src="../../assets/fw.jpg">
        </div>
        <div>
          <transition enter-active-class="animated fadeInRight" :duration="1000">
            <div class="fw-box" v-if="showRight">
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
          </transition>
        </div>
      </div>
      <div class="fy">
        <div>
          <transition enter-active-class="animated fadeInLeft">
          <div class="fy-box" v-if="showLeft">
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
          </transition>
        </div>
        <div>
          <img src="../../assets/fy.jpg">
        </div>
      </div>
     </div>
    <div class="setColor-bj" >
      <img src="../../assets/banner.jpg" ondragstart="return false;" oncontextmenu="return false;">
      <transition enter-active-class="animated fadeIn">
        <div class="bj" v-if="showOffer">
          <div >
            <h2>赶快! 立即联系我们获取</h2>
            <p>免费第一次报价</p>
            <a href="javascript:;">预订报价</a>
          </div>
        </div>
      </transition>
     </div>
     <div class="setColor-toast">
      <div class="cn max">
        <transition enter-active-class="animated fadeInUp">
          <div class="title" v-if="showPrompt">
            <span>有用的提示</span>
          </div>
        </transition>
        <transition enter-active-class="animated fadeInUp">
          <div class="cont" v-if="showPromptDel">
            <div v-for="(item,i) in toastList" :key="i">
              <img :src="item.url" alt="">
              <div>
                <h2>{{item.title}}</h2>
                <i></i>
                <h5>点击查询详情></h5>
              </div>
            </div>
          </div>
        </transition>
      </div>
     </div>
    <div class="setColor-email" ref="dom">
      <transition enter-active-class="animated fadeInUp">
        <div class="cn max" v-if="showReserve">
          <div class="title">
            <span>现在预订! </span>
          </div>
          <h5>悉尼家易搬运可以让您顺畅地体验穿越城市或穿越整个州或全国各地。 您只需要一个能够快速联系到您的报价，您就可以完成交易并立即开始行动！</h5>
          <div class="cont">
            <input type="text" placeholder="姓名" v-model="sName">
            <input type="text" placeholder="电子邮箱" v-model="sEmail">
            <input type="text" placeholder="电话" v-model="sPhone">
            <textarea cols="30" rows="10" v-model="sContent"></textarea>
            <a href="javascript:;" @click="add()">联系我们</a>
          </div>
        </div>
      </transition>
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
            <span>广东省 深圳市</span>
          </p>
        <p>
          联系电话:<br>
          <span>0488 0289 19</span>
        </p>
        <p>
          电子邮箱:<br>
          <span>401861591@qq.com</span>
        </p>
      </div>
    </div>
  </div>
  <!-- english -->
  <div id="box" v-else>
    <div class="setColor-nav">
      <div class="nav max">
        <img src="../../assets/time.png">
        <span>Mon - Sun: 9AM - 7PM</span>
        <img src="../../assets/location.png" class="location">
        <span>China guangdong Shenzhen</span>
      </div>
    </div>
    <div class="setColor-title">
      <div class="title max">
        <div class="iphone">
          GET FREE QUOTE<br>
          <span>0488 0289 19</span>
        </div>
        <img src="../../assets/logo.png">
        <a href="javascript:;" class="zxbj">GET QUOTE</a>
      </div>
    </div>
    <!-- 滚动后的导航栏 -->
    <div class="setColor-nav"  v-show="show" style="position:fixed;z-index:999;width: 100%;background:#002b2f;top: 0;">
      <div class="nav max">
        <img src="../../assets/time.png">
        <span>Mon - Sun: 9AM - 7PM</span>
        <img src="../../assets/location.png" class="location">
        <span>China guangdong Shenzhen</span>
        <button @click="changeL">Language:English</button>
      </div>
    </div>
    <!-- <div class="setColor-title" v-show="show" style="position:fixed;z-index:999;width: 100%;background:#fff;top: 36px;border-bottom:1px solid #ccc;">
      <div class="title max">
        <div class="iphone">
          GET FREE QUOTE<br>
          <span>0488 0289 19</span>
        </div>
        <img src="../../assets/logo.png">
        <a href="javascript:;" class="zxbj">GET QUOTE</a>
      </div>
    </div> -->
    <!-- 横幅 -->
    <div class="setColor-banner">
      <img src="../../assets/banner.jpg" ondragstart="return false;" oncontextmenu="return false;">
      <div class="banner">
        <div class="banner-bb">
          <div ref='bannBl'></div>
          <div ref='bannBr'></div>
        </div>
        <div class="banner-cont">
          <!-- 添加动画效果 -->
          <transition enter-active-class="animated fadeInUp" 
          :duration="1000">
            <h1 v-if="show">{{bannerCont.title}}</h1>
          </transition>
            <i ref="hg"></i>
          <transition enter-active-class="animated fadeInDown" 
          :duration="1000">
            <p v-if="show" v-html="bannerCont.cont"></p>
          </transition>
          <a href="javascript:;">VIEW DETAILS</a>
        </div>
        <div class="banner-btn">
          <!-- <button @click="bannBBmove">1</button> -->
          <a href="javascript:;" v-for="(item,i) in bannerListEN" :key="i" @click="bannBBmove(item.content)" :class="{active:item.content.id === bannerCont.id ? true : false}">{{item.name}}<br>{{item.alias}}</a>
        </div>
      </div>
    </div>
    <div class="setColor-server">
      <div class="server max">
          <transition enter-active-class="animated fadeInUp" :duration="1000">
            <div class="title" v-if="showTitle">
                <span>Services We Provide</span>
            </div>
          </transition>
          <transition enter-active-class="animated fadeInUp" :duration="1000">
            <div class="server-item" v-if="showContent">
              <div v-for="(item,i) in serverListEN" :key="i">
                <img :src="item.url">
                <h3>{{item.title}}</h3>
                <p>{{item.cont}}</p>
              </div>
            </div>
          </transition>
      </div>
     </div>
    <div class="setColor-cn">
      <div class="cn max">
        <transition enter-active-class="animated fadeInUp" :duration="1000">
            <div class="title" v-if="showCom">
                <span>We Guarantee That</span>
            </div>
          </transition>
        <div class="commitment">
          <img src="../../assets/cntp1.png">
          <img src="../../assets/cntp2.jpg">
          <img src="../../assets/cntp3.png">
        </div>
      </div>
     </div>
    <div class="setColor-fyt">
      <div class="fw">
        <div>
          <img src="../../assets/fw.jpg">
        </div>
        <div>
          <transition enter-active-class="animated fadeInRight" :duration="1000">
            <div class="fw-box" v-if="showRight">
              <h2>Outstanding Services</h2>
              <div class="fw-txts">
                <div>
                  <img src="../../assets/fw-1.png">
                  <h3>Friendly customer service</h3>
                  <p>An approachable team you can get to know on a personal level</p>
                </div>
                <div>
                  <img src="../../assets/fw-2.png">
                  <h3>Safety</h3>
                  <p>Safe services for both employees and our clients</p>
                </div>
                <div>
                  <img src="../../assets/fw-3.png">
                  <h3>Flexible for urgent issues</h3>
                  <p>We are not limited by operating hours. Our crew is happy to offer 24 hour assistance for urgent matters (fees may vary)</p>
                </div>
                <div>
                  <img src="../../assets/fw-4.png">
                  <h3>Support available</h3>
                  <p>Supportive and understanding crew that adapts to be flexible to your needs</p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="fy">
        <div>
          <transition enter-active-class="animated fadeInLeft">
          <div class="fy-box" v-if="showLeft">
            <h2>Extra Fees</h2>
            <div>
              <div><img src="../../assets/1.png"></div>
              <div>
                <p>Stair fees</p>
                <span>$15 extra per flight of stairs. Stairs that are 10 steps or lower require no extra fees</span>
              </div>
            </div>
            <div>
              <div class="w-104"><img src="../../assets/2.png"></div>
              <div>
                <p>Weight fees</p>
                <span>Extra fees may apply to heavier items like; piano, massage chair, marble table, large fish tank etc. Contact us for a quotation on weight fees</span>
              </div>
            </div>
            <div>
              <div class="w-104"><img src="../../assets/3.png"></div>
              <div>
                <p>Packaging fees</p>
                <span>Inform ahead of service if packaging is required and if packaging supplies need to be delivered before the move. Packaging includes: bubble wrap, butchers paper, boxes etc. for small items</span>
              </div>
            </div>
          </div>
          </transition>
        </div>
        <div>
          <img src="../../assets/fy.jpg">
        </div>
      </div>
     </div>
    <div class="setColor-bj" >
      <img src="../../assets/banner.jpg" ondragstart="return false;" oncontextmenu="return false;">
      <transition enter-active-class="animated fadeIn">
        <div class="bj" v-if="showOffer">
          <div >
            <h2>Hurry up! Contact us today and get</h2>
            <p>FREE FIRST QUOTATION</p>
            <a href="javascript:;">BOOK YOUR QUOTATION</a>
          </div>
        </div>
      </transition>
     </div>
     <div class="setColor-toast">
      <div class="cn max">
        <transition enter-active-class="animated fadeInUp">
          <div class="title" v-if="showPrompt">
            <span>Useful Tips</span>
          </div>
        </transition>
        <transition enter-active-class="animated fadeInUp">
          <div class="cont" v-if="showPromptDel">
            <div v-for="(item,i) in toastListEN" :key="i">
              <img :src="item.url" alt="">
              <div>
                <h2>{{item.title}}</h2>
                <i></i>
                <h5>Click to view details></h5>
              </div>
            </div>
          </div>
        </transition>
      </div>
     </div>
    <div class="setColor-email" ref="dom">
      <transition enter-active-class="animated fadeInUp">
        <div class="cn max" v-if="showReserve">
          <div class="title">
            <span>BOOK US NOW!</span>
          </div>
          <h5>HOME EASY can give you a smooth experience of moving across the city or across the state or across the country. You just have to request  a quote which will quickly reach you and you can finish the deal and start moving almost within no time!</h5>
          <div class="cont">
            <input type="text" placeholder="Name" v-model="sName">
            <input type="text" placeholder="E-mail" v-model="sEmail">
            <input type="text" placeholder="Telephone" v-model="sPhone">
            <textarea cols="30" rows="10" v-model="sContent"></textarea>
            <a href="javascript:;" @click="add()">Send Message</a>
          </div>
        </div>
      </transition>
     </div>
    <div class="foot">
      <div class="logo">
        <img src="../../assets/footlogo.png">
        <p>Home Easy Removalists Sydney</p>
        <a href="javascript:;">Get free quotation!</a>
      </div>
      <div class='cont'>
        <p>Contact Info</p>
          <p>
            Address:<br>
            <span>1 Railway Parade Burwood</span>
          </p>
        <p>
          Phone number:<br>
          <span>0488028919</span>
        </p>
        <p>
          Email:<br>
          <span>401861591@qq.com</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss'
import { setTimeout } from 'timers';
import animated from '../../../public/animate.css';

export default {
  data () {
    return {
      show: false,
      showTitle:false,
      showContent:false,
      showCom:false,
      showLeft:false,
      showRight:false,
      showOffer:false,
      showPrompt:false,
      showPromptDel:false,
      showReserve:false,
      toastList:[
        {title: '8个非常有用的提示,让您的孩子应对移动',url: require('../../assets/toast1.png')},
        {title: '如何包装菜肴和玻璃移动',url: require('../../assets/toast2.png')},
        {title: '移动家具时节省时间和金钱的3个技巧',url: require('../../assets/toast3.png')},
        {title: '3种方式标记您的移动箱像专业人士',url: require('../../assets/toast4.png')},
      ],
      toastListEN:[
        {title: '8 Very Helpful For Your Children To Cope With Moving',url: require('../../assets/toast1.png')},
        {title: 'How To Pack Dishes and Glasses For Moving',url: require('../../assets/toast2.png')},
        {title: '3 Tips to Save Time and Money When Moving Your Furniture',url: require('../../assets/toast3.png')},
        {title: '3 Ways Of Labelling Your Moving Boxes Like A Pro',url: require('../../assets/toast4.png')},
      ],
      serverList:[
        {title: '家庭搬家',cont:'我们有最专业的员工，在确保家具安全的同时，以最合理的价格为客户提供最优质的服务.',url: require('../../assets/moveHome.png')},
        {title: '办公室搬运',cont:'为您提供最快速便捷的服务，节省办公室搬迁的时间，让您可以拥有实惠价格的同时有更多时间专注于您的重要业务',url: require('../../assets/bgsMove.png')},
        {title: '清洁服务',cont:'方便，快捷，高效的清洁服务，以合理的价格以及高于中介的退租标准，让您轻松拿回押金。',url: require('../../assets/clean.png')},
        {title: '洲际长途搬运',cont:'以合理的价格，门到门的服务，安全、高效、省心。让您不必再为长途搬家而烦恼。',url: require('../../assets/banyun.png')}
      ],
      serverListEN:[
        {title: 'Home Removals',cont:'Professional employees allow us to ensure the safety of our customers while also providing clients with the highest quality of service at an affordable price',url: require('../../assets/moveHome.png')},
        {title: 'Office Relocation',cont:'Saves your time on office relocation through efficient services so you can focus more on the important aspects of your business at an affordable price',url: require('../../assets/bgsMove.png')},
        {title: 'Cleaning Services',cont:'Convenient, quick and efficient clean up services for end of lease cleaning at an affordable price',url: require('../../assets/clean.png')},
        {title: 'Interstate Removals',cont:'Interstate removals that adapt to customer flexibility at an affordable price',url: require('../../assets/banyun.png')}
      ],
      bannerList:[
        {name: '4.5顿卡车',alias: '单间至两室',content: {title: '$75/小时 - 4.5吨卡车',cont: '20+立方米空间<br>适合一房及两房搬家<br>$75每小时（两位师傅加一台卡车）<br>2小时起<br>按距离远近收取回程费用<br> ',id: 1}},
        {name: '6顿卡车',alias: '两室到三室',content: {title: '$80每小时 - 6吨卡车',cont: '28+立方米空间<br>适合两房至三房搬家<br>$80每小时（两位师傅加一台卡车）<br>2小时起<br>按距离远近收取回程费用<br>',id: 2}},
        {name: '10顿卡车',alias: '三室以上',content: {title: '$85每小时 - 10吨卡车',cont: '40+立方米空间<br>适合三房以上及办公室搬运<br>$85每小时（两位师傅加一台卡车）<br>2小时起<br>按距离远近收取回程费用<br>',id: 3}},
        {name: '$250+',alias: '一间卧室清洁',content: {title: '$250起 一房一卫清洁 ',cont: '专业退租清洁<br>1个卧室加1个洗手间以及阳台客厅<br>包含地毯蒸汽清洗<br>墙壁和百叶窗帘不包含<br>保证磅金退回<br> ',id: 4}},
        {name: '$350+',alias: '二间卧室清洁',content: {title: '$350起 - 两房两卫清洁',cont: '专业退租清洁<br>2个卧室加2个洗手间以及阳台和客厅<br>包含地毯蒸汽清洗<br>墙壁和百叶窗帘不包含<br>保证磅金退回<br>',id: 5}},
        {name: '$450+',alias: '三间卧室清洁',content: {title: '$450起 - 三房两卫清洁',cont: '专业退租清洁<br>3个卧室加2个洗手间以及阳台和客厅<br>包含地毯蒸汽清洗<br>墙壁和百叶窗帘不包含<br>保证磅金退回<br> ',id: 6}}
      ],
      bannerListEN:[
        {name: '4.5 TON',alias: 'Studio to Two Bedrooms',content: {title: '$75 FOR 4.5 TON',cont: '20+ Cubic Meter<br>Studio to Two Bedrooms<br>$75 per hours(Truck + 2 Men)<br>2 Hr Minimum charge<br>Plus call out fee<br> ',id: 1}},
        {name: '6 TON',alias: 'Two Bedrooms to Three Bedrooms',content: {title: '$80 FOR 6 TON',cont: '28+ Cubic Meter<br>Two Bedrooms to Three Bedrooms<br>$80 per hours(Truck + 2 Men)<br>2 Hr Minimum charge<br>Plus call out fee<br>',id: 2}},
        {name: '10 TON',alias: 'Three Bedrooms or more',content: {title: '$85 FOR 10 TON',cont: '40+ Cubic Meter<br>Three Bedrooms or more<br>$85 per hours(Truck + 2 Men)<br>2 Hr Minimum charge<br>Plus call out fee<br>',id: 3}},
        {name: '$250+',alias: 'One Bedroom Cleaning',content: {title: '$250 ONE BEDROOM CLEAN',cont: 'End of Lease Clean<br>1 bedroom + 1 bathroom<br>Including carpet steam<br>Blinds & Walls are NOT included <br>Bond Back Guarantee<br> ',id: 4}},
        {name: '$350+',alias: 'Two Bedroom Cleaning',content: {title: '$350 TWO BEDROOM CLEAN',cont: 'End of Lease Clean<br>2 bedroom + 2 bathroom<br>Including carpet steam<br>Blinds & Walls are NOT included <br>Bond Back Guarantee<br> ',id: 5}},
        {name: '$450+',alias: 'Three Bedroom Cleaning',content: {title: '$450 THREE BEDROOM CLEAN',cont: 'End of Lease Clean<br>3 bedroom + 2 bathroom<br>Including carpet steam<br>Blinds & Walls are NOT included <br>Bond Back Guarantee<br> ',id: 6}}
      ],
      bannerCont: {
        id: null,
        title: null,
        cont: null,
      },
      isChinese:true,
      sName:'',
      sEmail:'',
      sPhone:'',
      sContent:''
    }
  },
  created () {
    this.bannerCont = this.bannerList[0].content
  },
  mounted () {
    // document.body.offsetWidth < 415 ? this.show = true :
    window.addEventListener('scroll',this.handleScroll,true)
    this.show=true;
  },
  methods: {
    // 滚动到指定位置，加载动画
    handleScroll(e){
      // console.log(document.documentElement.scrollTop)
      document.body.offsetWidth < 415 ?(
        // 手机版
        window.pageYOffset>265?this.showTitle=true:this.showTitle=false,
        window.pageYOffset>460?this.showContent=true:this.showContent=false,
        window.pageYOffset>1829?this.showCom=true:this.showCom=false,
        window.pageYOffset>3500?this.showRight=true:this.showRight=false,
        window.pageYOffset>4257?this.showLeft=true:this.showLeft=false,
        window.pageYOffset>5584?this.showOffer=true:this.showOffer=false,
        window.pageYOffset>5884?this.showPrompt=true:this.showPrompt=false,
        window.pageYOffset>6100?this.showPromptDel=true:this.showPromptDel=false,
        window.pageYOffset>6910?this.showReserve=true:this.showReserve=false
      ):(
        // 电脑版
        window.pageYOffset>299?this.showTitle=true:this.showTitle=false,
        window.pageYOffset>599?this.showContent=true:this.showContent=false,
        // 后面都是图片，会顶下去
        window.pageYOffset>970?this.showCom=true:this.showCom=false,
        window.pageYOffset>1700?this.showRight=true:this.showRight=false,
        window.pageYOffset>2500?this.showLeft=true:this.showLeft=false,
        window.pageYOffset>3200?this.showOffer=true:this.showOffer=false,
        window.pageYOffset>3400?this.showPrompt=true:this.showPrompt=false,
        window.pageYOffset>3600?this.showPromptDel=true:this.showPromptDel=false,
        window.pageYOffset>4000?this.showReserve=true:this.showReserve=false
      )
    },
    bannBBmove (v) {
      this.show=!this.show;
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
        this.show=true;
      },100)
    },
    changeL(){
      this.isChinese=!this.isChinese;
      if(this.isChinese){
        this.bannerCont = this.bannerList[this.bannerCont.id-1].content
      }else{
        this.bannerCont = this.bannerListEN[this.bannerCont.id-1].content
      }
      this.bannBBmove(this.bannerCont);
    },
    // 添加邮件
    add(){
      var url="http://27.54.93.34:5050/add";
      this.axios.get(url,{params:{sName:this.sName,sEmail:this.sEmail,sPhone:this.sPhone,sContent:this.sContent}}).then(res=>{
        if(res.data=='1'){
          if(this.isChinese){
            alert('谢谢您的配合')
          }else{
            alert('Thank you for your cooperation')
          }
        }
      })
    },
    to () {
      document.body.scrollTop = this.$refs.dom.offsetTop
      window.pageYOffset = this.$refs.dom.offsetTop
      document.documentElement.scrollTop = this.$refs.dom.offsetTop
    }
  },
}
</script>