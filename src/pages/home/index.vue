<!--  -->
<template>
  <div class="mainFrame">
    <Carousel :carouseldata="bigCarouselData" :autoplay="autoplay" />
    <News />
    <researchDirection/>
    <mentorList/>
  </div>
</template>
<script>
import News from "./News";
import researchDirection from "../instituteOverview/researchDirection"
import mentorList from "../researchTeam/mentorList"
export default {
  name: "home",
  components: {
    News,
    researchDirection,
    mentorList
  },
  data() {
    return {
      autoplay: true,
      carouselheight: "550px",
      bigCarouselData: [
        {
          _id: "21",
          imgUrl:
            "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/pagecover/keith-luke-GUAcpXPyFRc-unsplash%20(1).jpg?sign=5e86dbc409930ea885cb394cc81d468d&t=1656951204",
        },
        {
          _id: "211",
          imgUrl:
            "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/pagecover/keith-luke-GUAcpXPyFRc-unsplash%20(1).jpg?sign=5e86dbc409930ea885cb394cc81d468d&t=1656951204",
        },
        {
          _id: "2111",
          imgUrl:
            "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/pagecover/keith-luke-GUAcpXPyFRc-unsplash%20(1).jpg?sign=5e86dbc409930ea885cb394cc81d468d&t=1656951204",
        },
        {
          _id: "21111",
          imgUrl:
            "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/pagecover/keith-luke-GUAcpXPyFRc-unsplash%20(1).jpg?sign=5e86dbc409930ea885cb394cc81d468d&t=1656951204",
        },
      ],
    };
  },

  methods: {},
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>
