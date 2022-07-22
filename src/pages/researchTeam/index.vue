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
        v-show="$route.meta.show"
      >
        <el-tab-pane label="导师名单" name="mentorlist"></el-tab-pane>
        <el-tab-pane label="研究生名单" name="graduatelist"></el-tab-pane>
      </el-tabs>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "researchTeam",
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
      this.$router.push(`/researchteam/${tab.name}`)
     
    },
  },
  watch: {
      $route(to,from){
          this.activeName=to.name
          console.log(this.$route)
	      }
  }
};
</script>
<style scoped>

</style>
