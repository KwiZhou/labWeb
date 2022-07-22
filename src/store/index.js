import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//对外暴露store的一个实例
export default new Vuex.Store({
    state: { // 存放数据 和data类似
        tempnewsdata:{}
    },
    mutations: { // 用来修改state和getters里面的数据
        GETNEWSPAGEDATA(state,tempNewsdData){
              state.tempnewsdata=tempNewsdData
        }
    },
    getters: { // 相当于计算属性
       
    },
    actions: { // vuex中用于发起异步请求
         getNewsPageData({commit},e){
            if(e!=null){
                commit("GETNEWSPAGEDATA",e)
            }
        }
    },
    modules: {// 拆分模块

    }
  
    
}) 