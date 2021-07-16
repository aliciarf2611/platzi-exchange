<template>
  <div id="app" class="bg-blue-400">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!--// 3.aqui lo utilizamos-->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// 1.aqui importamos el componente
import HelloWorld from "./components/HelloWorld.vue";

// parte de los modulos de ECMAScript
export default {
  name: "App",
  components: {
    // 2. aqui lo declaramos dentro del componente padre
    HelloWorld,
  },
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
