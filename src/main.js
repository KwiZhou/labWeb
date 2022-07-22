import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "./router";
import 'element-ui/lib/theme-chalk/base.css';
//iconfont
import "./assets/icons/iconfont.css"
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
//const cloudbase = require("@cloudbase/js-sdk");
//全局组件注册
  //pageTitle
  import pageTitle from "@/components/pageTitle"
  Vue.component(pageTitle.name, pageTitle);
  //轮播图
import Carousel from "@/components/Carousel"
Vue.component(Carousel.name, Carousel);
  //显示成果面板
import PaperPanel from "@/components/PaperPanel"
Vue.component(PaperPanel.name, PaperPanel);
  //面包屑
import BreadCrumb from "@/components/BreadCrumb"
Vue.component(BreadCrumb.name,BreadCrumb)
   //vuex引入
//import store from '@/store'  

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router,
//store
}).$mount('#app')
