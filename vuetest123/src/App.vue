<template>
<div>
  <navigation-component/>
</div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent
  },
  data() {
    return {};
  },
  methods: {
    onChange()
    {
      console.log('Running');
      console.log(this.$refs.hello);
      console.log(this.$refs.header);
      this.$refs.hello.onConsoleTesting();
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0;
  padding: 0;
}
</style>