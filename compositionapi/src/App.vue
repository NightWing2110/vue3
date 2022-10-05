<template>
  <HomeComponent />
</template>

<script>
import homeComponent from './pages/homeComponent.vue';
import HomeComponent from './pages/homeComponent.vue';

export default {
  name: 'App',
  components: {
    homeComponent,
    HomeComponent
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
  margin-top: 60px;
}
</style>
