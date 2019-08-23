<template>
  <el-container>
    <el-header>
      <Moreheader />
    </el-header>
    <div class="more">
      <div class="me">
        <div class="img">
          <a href="">
            <img
              src="../assets/images/crm.png"
              alt=""
            >
          </a>
        </div>
        <div class="text">
          <p>林凯士</p>
          <span>开发部</span>
        </div>
      </div>
      <div class="content">
        <div class="item">
          <a
            href=""
            class="media_box "
          >
            <div class="cell_bd">
              <p>修改密码</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a
            href=""
            class="media_box "
          >
            <div class="cell_bd">
              <p>我的收藏</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a
            href=""
            class="media_box "
          >
            <div class="cell_bd">
              <p>通用设置</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a
            href=""
            class="media_box"
            @click="about"
          >
            <div class="cell_bd">
              <p>关于移动办公</p>
            </div>
          </a>
        </div>
      </div>
      <div class="foo">
        <div class="exit">
          <a
            href="javascript:"
            @click="exit"
          >
            <p>退出登录</p>
          </a>
        </div>
      </div>
    </div>
    <el-footer>
      <Tab />
    </el-footer>
  </el-container>
</template>
<script>
import Moreheader from "./Moreheader.vue";
import Tab from "./Tab.vue";

export default {
  name: "More",
  components: {
    Moreheader,
    Tab
  },
  methods: {
    about: function() {
      this.$router.push({
        name: "about"
      });
    },
    exit: function() {
      var r = confirm("您确定退出系统?");
      if (r == true) {
        this.$router.push({
          name: "login"
        });
      } else {
        this.$router.push({
          name: "More"
        });
      }
    }
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
.more {
  overflow-y: auto;
  overflow-x: hidden;
  /* padding-bottom: 60px; */
  height: 100%;
  background-color: #f5f5f5;
}
.more .me {
  display: flex;
  background-color: #f5f5f5;
  padding: 40px 0px;
}
.more .me .img {
  width: 70px;
  height: 70px;
  margin: 0px 10px;
}
.more .me .img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.more .me .text {
  display: inline-block;
  line-height: 36px;
}
.more .me .text p {
  margin: 0;
  font-size: 20px;
}
.more .me .text span {
  font-size: 15px;
}
.more .content {
  width: 100%;
}
.more .content .item {
  width: 100%;
  background-color: white;
}
.more .content .item .media_box {
  width: 100%;
  text-decoration: none;
  color: #000;
  display: flex;
  padding: 10px 15px;
  align-items: center;
  position: relative;
}
.more .content .item .media_box::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #e5e5e5;
  transform: scaleY(0.5);
  color: #e5e5e5;
  transform-origin: 0 0;
}
.more .content .item .media_box .cell_bd {
  width: 100%;
}
.more .content .item .media_box .cell_bd p {
  margin: 0;
  display: inline-block;
  width: 100%;
  font-size: 14px;
}
.more .foo {
  width: 100%;
  background-color: white;
  height: 40px;
  margin: 50px 0px;
}
.more .foo .exit {
  width: 100%;
  line-height: 40px;
  text-align: center;
}
.more .foo .exit a {
  text-decoration: none;
  color: #000;
}
.more .foo .exit a p {
  margin: 0;
}
.el-message-box {
  width: 100% !important;
  margin-top: 50%;
}
</style>

