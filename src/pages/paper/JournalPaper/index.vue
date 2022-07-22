<!--  -->
<template>
  <div class="mainFrame">
    论文
    <PaperPanel :tosondata="toSonData" @handleCurrentPage="handleCurrentChange"/> 
  </div>
</template>

<script>
import { reqJournalPaperData } from "@/api";
export default {
  name: "JournalPaper",
  
  data() {
    return {
      toSonData:{
          currentDate: 12,
          pageSize: 8,
          total: 50,
          articleData: null,
      }
      
    };
  },
  mounted() {
    this.goSearch(this.toSonData.pageSize,"first");
  },
  methods: {
    async goSearch(e,str) {
      let r = await reqJournalPaperData(e,str);
      this.toSonData.total = r.total||this.toSonData.total;
      this.toSonData.articleData = r.data;
    },
    handleCurrentChange(val) {
      let itemNums = (val - 1) * this.toSonData.pageSize;
      this.goSearch(this.toSonData.pageSize,itemNums); 
    },
  },
};
</script>
<style scoped>
.el-col {
  padding: 30px;
  min-width: 350px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.popover {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.magazineName {
  color: #909399;
}
</style>
