<template>
  <main>
    <!-- hay que cerrar el tag con /-->
    <px-header :links="links" />
    <router-view class="container px-5 sm:px-20 py-20 flex_justify-center" />
    <!-- pasado a Home.vue
    <px-assets-table /> -->
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";
// lo pasamos a Home.vue
//import PxAssetsTable from "@/components/PxAssetsTable";

// parte de los modulos de ECMAScript
export default {
  name: "App",
  // pasado a Home.vue
  // components: { PxHeader, PxAssetsTable },
  components: { PxHeader },

  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "xrp" } },
        },
      ],
    };
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
