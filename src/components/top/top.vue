<template>
  <div class="headerMain">
   
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
       <div style="width: 400px; margin: 25px 0px 25px 120px">
          <a href="#"
            ><img src="../../../public/image/header_Img.jpg" width="100%"
          /></a>
        </div>

        <div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-submenu v-for="item in leftNavItems" :index="item.index" >
              <template slot="title">{{ item.name }}</template>
              <el-menu-item v-for="sonItem in item.son" :index=sonItem.index >{{
                sonItem.name
              }}</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>

        <div
          style="font-size: 2.5em; padding: 2px"
          v-if="Object.keys(rightNavItems).length === 0 ? false : true"
          @click="showPhoneNav"
        >
          <i class="el-icon-s-fold"></i>
        </div>
      </div>
      <div v-show="isPhone">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="vertical"
          @select="handleSelect"
           :router='true'
        >
          <el-submenu v-for="item in rightNavItems" :index="item.index">
            <template slot="title">{{ item.name }}</template>
            <el-menu-item index="1-1" v-for="sonItem in item.son">{{
              sonItem.name
            }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
 
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      isPhone: false,
      activeIndex: "1",
      activeIndex2: "1",
      navItems: [
        {
          name: "研究所总览",
          index: "instituteoverview",
          son: [
            { name: "研究所简介", index: "introduce" },
            { name: "新闻资讯", index: "newspage" },
            { name: "研究方向",  index: "researchdirection" },
          ],
        },
        {
          name: "科研成果",
          index: "paper",
          son: [
            { name: "出版书籍",  index: "book" },
            { name: "学术论文",  index: "journalpaper" },
            { name: "发明专利",  index: "patent" },
          ],
        },
        {
          name: "学术队伍",
          index: "researchTeam",
          son: [
            { name: "导师名单", index: "mentorlist" },
            { name: "研究生名单", index: "graduatelist" },
          ],
        },
        {
          name: "人才培养",

          index: "talentdevelopment",
          son: [
            { name: "毕业去向",  index: "employment" },
            { name: "研究生招生",  index: "admissions" },
          ],
        },
        {
          name: "合作交流",

          index: "comminicate",
          son: [
            { name: "校企合作",  index: "cooperation" },
            { name: "联系我们", index: "contactus" },
          ],
        },
      ],
      screenWidth: document.body.clientWidth,
    };
  },
  mounted() {
    window.addEventListener("resize",()=>{
      this.screenWidth = document.body.clientWidth;
    })
   
  },
  methods: {
    showPhoneNav(){
      this.isPhone=!this.isPhone
    },
    handleSelect(key, keyPath) {
     this.$router.push(`/${keyPath[0]}/${keyPath[1]}`)
    },
  },
  computed: {
    leftNavItems: function () {
      return this.screenWidth >= 1050 ? this.navItems : {};
    },
    rightNavItems: function () {
      return this.screenWidth < 1050 ? this.navItems : {};
    },
  },
  /* watch: {
    screenWidth(newValue) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = newValue;
        this.timer = true;
        setTimeout(() => {
          //console.log(this.screenWidth);
          this.timer = false;
        }, 400);
      }
    },
  }, */
};
</script>


<style scoped>
.headerMain{
  background: white;
  box-shadow:0px 15px 5px -15px rgb(147, 144, 144);
}
</style>
