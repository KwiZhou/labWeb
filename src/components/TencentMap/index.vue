<!--  -->
<template>
  <div class="mainFrame">
   
    <div ref="container" style="width: 100%; height: 500px"></div>
  </div>
</template>
<script>
import Tmap from "./MapLoader";
export default {
  name: "TencentMap",
 
  data() {
    return {
      
      
    };
  },
  mounted() {
    //Tmap.init()是一个promise对象.当地图的script脚本请求回来的时候，会抛出resolve
    Tmap.init().then((res) => {
      //定义地图中心点坐标
      var center = new TMap.LatLng(30.3218, 120.35935);
      //定义map变量，调用 TMap.Map() 构造函数创建地图
      var map = new TMap.Map(this.$refs.container, {
        center: center, //设置地图中心点坐标
        zoom: 17.2, //设置地图缩放级别
        pitch: 43.5, //设置俯仰角
        rotation: 0, //设置地图旋转角度
      });
      var marker = new TMap.MultiMarker({
        map: map,
        /* styles: {
          // 点标记样式
          marker: new TMap.MarkerStyle({
            width: 20, // 样式宽
            height: 30, // 样式高
            anchor: { x: 30, y: 30 }, // 描点位置
          }),
        }, */
        geometries: [
          // 点标记数据数组
          {
            // 标记位置(纬度，经度，高度)
            position: center,
            id: "marker",
          },
        ],
      });
    });
  },
  methods: {},
};
</script>
<style scoped>
.mainFrame{
    margin-top: 50px;
}
</style>
