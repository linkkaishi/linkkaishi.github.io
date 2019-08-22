<template>
<div class="r-touch" >
    <div class="weui_panel" v-for="item in items" :key="item.id">
      <div class="historylist">
         <a href="" class="weui_media_box ">
              <div class="weui_media_hd">
                  <img src="../assets/meet.png">
              </div>
             <div class="weui_media_pd">
                  <font>{{item.time}}</font>
                 <h4>{{item.title}}</h4>
                 <span class="weui_media_desc">{{item.text}}</span>
             </div>
          </a>
      </div>
    </div>
    <!-- <div class="history">
        <a href="">
        <img src="../assets/消息1.png" alt="">
        <span>暂无消息</span>
        </a>
    </div> -->
</div>
</template>
<script>
export default {
  name: "Main",
  data:function(){
    return{
    items:[{
      title:"会议",
      time:"12-19",
      imgsrc:"../assets/meet.png",
      text:"演示用户发起会议“UPM 1.1 版本更新发布”在会议室2，时间2018-12-21 14:30:00至2018-12-21 17:15:00"
    }]
    }
  }
};
</script>
<style scoped>
.r-touch {
  width: 100%;
}
.weui_panel {
  width: 100%;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
.weui_panel .historylist {
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
}
.weui_panel .historylist .weui_media_box {
  display: flex;
  text-decoration: none;
  padding: 10px 15px;
}
.weui_panel .historylist .weui_media_hd {
  height: 40px;
  width: 40px;
  margin-right: 0.8em;
  text-align: center;
}
.weui_panel .historylist .weui_media_hd img {
  width: 100%;
}
.weui_panel .historylist .weui_media_pd {
  flex: 1;
  width: 70%;
}
.weui_panel .historylist .weui_media_pd h4 {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  word-break: break-all;
  color: black;
}
.weui_panel .historylist .weui_media_pd .weui_media_desc {
  color: #999;
  font-size: 13px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.weui_panel .historylist .weui_media_pd .weui_media_desc {
  height: 20px;
  line-height: 20px;
  padding-right: 20px;
}
.weui_panel .historylist .weui_media_pd font {
  position: absolute;
  right: 5px;
  top: 42px;
  font-size: 13px;
  color: #888888;
}

.history {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #eae7e7;
}
.history a {
  text-decoration: none;
}
.history img {
  width: 40px;
  height: 40px;
  display: inline-block;
}
.history span {
  display: block;
  font-size: 20px;
  color: #cccccc;
  line-height: 1.6;
}
</style>

