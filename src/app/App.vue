<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <img src="../assets/logo.png">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/Header';

export default {
  name: 'app',
  components:{
    appHeader
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>