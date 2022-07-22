<!--  -->
<template>
  <div class="mainFrame" >
   
    <pageTitle>研究所简介</pageTitle>
    <div ref="introduceContent" style="width:70%;margin:0 auto"> </div>
     
  </div>
</template>

<script>
import {reqIntrduceDate} from "@/api"
export default {
  name: "Introduce",
  data() {
    return {
        introduceData:null
    };
  },
  mounted() {
    this.goSearch()
  },
  methods: {
  async goSearch() {
      let r=await reqIntrduceDate()
      this.introduceData=r.data[0].article
      let str=""
      this.introduceData.forEach(res=>{
        if(res.t){
          str+=`<p style="margin:10px 0;text-align:left;">${res.t}</p>`
        }else{
          str+=`<img src="${res.i}" width=60%></img>`
        }
      })
       this.$nextTick(()=>{
          this.$refs.introduceContent.innerHTML=str
       })
     
    }
  },
};
</script>
<style scoped>
.mainFrame{
  text-align: center;
  text-indent:2em;
  line-height: 1.8em;
}

</style>
