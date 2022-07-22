<template>
  
    
    <div class="mainContent">
      <BreadCrumb :crumbdata="toCrumbData"></BreadCrumb>
      <h1 style="font-weight:800;font-size:1.5em;text-align:center;margin:40px 0;color:#253671;">{{copyData.title}}</h1>
      <div style="font-weight:800">【导读】{{copyData.guidedReading}}</div>
      <div ref="newsDetailContent" style="text-align:center">暂无数据</div>
      <div style="display:flex;width:100%; justify-content: space-between;margin:30px 0">
        <a href="3401.htm">上一篇</a>
        <a href="1242.htm">下一篇</a>
      </div>
    </div>

</template>

<script>
import {reqNewsDetailData} from "@/api"
export default {
  name: "newsdetail",

  data() {
    return {
      toCrumbData:["2","3","4"],
      copyData: null,
    };
  },
  mounted() {
   
    this.goSearch(this.$route.query._id);
  },
  methods: {
   async goSearch(val) {
    
      let r = await reqNewsDetailData(val);
   
      this.copyData=r.data[0]
      let str=""
      this.copyData.article.forEach(res=>{
        if(res.t){
          str+=`<p style="margin:10px 0;text-align:justify">${res.t}</p>`
        }else{
          str+=`<img src="${res.i}" width=60% ></img>`
        }
      })
       this.$nextTick(()=>{
          this.$refs.newsDetailContent.innerHTML=str
       })
     
      //this.$refs.newsDetailContent.innerHTML=str
      let tempStr='"' +r.data[0].title.slice(0,6)+'...'+'"' 

       this.toCrumbData = this.$route.meta.cPath.concat(tempStr);
    },
  },
};
</script>

<style scoped>
  .mainContent{
    text-indent: 2em;
    width: 70%;
    line-height: 1.8em;
   
    margin:0 auto;

  text-align:justify;
 
  }
</style>