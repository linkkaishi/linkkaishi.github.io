<template>
 <el-container>
   <div class="about">
   <el-header>
      <div class="header">
        <div class="left">
           <a href="javascript:" @click="more">
              <i class="el-icon-arrow-left"></i>
              <span>返回</span>
           </a>
        </div>
        <div class="right">
            <div class="title">
              <p>关于移动办公</p>
            </div>
          </div>
      </div>
  </el-header> 
   <!--header 结束 -->
      <el-main>
          <div class="content">
              <div class="imgclass">
                <img src="../assets/images/jwcl.png" alt="">
                  <span>扫描二维码进行下载安装</span>
              </div>
                <div class="versions">
                    <div class="list">
                      <div class="item">
                          <div class="left">
                              <span>当前版本</span>
                          </div>
                          <div class="right">
                                <span>V1.2</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="left">
                                <span>检查更新</span>
                            </div>
                            <div class="right">
                              <span>已是最新版本</span>
                            </div>
                        </div>
                    </div>
                </div>
                    <!--versions  -->
                    <div class="update">
                        <span>本次更新说明：</span>
                        <span>1.优化应用权限控制</span>
                        <span>2.附件阅读优化</span>
                    </div>
              </div>
      </el-main>
   <el-footer>
         <div class="foo-text">
            <span>版权所有</span>
            <span>xxx</span>
            <span>保留所有权利</span>
         </div>
   </el-footer>
  </div>
  </el-container>
</template>

<script>
export default {
  name: "About",
  methods: {
    more: function() {
      this.$router.push({
        name: "More"
      });
    }
  }
};
</script>

<style scoped>
.about {
  width: 100%;
}
/*header css样式开始*/
.about .header {
  width: 100%;
  height: 50px;
  background-color: #2c3e50;
  display: flex;
}
.about .header .left {
  width: 20%;
  line-height: 60px;
}
.about .header .left a {
  text-decoration: none;
  color: white;
}
.about .header .left a i {
  margin: 0px 4px;
  font-size: 14px;
}
.about .header .left a span {
  font-size: 14px;
}
.about .header .right {
  width: 60%;
  text-align: center;
  line-height: 50px;
}
.about .header .right .title {
  width: 100%;
  color: white;
  font-size: 16px;
}
.about .header .right .title p {
  margin: 0;
}
/*header css样式结束*/
.about .content {
  width: 100%;
  display: block;
  background-color: white;
}
.about .content .imgclass {
  width: 100%;
  text-align: center;
  display: block;
}
.about .content .imgclass img {
  width: 120px;
  height: 120px;
  display: inline-block;
}
.about .content .imgclass span {
  width: 100%;
  margin: 0;
  font-size: 13px;
  display: inline-block;
  color: black;
}
.about .content .versions {
  width: 100%;
  position: relative;
}
.about .content .versions .list {
  width: 100%;
  position: relative;
}
.about .content .versions .list::before {
  content: "";
  top: 50%;
  left: 16px;
  position: absolute;
  border: 1px solid #dedada;
  width: 100%;
  transform: scaleY(0.5);
  transform-origin: 0 0;
}
.about .content .versions .item {
  width: 100%;
  height: 40px;
  overflow: hidden;
  line-height: 40px;
  padding: 8px 0px;
}
.about .content .versions::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: #fbf9fe;
}
.about .content .versions::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: #fbf9fe;
}
.about .content .versions .item .left {
  float: left;
}
.about .content .versions .item .left span {
  font-size: 16px;
  margin-left: 6px;
  color: black;
}
.about .content .versions .item .right {
  float: right;
}
.about .content .versions .item .right span {
  font-size: 14px;
  margin-right: 6px;
  color: #777575cc;
}
.about .content .update {
  width: 100%;
  padding: 10px 0px;
  margin-left: 6px;
}
.about .content .update span {
  display: inline-block;
  width: 100%;
  color: #777575cc;
  font-size: 14px;
}
.about .content .update span:first-of-type {
  font-size: 16px;
  color: black;
}
.about .foo-text {
  width: 100%;
  text-align: center;

}
.about .foo-text span {
  width: 100%;
  margin: 0px 4px;
  font-size: 13px;
}
</style>

