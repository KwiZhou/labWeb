<template>
  <div id="app">
    <div style="position: sticky; top: 0px; z-index: 22">
      <top />
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <TencentMap  v-show="this.$route.meta.mapShow===true"/>
    <bottom />
  </div>
</template>

<script>
import top from "@/components/top/top.vue";
import TencentMap from "@/components/TencentMap";
import bottom from "@/components/bottom/bottom.vue";
export default {
  name: "App",
  components: {
    top,
    bottom,
    TencentMap
  },
  data() {
    return {};
  },
  mounted() {
   
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.1;
}

#app {
  line-height: 1.8em;
}
</style>
