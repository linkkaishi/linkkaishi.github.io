<template>
   <el-container>
        <el-header><Applyheader/></el-header>
            <div class="main">
              <!-- 官网部分 -->
              <div class="item" v-for="item in uccn" :key="item.id">
                <div class="agentp">{{item.title}}({{item.number}})</div>
                <div class="agentshow_1">
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/waichu.png" alt="">
                            <p>{{item.text}}</p>
                        </div>
                    </a>
                </div>
                </div>
                <!-- 考勤部分 -->
                <!-- <div class="item" v-for="item in work" :key="item.id">
                <div class="agentp">{{item.title}}({{item.number}})</div>
                <div class="agentshow_1" >
                    <a href="" class="weui_grid"  >
                        <div class="weui_grid_icon" >
                            <img src="../assets/images/logo.png" alt="">
                            <p>{{item.text}}</p>
                        </div>
                    </a>
                </div>
                </div> -->

                <div class="item">
                 <div class="agentp">考勤(5)</div>
                <div class="agentshow_1">
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/adddk.png" alt="">
                            <p> 考勤打卡</p>
                        </div>
                    </a>
                     <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/bwl2.png" alt="">
                            <p> 排班查看</p>
                        </div>
                    </a>
                     <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/kaoqin.png" alt="">
                            <p> 考勤信息</p>
                        </div>
                    </a>
                     <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/kaoqin.png" alt="">
                            <p> 考勤统计</p>
                        </div>
                    </a>
                     <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/waichu.png" alt="">
                            <p> 外出出差</p>
                        </div>
                    </a>
                </div>
                </div>
                <!-- 流程部分 -->
                <div class="item">
                 <div class="agentp">流程(3)</div>
                <div class="agentshow_1">
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/flow.png" alt="">
                            <p> 流程申请</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/daiban.png" alt="">
                            <p> 流程待办</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/jia.png" alt="">
                            <p> 申请流程</p>
                        </div>
                    </a>
                </div>
                </div>
                <!-- 任务部分 -->
                <div class="item">
                 <div class="agentp">任务(2)</div>
                <div class="agentshow_1">
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/work.png" alt="">
                            <p> 任务</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/project.png" alt="">
                            <p> 项目</p>
                        </div>
                    </a>
                </div>
              </div>
                <!-- 公文部分 -->
                <div class="item">
                 <div class="agentp">公文(3)</div>
                <div class="agentshow_1">
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/gw.png" alt="">
                            <p> 公文查阅</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/fawen.png" alt="">
                            <p> 发文单</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/shouwen.png" alt="">
                            <p> 收文单</p>
                        </div>
                    </a>
                </div>
                </div>
                <!-- 基础部分 -->
                 <div class="item">
                 <div class="agentp">基础(10)</div>
                <div class="agentshow_1">
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/tongxunlu.png" alt="">
                            <p> 通讯录</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/email.png" alt="">
                            <p> 邮件</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/bwl2.png" alt="">
                            <p> 日程</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/calendar.png" alt="">
                            <p> 万年历</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/daily.png" alt="">
                            <p> 工作日报</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/meet.png" alt="">
                            <p>会议</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/gong.png" alt="">
                            <p> 通知公告</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/gzt.png" alt="">
                            <p> 工资条</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/work.png" alt="">
                            <p> 订阅报表</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/jwcl.png" alt="">
                            <p> 回执确认</p>
                        </div>
                    </a>
                </div>
                 </div>
                <!-- 资源部分 -->
                <div class="item">
                 <div class="agentp">资源(4)</div>
                <div class="agentshow_1">
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/folder.png" alt="">
                            <p> 文档</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/zhishi.png" alt="">
                            <p> 知识信息</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/tiku.png" alt="">
                            <p> 题库</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/kaoshi.png" alt="">
                            <p> 培训考试</p>
                        </div>
                    </a>
                </div>
                </div>
                <!-- 客户部分 -->
                <div class="item">
                 <div class="agentp">客户(5)</div>
                <div class="agentshow_1">
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/crm.png" alt="">
                            <p> 客户管理</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/sale.png" alt="">
                            <p> 销售机会</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/hetong.png" alt="">
                            <p> 客户合同</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/skuan.png" alt="">
                            <p> 收款单</p>
                        </div>
                    </a>
                    <a href="" class="weui_grid">
                        <div class="weui_grid_icon">
                            <img src="../assets/images/fkuan.png" alt="">
                            <p> 付款单</p>
                        </div>
                    </a>
                </div>
             </div>
            </div>
        <el-footer><Tab/></el-footer>
  </el-container>
</template>
<script>
import Applyheader from "./Applyheader.vue";
import Tab from "./Tab.vue";

export default {
  name: "Apply",
  components: {
    Applyheader,
    Tab
  },
  data:function(){
      return{
          uccn:[
              {
              title:"官网",
              imgsrc:"",
              text:"公司团队",
              number:"1"
          }],
          work:[{
              title:"官网",
              number:"5",
              gather:[{
              imgsrc:"",
              text:"考勤打卡"
              },{
              imgsrc:"",
              text:"排班查看"
              },{
              imgsrc:"",
              text:"考勤信息"
              },{
              imgsrc:"",
              text:"考勤统计"
              },{
              imgsrc:"",
              text:"外出出差"
              }]
          }]
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
.el-main,
.el-footer {
  padding: 0 !important;
}
.el-header {
  width: 100%;
  height: auto !important;
}
.el-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.main {
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 50px;
}
.main .agentp {
  color: #888888;
  padding: 5px;
  font-size: 14px;
  line-height: 14px;
}
.main .agentshow_1 {
  width: 100%;
  display: inline-block;
  background-color: white;
  position: relative;
}
.main .agentshow_1::before {
  content: "";
  position: absolute;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  height: 1px;
}
.main .agentshow_1::after {
  content: "";
  position: absolute;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
}
.main .agentshow_1 .weui_grid {
  float: left;
  width: 25%;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
  position: relative;
  padding: 8px;
}
.main .agentshow_1 .weui_grid::before {
  position: absolute;
  content: "";
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-bottom: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
}
.main .agentshow_1 .weui_grid_icon {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0 auto;
}
.main .agentshow_1 .weui_grid_icon img {
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  margin: 0 auto;
  padding: 5px 0;
}
.main .agentshow_1 .weui_grid_icon p {
  margin: 5px 0;
  padding: 0;
  color: #000;
  font-size: 14px;
}
</style>

