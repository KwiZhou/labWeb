<template>
      <div style="margin:30px 0; ">
       
          <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in crumbdata" >{{item}}</el-breadcrumb-item>

        </el-breadcrumb>
        
      </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: ["crumbdata"],
  data() {
    return {
      copyData: null,
    };
  },
  mounted() {
   
  },
  methods: {},
};
</script>

<style scoped>

</style>