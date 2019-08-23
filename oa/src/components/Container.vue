<template>
<div id="Container">
   <el-container>
        <el-header><Header/></el-header>
        <el-main><Main/></el-main>
        <el-footer><Tab/></el-footer>
  </el-container>
</div>
</template>
<script>
import Header from "./Header.vue";
import Main from "./Main.vue";  
import Tab from "./Tab.vue";
export default {
  name: "Container",
  components: {
    Header,
    Main,
    Tab
  }
};
</script>
<style>
.el-container {
  position: relative;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}
.el-header,
.el-main,
.el-footer {
  padding: 0 !important;
}
.el-header {
  width: 100%;
  height: auto;
}
.el-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>

