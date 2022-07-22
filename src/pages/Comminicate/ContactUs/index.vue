<!--  -->
<template>
  <div class="mainFrame">
    <pageTitle>联系我们</pageTitle>

    <div class="content">
      <div class="content-item">
        <el-divider content-position="left"
          ><p class="title">泵试验台设计与研究</p></el-divider
        >
        <p style="text-align: justify; text-indent: 2em">
          中国计量大学流体装备及检测技术研究所主要从事流体机械优化设计、泵综合实验台设计、流体机械智能控制与驱动技术和泵标准化研究工作。研究所通过整合不同学科技术研发能力，可独立开展泵试验台设计研发工作。根据GB/T
          3216和GB/T
          12785标准技术规范，负责泵试验台总体设计研发，为企业提供泵开式试验台和闭式试验台的设计、制造、施工及调试等一站式服务。泵试验台系统设计涵盖开式水池设计、测试管路系统设计、闭式压力罐设计、测量信号采集与传输系统设计、动力配电系统设计（高压/中低压）、泵综合性能测试软件开发等关键环节。力求为企业提供一站式的系统化解决方案，满足企业实际生产和研发测试需求。欢迎企业莅临交流和合作。
        </p>
      </div>
      <div class="content-item">
        <el-divider content-position="left"
          ><p class="title">联系人</p></el-divider
        >
        <p style="text-align: left; text-indent: 2em">
          牟介刚教授，13857135658
        </p>

        <p style="text-align: left; text-indent: 2em">
          吴登昊副教授，13588395807
        </p>
      </div>
      <div class="content-item">
        <el-divider content-position="left"
          ><p class="title">地址</p></el-divider
        >

        <p style="text-align: justify; text-indent: 2em">
          浙江杭州市学源街258号 中国计量大学
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.mainFrame {
  text-align: center;
  width: 70%;
  margin: 0 auto;
}

.title {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 3rem;
}
.content-item{
  margin:60px 0;
}
</style>
