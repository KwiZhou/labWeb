<!--  -->
<template>
  <div class="mainFrame">
    <img src="../../../public/image/introduce.jpg" width="100%" />
    <div style="width: 50%; margin: 0 auto">
      <el-tabs
        stretch
        v-model="activeName"
        @tab-click="handleClick"
        class="eltabs"
        v-show="$route.meta.topShow"
      >
        <el-tab-pane label="研究所简介" name="introduce"></el-tab-pane>
        <el-tab-pane label="新闻资讯" name="newspage"></el-tab-pane>
        <el-tab-pane label="研究方向" name="researchdirection"></el-tab-pane>
      </el-tabs>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "instituteOverview",
  created() {
    this.activeName = this.$route.name;
  },

  data() {
    return {
      activeName: this.$route.name,
    };
  },
  mounted() {},
  methods: {
      handleClick(tab, event) {
      this.$router.push(`/instituteoverview/${tab.name}`)
     
    },
  },
  watch: {
      $route(to,from){
          this.activeName=to.name
	      }
  }
};
</script>
<style scoped>
</style>
