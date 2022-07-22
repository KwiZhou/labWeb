<template>
  
    <div class="mainContent">
      <BreadCrumb :crumbdata="toCrumbData"></BreadCrumb>
      <p class="titleName">{{ copyData.name }}</p>
      <img :src="copyData.imgURL" width="240px" />
      <div class="mentorIntroduce">
        <el-divider content-position="left"
          ><p class="title" >{{ copyData.Done.title }}</p></el-divider
        >

        <p v-for="item in copyData.Done.DPersonalProfile" class="content" style="text-align: justify;">
          {{ item }}
        </p>
        <el-divider content-position="left">
          <p class="title">{{ copyData.Dtwo.title }}</p></el-divider
        >

        <p v-for="item in copyData.Dtwo.researchTopic" class="content">
          {{ item }}
        </p>

        <el-divider content-position="left">
          <p class="title">{{ copyData.Dthree.title }}</p></el-divider
        >
        <p
          v-for="item in copyData.Dthree.scientificResearchProjects"
          class="content"
        >
          {{ item }}
        </p>
        <el-divider content-position="left">
          <p class="title">{{ copyData.Dfour.title }}</p></el-divider
        >

        <p v-for="item in copyData.Dfour.papers" class="content">{{ item }}</p>
        <p v-for="item in copyData.Dfour.patent" class="content">{{ item }}</p>
      </div>
    </div>
  
</template>

<script>
import { reqMentorDetailData } from "@/api";
export default {
  name: "mentorDetail",

  data() {
    return {
      copyData: null,
      toCrumbData: null,
    };
  },
  mounted() {
    this.goSearch(this.$route.query._id);
  },
  methods: {
    async goSearch(val) {
      let r = await reqMentorDetailData(val);
      this.copyData = r.data[0];
      this.toCrumbData = this.$route.meta.cPath.concat(r.data[0].name);
    },
  },
};
</script>

<style scoped>
.mainContent {
  
  line-height: 1.8em;
  width: 70%;
  margin: 0 auto;
  text-align: center;
}

.mentorIntroduce {
  text-align: left;
  margin: 50px 0;
}
.title {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 3rem;
}
.titleName {
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 900;
  line-height: 3rem;

}
.content {
  width: 95%;
  padding-left:60px;
  margin: 0 auto;
  text-align: justify;
}
</style>