//引入vue-router路由插件
import VueRouter from "vue-router";
//引入Vue
import Vue from "vue";
//使用插件
import routes from "./routes";
Vue.use(VueRouter);
//VueRouter类的实例
let router = new VueRouter({
    //配置路由
    //第一:路径的前面需要有/(不是二级路由)
    //路径中单词都是小写的
    //component右侧V别给我加单引号【字符串：组件是对象（VueComponent类的实例）】
    routes
  });


//对外暴露VueRouter类的实例
export default router;