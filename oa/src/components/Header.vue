<template>
  <div class="header">
    <div class="text">{{title}}</div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      title:"OA办公"
    };
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  background-color: #2c3e50;
  height: 50px !important;
  width: 100%;
  text-align: center;
  color: white;
  display: flex;
}
.header .text {
  line-height: 50px;
  font-size: 18px;
  flex: 1;
}
</style>

