<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>APP1</h1>
  <router-link to="/">首页</router-link>|
  <router-link to="/about">关于</router-link>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
