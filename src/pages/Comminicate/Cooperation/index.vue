<!--  -->
<template>
  <div class="mainFrame">
    <pageTitle>校企合作</pageTitle>
     <p style="margin: 25px 0 45px 0">
      流体装备与检测技术研究所将集中优势资源以立德树人为根本任务，以学生发展为中心，突破传统路径依赖，充分发挥校企双方优势，深化产教融合。
    </p>

    <el-row :gutter="10"  v-for="item in imgURL">
      <el-col
        v-for="itemSon in item"
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
      >
      <div style="margin:24px">
          <img :src="itemSon" width="380px" height="230px"/>
      </div>
      </el-col>
    </el-row>
  
  </div>
</template>

<script>
export default {
  name: "Cooperation",
  data() {
    return {
      imgURL: [
            [ 
              "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/Cooperation/xj/%E6%96%B0%E7%95%8C%E4%BA%A4%E6%B5%811.pic.jpg?sign=90b9b9f6636851038ad3b6a18e535209&t=1658057539",
              "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/Cooperation/xj/%E6%96%B0%E7%95%8C%E4%BA%A4%E6%B5%812.pic.jpg?sign=a753a178fed8dd29e2d345abf25938d1&t=1658057560",
              "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/Cooperation/xj/%E6%96%B0%E7%95%8C%E4%BA%A4%E6%B5%813.pic.jpg?sign=9fad316f9fae24cd03f6eca18ecfe5a6&t=1658057564",
            ],
            [ 
              "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/Cooperation/xj/%E6%96%B0%E7%95%8C%E4%BA%A4%E6%B5%813.pic.jpg?sign=9fad316f9fae24cd03f6eca18ecfe5a6&t=1658057564",
        "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/Cooperation/xj/%E6%96%B0%E7%95%8C%E4%BA%A4%E6%B5%814.pic.jpg?sign=1aca79e62a3e97b05acc9a334b510181&t=1658057568",
"https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/Cooperation/xj/%E6%96%B0%E7%95%8C%E4%BA%A4%E6%B5%813.pic.jpg?sign=9fad316f9fae24cd03f6eca18ecfe5a6&t=1658057564",
              ]
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.mainFrame {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
