<template>
  <div>
    <navbar />
    <Content />
  </div>
</template>

<script>
import Content from "./components/Content";
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar,
    Content
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
