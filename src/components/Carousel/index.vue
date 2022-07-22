<template>
  <div>
    <el-carousel :height="bannerHeight+'px'" :autoplay="autoplay" ref="elcarousel">
      <el-carousel-item v-for="item in carouseldata" :key="item._id" :name="item._id">
        <img :src="item.imgUrl" ref="cimg" width="100%" @Load="imgLoad"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["carouseldata","autoplay","whichshow"],
  data() {
    return {
      bannerHeight:0
    };
  },
  mounted() {
    //?????????
    this.imgLoad()
    window.addEventListener("resize",(res)=>{
     this.bannerHeight =this.$refs.cimg[0].height
    })
    this.imgLoad()
  },
  methods: {
    //changeCarouselImg供父级组件改变走马灯用
    changeCarouselImg(e){
      console.log(this.$refs.elcarousel)
      this.$refs.elcarousel.setActiveItem(e)
    },
    imgLoad(){
      this.$nextTick(()=>{
        this.bannerHeight =this.$refs.cimg[0].height
      })
  
    }
  },
};
</script>
<style scoped>
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>