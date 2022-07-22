<!--  -->
<template>
  <div class="mainFrame">
    <img src="../../../public/image/introduce.jpg" width="100%" />
      
     
    <el-tabs
      stretch
      v-model="activeName"
      @tab-click="handleClick"
      class="eltabs"
    >
      <el-tab-pane label="毕业去向" name="employment"></el-tab-pane>
      <el-tab-pane label="招生简介" name="admissions"></el-tab-pane>
    </el-tabs>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TalentDevelopment",
  created() {
    this.activeName = this.$route.name;
  },

  data() {
    return {
      activeName: this.$route.name,
    };
  },

  methods: {
    handleClick(tab) {
      this.$router.push(`/talentdevelopment/${tab.name}`);
    },
  },
  watch: {
    $route(to, from) {
      this.activeName = to.name;
    },
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.1;
}

.eltabs {
  width: 50%;
  margin: 0 auto;
}
</style>
