<!--  -->
<template>
  <div class="mainFrame" >
     <pageTitle>毕业去向</pageTitle>
    <el-table
      :data="tableData"
      style="width: 70%; margin: 0 auto;"
      :header-row-style="{ color: '#409EFF' }"
      :row-style="{ height: '60px' }"
    >
      <el-table-column type="index"  > </el-table-column>
      <el-table-column prop="company" label="工作单位"> </el-table-column>
      <el-table-column prop="presonItem" label="人数" > </el-table-column>
      <el-table-column prop="yearOfGraduation" label="毕业年份" width="110"> </el-table-column>
    </el-table>

    <el-pagination
        style="margin-top: 20px; text-align: center"
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="pageTotal"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
  </div>
</template>

<script>
import { reqEmploymentStatusData } from "@/api";
export default {
  name: "Employment",

  data() {
    return {
      pageSize:10,
      pageTotal:12,
      tableData: [
        
      ],
    };
  },
  mounted() {
    this.goSearch(this.pageSize,"first");
  },
  methods: {
    handleCurrentChange(){
      console.log(1)
    },
    async goSearch(e,str) {
      
      let r = await reqEmploymentStatusData(e,str);
      
      this.tableData=r.data
      this.pageTotal=r.total
    },
  },
};
</script>
<style scoped>
.mainFrame {

  margin: 0 auto;
  text-align: center;
} 
</style>
