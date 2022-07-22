<!--  -->
<template>
  <div class="mainFrame">
    <pageTitle>导师名单</pageTitle>
    <p style="margin: 25px 0 45px 0">
      流体装备与检测技术研究所拥有一支精干的科技队伍。所长牟介刚教授，30多年来一直从事流体装备的研究工作;<br />另有骨干成员五名，分别为吴登昊副教授、谷云庆副教授、周佩剑副教授、徐茂森副研究员和杨雪龙高工。
    </p>

    <el-row :gutter="60">
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        :span="6"
        v-for="item in teacherData"
        :key="item._id"
      >
        <div class="transition-box" @click="toGO(item._id)">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.imgURL" width="100%" height="310px" />
            <div style="padding: 14px">
              <p style="font-size: 1.4rem; font-weight: 800">
                {{ item.name }} {{ item.jobField | suozhang }}
              </p>
              <p style="color: #909399">{{ item.jobTitle }}</p>
              <p style="color: #909399">
                {{ item.school }} {{ item.Bachelor }}
              </p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reqTeacherAvatarData } from "@/api";

export default {
  name: "mentorList",
  data() {
    return {
      teacherData: null,
    };
  },
  mounted() {
    this.goSearch();
  },
  methods: {
    async goSearch() {
      let r = await reqTeacherAvatarData();

      this.teacherData = r.data;
    },
    toGO(val) {
      this.$router.push({
        path: "/researchteam/mentordetail",
        query: { _id: val },
      });
    },
  },

  filters: {
    suozhang: function (value) {
      if (!value) return "";
      return "（" + value + "）";
    },
  },
};
</script>
<style scoped>
.mainFrame {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.transition-box {
  text-align: left;
  margin-bottom: 100px;
  cursor: pointer;
}
.transition-box:hover {
  transform: scale(1.05);
  transition: all 0.5s;
}
</style>
