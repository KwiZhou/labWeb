<template>
  <div>
    <div
      style="width: 80%; margin: 0 auto; text-align: center; padding: 50px 0"
    >
    <pageTitle>新闻动态</pageTitle>
     

      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
          <el-card class="box-card">
            <div v-for="item in fourNewsData" :key="item.key" class="text item" >
              <el-card
                :body-style="{ padding: '20px' }"
                shadow="hover"
                @mouseover.native="hoverNewsItem(item._id)"
                >
                <p
                  style="
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  "
                >{{ item.title }}</p>
              </el-card>
            </div>
          </el-card>
          <div class="moreDiv">
            <el-button round plain type="info" @click="toGo"
              ><i class="el-icon-d-arrow-left"></i> 更多新闻</el-button
            >
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="18" :lg="16" :xl="16">
          <Carousel />
          <Carousel
            ref="newsCarousel"
            :carouseldata="fourNewsData"
            :autoplay="autoplay"
            :showwhat="showWhat"
        /></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { reqNewsPageData } from "@/api";
export default {
  name: "news",
  data() {
    return {
      fourNewsData: null,
      showWhat: 1,
      autoplay: false,
      newsData: [
        {
          _id: "31",

          content: "new1111",
          imgUrl:
            "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/pagecover/keith-luke-GUAcpXPyFRc-unsplash%20(1).jpg?sign=5e86dbc409930ea885cb394cc81d468d&t=1656951204",
        },
        {
          _id: "311",
          content: "new22222",
          imgUrl:
            "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/pagecover/keith-luke-GUAcpXPyFRc-unsplash%20(1).jpg?sign=5e86dbc409930ea885cb394cc81d468d&t=1656951204",
        },
        {
          _id: "3111",
          content: "new33333",
          imgUrl:
            "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/pagecover/keith-luke-GUAcpXPyFRc-unsplash%20(1).jpg?sign=5e86dbc409930ea885cb394cc81d468d&t=1656951204",
        },
        {
          _id: "31111",
          content: "new44444",
          imgUrl:
            "https://6675-fuildroom-4gh9p27od95e1876-1306129434.tcb.qcloud.la/pagecover/keith-luke-GUAcpXPyFRc-unsplash%20(1).jpg?sign=5e86dbc409930ea885cb394cc81d468d&t=1656951204",
        },
      ],
    };
  },
  mounted() {
    this.goSearch(4, 0);
  },
  methods: {
    async goSearch(e, str) {
      let r = await reqNewsPageData(e, str);
      this.fourNewsData = r.data;
    },
    hoverNewsItem(e) {
      //changeCarouselImg 为组件内部调用的setActiveItem的方法
       this.$refs.newsCarousel.changeCarouselImg(e)
    },
    toGo() {
      this.$router.push("/instituteoverview/newspage");
    },
  },
};
</script>

<style>
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

/* card */
.text {
  font-size: 14px;
  cursor: pointer;
}

.item {
  margin-bottom: 18px;
}
.moreDiv {
  margin: 10px auto;
  text-align: left;
}
</style>