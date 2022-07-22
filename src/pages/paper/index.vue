<!--  -->
<template>
  <div class="mainFrame">
    <img src="../../../public/image/introduce.jpg" width="100%" />
    <el-tabs stretch v-model="activeName" @tab-click="handleClick" class="eltabs">
      <el-tab-pane label="授权专利" name="patent"></el-tab-pane>
      <el-tab-pane label="学术论文" name="journalpaper"></el-tab-pane>
      <el-tab-pane label="出版书籍" name="book"></el-tab-pane>
      
    </el-tabs>
 <transition name="fade">
    <router-view></router-view>
     </transition>
  </div>
</template>

<script>
export default {
  name: "paper",
  
  created () {
     
  
    this.activeName=this.$route.name 
  },
 
 
  data() {
    return {
      activeName:this.$route.name ,
    };
  },
  
  methods: {
    handleClick(tab, event) {
      this.$router.push(`/paper/${tab.name}`)
     
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.1;
}

.eltabs{

  width:50%;
	margin:0 auto
}
</style>
