<!--  -->
<template>
  <div class="mainFrame">
     <pageTitle>新闻资讯</pageTitle>
    <div style="text-align:left">
      <el-card
        @click.native="toGo(item._id)"
        shadow="hover"
        class="box-card"
        :body-style="{
          background: 'rgb(249,249,249)',
          border: '0',
          cursor: 'pointer',
        }"
        v-for="item in newsData"
      >
        <el-row :gutter="90">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <img width="100%" :src="item.cover" />
          </el-col>
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
              "
            >
              <p style="color: #253671; font-size: 1.3em; padding: 15px">
                {{ item.title }}
              </p>
              <p>【导读】{{ item.guidedReading }}</p>
              <div style="padding: 5px">
                <p
                  style="
                    color: #909399;
                    font-size: 1.2em;
                    display: inline-block;
                  "
                >
                  查看详情
                </p>
                <p style="color: #909399; font-size: 1.2em; float: right">
                  {{ item.date }}
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div>
      <el-pagination
        style="margin-top: 20px; text-align: center"
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="total"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { reqNewsPageData } from "@/api";
export default {
  name: "newsPage",
  data() {
    return {
      newsData: null,
      total: undefined,
      pageSize:6
    };
  },
  mounted() {
    this.goSearch(this.pageSize, "first");
  },
  methods: {
    async goSearch(e, str) {
      let r = await reqNewsPageData(e, str);
      this.newsData = r.data;
      this.total = r.total||this.total
    },
    toGo(val) {
       this.$router.push({
        path: "/instituteoverview/newsdetail",
        query: { _id: val },
      });
      
    },
    handleCurrentChange(val) {
      let itemNums = (val - 1) * this.pageSize;
     
      this.goSearch(this.pageSize,itemNums); 
    },
  },
};
</script>
<style scoped>
.box-card {
  width: 80%;
  margin: 50px auto;
}
.mainFrame{
  text-align: center;
 
}
</style>
