<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #fbf9fe;
  line-height: 1.6;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
#app {
  width: 100%;
  color: #2c3e50;
}
</style>
