<!--  -->
<template>
  <div class="mainFrame">
    <el-row>
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        :span="6"
        v-for="o in tosondata.articleData"
        :key="o._id"
      >


        <el-card  :body-style="{ padding: '0px' }">
          <img :src="o.coverImage" class="image" />
          <div style="padding: 14px">
            <h3>{{ o.articleTitleC }}</h3>
            <h4 class="magazineName">{{ o.magazineName }}</h4>
            <div class="bottom clearfix">
              <time class="time">{{ o._id }}</time>
              <div class="popover">
                <el-popover
                  placement="top-start"
                  title="doi号"
                  width="200"
                  trigger="click"
                  :content="o.doi"
                >
                  <el-button slot="reference" type="text">获取doi号</el-button>
                </el-popover>
              </div>
            </div>
          </div>
        </el-card>


      </el-col>
    </el-row>
    <div class="block">
      <el-pagination
        style="margin-top: 20px; text-align: center"
        layout="prev, pager, next"
        :page-size="tosondata.pageSize"
        :total="tosondata.total"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "PaperPanel",
  props: ["tosondata"],
  data() {
    return {
     
    };
  },
  methods: {
    handleCurrentChange(val){
       this.$emit("handleCurrentPage",val)
    }
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
