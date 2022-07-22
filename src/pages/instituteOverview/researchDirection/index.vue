<!--  -->
<template>
  <div class="mainFrame">
      <pageTitle>研究方向</pageTitle>
    <div class="mainFrameA">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in dir">
          <div class="researchDir">
            <span :class="item.iconClass"></span>
            <p class="dirName"> {{item.title}}</p>
            <p class="dirContent"  >测试在流体装备产品的研制、出厂和检验过程中都十分重要，能够有助于直观的发现和帮助解决产品存在的问题。流体装备测试技术的研究与发展对于流体装备基础理论的研究和发展、流体装备性能的改进、流体装备设计方法的创新等都有着极其重要的作用。</p>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "researchDirection",
  data() {
    return {
      dir:[
        {
        title:"流体装备检测技术的研究",
        iconClass:"iconfont icon-fengji"
      },
      {
        title:"流体装备标准化技术的研究",
        iconClass:"iconfont icon-weifaguizeguanli"
      },
      {
        title:"流体装备的基础理论与工程应用",
        iconClass:"iconfont icon-zhinengsuanfa"
      },
      {
        title:"流体装备智能控制及监测技术研究",
        iconClass:"iconfont icon-liutijixie"
      }
      ]
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>

.mainFrame {
  text-align: center;
}
.mainFrameA {
  width: 80%;
  
  margin: 100px auto;
}
.researchDir {
  padding-top: 100px;
  padding-bottom: 45px;
  text-align: center;
  color:#409EFF;

  cursor: pointer;

}

.researchDir:hover {
  color: rgb(255, 255, 255);
  background-color: #253671;
  transform: scale(1.1);
  transition: all 1.4s ease 0s;
}
.dirName{
  margin-top:30px;
  font-size: 1.3rem;
  font-weight: 700;
}
.dirContent{
 color:#fefeff;
 padding:10px;
 text-align:left;
 text-indent:2em
}

</style>
