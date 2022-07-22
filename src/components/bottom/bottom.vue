<!--  -->
<template>
  <div class="mainFrame">
       
                <div class="mainFrame-a">
                  <h3>联系我们</h3>
                  <p>地址：浙江省杭州市下沙高教园区学源街258号</p>
                  <p>邮编：310018</p>
                  <p>邮箱：##########@###.com</p>
                  
                  <p>浙ICP备######号-#</p>
                </div>
       <div class="mainFrame-b" >
                  <h2>友情链接</h2>
                  <a href="https://www.cjlu.edu.cn/" class="frindLink"><p>中国计量大学: www.cjlu.edu.cn</p></a>
                  <a href="http://jlcs.cjlu.edu.cn/" class="frindLink"><p>中国计量大学计量测试工程学院: jlcs.cjlu.edu.cn</p></a>
      </div>
               
  </div>
</template>

<script>
export default {
  name: "bottom",
  data() {
    return {

    };
  },
 
};
</script>
<style scoped>

.mainFrame{
  display: flex;
  justify-content: space-evenly;
  background: #253671;
  padding: 20px;
  color: rgb(255, 255, 255);
  line-height: 35px;

}
.frindLink{
 color: rgb(255, 255, 255);
}
</style>
