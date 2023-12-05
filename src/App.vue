<template>
  <link href="http://fonts.cdnfonts.com/css/open-sans" rel="stylesheet" />
  <Home />
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  text-align: center;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
