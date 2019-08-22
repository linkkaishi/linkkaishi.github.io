<template>
         <div class="footer">
             <div class="list">
                 <div class="item">
                   <a href="javascript:;"  @click="conversation ">
                     <img src="../assets/消息1.png" alt="">
                     <span>会话</span>
                  </a>
                 </div>
                  <div class="item">
                  <a href="javascript:;" @click="apply">
                     <img src="../assets/icon_应用管理.png" alt="">
                     <span>应用</span>
                   </a>
                 </div> 
                 <div class="item">
                  <a href="javascript:;" @click="linkman">
                     <img src="../assets/联系人.png" alt="">
                     <span>联系人</span>
                   </a>
                 </div>
                  <div class="item">            
                 <a href="javascript:;" @click="more">
                     <img src="../assets/icon_设置.png" alt="">
                     <span>更多</span>
                      </a>
                 </div>   
             </div>
         </div>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    apply(){
     this.$router.push({
         name:"Apply"
     })
    },
    conversation(){
       this.$router.push({
         name:"Container"
     })
    },
    linkman(){
       this.$router.push({
         name:"Linkman"
     })
    },
      more(){
       this.$router.push({
         name:"More"
     })
    }
  }
};
</script>
<style scoped>

.footer {
  width: 100%;
  background-color: #f7f7fa;
  position: relative;
}
.footer::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #eae7e7;
}
.footer::after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #979797;
}
.footer .list {
  width: 100%;
  display: flex;
}
.footer .list .item a {
  text-decoration: none;
  color: black;
}
.footer .list .item {
  flex: 1;
  padding: 0 10px;
  text-align: center;
}
.footer .list .item img {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  padding: 8px;
}
.footer .list .item span {
  display: block;
  font-size: 14px;
  color: #888;
}
</style>

