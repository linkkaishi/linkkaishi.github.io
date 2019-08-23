<template> 
 <div class="tabs"> 
  <ul> 
   <router-link :to="{name:'Container'}" tag="li" exact> 
    <div> 
     <i class="iconfont icon-xiaoxi"></i> 
    </div> 
    <div>会话</div> 
   </router-link> 
   <router-link :to="{name:'Apply'}" tag="li"> 
    <div> 
     <i class="iconfont icon-yingyongpingtai"></i> 
    </div> 
    <div>应用</div> 
   </router-link> 
   <router-link :to="{name:'Linkman'}" tag="li"> 
    <div> 
     <i class="iconfont icon-lianxiren"></i> 
    </div> 
    <div>联系人</div> 
   </router-link> 
   <router-link :to="{name:'More'}" tag="li"> 
    <div> 
     <i class="iconfont icon-shezhi"></i> 
    </div> 
    <div>更多</div> 
   </router-link> 
  </ul> 
 </div> 
</template> 
<script>
export default {
  name: "Tab"
};
</script> 
<style lang="less" type="text/less">
.tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #f7f7fa;
  width: 100%;
  height: 60px;
  &:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #f1f1f1;
  }
  &:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #eae7e7;
  }
  & > ul,
  & > ul > li {
    margin: 0;
    padding: 0;
  }
  ul {
    display: flex;
    width: 100%;
    height: 100%;
    & > li {
      text-align: center;
      font-size: 16px;
      display: table-cell;
      flex: 1;
      cursor: pointer;
      &.router-link-active {
        color: #217aca;
      }
      & > div {
        font-size: 14px;
        & > i {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
