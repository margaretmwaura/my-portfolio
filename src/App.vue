<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>

import navbar from "./components/navbar";
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
