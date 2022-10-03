<template>
  <div class="container">
    <ul>
      <li @click="changeHere">Home</li>
      <li @click="changeHere">Band</li>
      <li @click="changeHere">Tour</li>
      <li @click="changeHere">Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  data() {
    return {};
  },

  methods: {
    changeHere() {
      console.log("aaa");
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 52px;
  border: 1px solid blue;
  margin: 0;
  padding: 0;
}
.container ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}
.container ul li {
  margin: 0 30px;
  cursor: pointer;
}
</style>
