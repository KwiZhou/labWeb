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
      >
        <el-tab-pane label="校企合作" name="cooperation"></el-tab-pane>
        <el-tab-pane label="联系我们" name="contactus"></el-tab-pane>
       
      </el-tabs>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Comminicate",
   created() {
    this.activeName = this.$route.name;
  },

  data() {
    return {
      activeName: this.$route.name,
    };
  },
  methods: {
      handleClick(tab, event) {
      this.$router.push(`/comminicate/${tab.name}`)
     
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
