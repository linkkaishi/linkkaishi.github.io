<template>
   <el-container>
        <el-header><Linkheader/></el-header>
        <el-main>
            <div class="search_bar">
                <form class="search_outer">
                    <div class="search_inner">
                        <input type="search" class="search_input" placeholder="搜索联系人"  >
                    </div>
                </form>
            </div>
          <el-tabs v-model="activeName">
             <el-tab-pane label="联系人(9)" name="first" >
                <div class="title">优势开发团队</div>
                <div class="deplist">
                    <div class="item">
                        <a href="" class="media_box ">
                            <div class="imgbox">
                                <img src="../assets/images/wjj.png" alt="">
                            </div>
                            <div class="cell_bd">
                                <p>管理层
                                    <span>(1)</span>
                                </p>
                            </div>
                        </a>
                    </div>
                     <div class="item">
                        <a href="" class="media_box ">
                            <div class="imgbox">
                                <img src="../assets/images/wjj.png" alt="">
                            </div>
                            <div class="cell_bd">
                                <p>开发部
                                    <span>(5)</span>
                                </p>
                            </div>
                        </a>
                    </div>
                     <div class="item">
                        <a href="" class="media_box ">
                            <div class="imgbox">
                                <img src="../assets/images/wjj.png" alt="">
                            </div>
                            <div class="cell_bd">
                                <p>财务部
                                    <span>(3)</span>
                                </p>
                            </div>
                        </a>
                    </div>
                     <div class="item">
                        <a href="" class="media_box ">
                            <div class="imgbox">
                                <img src="../assets/images/wjj.png" alt="">
                            </div>
                            <div class="cell_bd">
                                <p>行政人事部
                                    <span>(1)</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
               </el-tab-pane>
              <el-tab-pane label="会话(2)" name="second">
                   <div class="deplist1">
                    <div class="item">
                        <a href="" class="media_box ">
                            <div class="imgbox">
                                <img src="../assets/images/group.png" alt="">
                            </div>
                            <div class="cell_bd">
                                <p>全体人员</p>
                            </div>
                        </a>
                    </div>
                     <div class="item">
                        <a href="" class="media_box ">
                            <div class="imgbox">
                                <img src="../assets/images/group.png" alt="">
                            </div>
                            <div class="cell_bd">
                                <p>高管群</p>
                            </div>
                        </a>
                    </div>
                   </div>
              </el-tab-pane>
          </el-tabs>
        </el-main>
        <el-footer><Tab/></el-footer>
  </el-container>
</template>
<script>
import Linkheader from "./Linkheader.vue";
import Tab from "./Tab.vue";

export default {
  name: "Linkman",
  components: {
    Linkheader,
    Tab
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {}
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
.el-main {
  overflow: hidden;
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
.search_bar {
  width: 100%;
  padding: 10px 10px;
  background-color: #efeff4;
  display: flex;
}
.search_bar .search_outer {
  width: 100%;
  flex: auto;
  background-color: #efeff4;
}
.search_bar .search_outer .search_inner {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-right: 18px;
}
.search_bar .search_outer .search_inner input {
  width: 100%;
  border-radius: 4px;
  border: 0;
  outline: 0;
  padding: 4px;
  font-size: 14px;
  color: #9b9b9b;
  text-align: center;
}
.el-tabs {
  width: 100% !important;
}
.el-tabs__header {
  width: 100% !important;
  text-align: center;
  margin: 0 !important;
}
.el-tabs__nav {
  width: 100% !important;
  background-color: white;
}
.el-tabs__active-bar {
  width: 50% !important;
}
.el-tabs__item {
  width: 50% !important;
}
.el-tab-pane .title {
  width: 100%;
  display: inline-block;
  background: #f1f1f1;
  height: 48px;
  padding: 0px 8px;
  line-height: 48px;
  font-size: 13px;
  position: relative;
}
/* 列表样式start */
.deplist {
  width: 100%;
  position: relative;
}
.deplist::before {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 1px;
  border-top: 1px solid #cccc;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}
.deplist .item {
  width: 100%;
  background-color: white;
}
.deplist .item .media_box {
  width: 100%;
  text-decoration: none;
  color: #000;
  display: flex;
  padding: 10px 15px;
  align-items: center;
  position: relative;
}
.deplist .item .media_box::before {
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
.deplist .item .media_box .imgbox {
  width: 34px;
  height: 34px;
  display: block;
  margin-right: 5px;
}
.deplist .item .media_box .imgbox img {
  width: 100%;
  height: 100%;
}
.deplist .item .media_box .cell_bd {
  width: 100%;
}
.deplist .item .media_box .cell_bd p {
  margin: 0;
  display: inline-block;
  width: 100%;
  font-size: 14px;
}
.deplist .item .media_box .cell_bd p span {
  font-size: 12px;
  color: #888888;
}
.deplist1 {
  width: 100%;
  position: relative;
}
.deplist1::after {
  content: " ";
  position: absolute;
  width: 100%;
  border: 1px solid #e5e5e5;
  transform: scaleY(0.5);
  color: #e5e5e5;
  transform-origin: 0 0;
  bottom: 105px;
}
.deplist1 .item {
  width: 100%;
  background-color: white;
  position: relative;
}
.deplist1 .item::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  transform: scaleY(0.5);
  color: #e5e5e5;
  transform-origin: 0 0;
}
.deplist1 .item .media_box {
  width: 100%;
  text-decoration: none;
  color: #000;
  display: flex;
  padding: 10px 15px;
  align-items: center;
}
.deplist1 .item .media_box .imgbox {
  width: 34px;
  height: 34px;
  display: block;
  margin-right: 5px;
}
.deplist1 .item .media_box .imgbox img {
  width: 100%;
  height: 100%;
}
.deplist .item .media_box .cell_bd {
  width: 100%;
}
.deplist1 .item .media_box .cell_bd p {
  margin: 0;
  display: inline-block;
  width: 100%;
  font-size: 14px;
}

/* 列表样式over */

/* input::-ms-input-placeholder {
  text-align: center;
}

input::-webkit-input-placeholder {
  text-align: center;
} */
</style>

