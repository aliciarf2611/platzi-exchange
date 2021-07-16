<template>
  <div>
    <!-- solo se vera mientras carga la pagina
    <bounce-louder :loading="isLoading" :color="`#68d391`" :size="100" />-->
    <px-assets-table :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: { PxAssetsTable },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  //hook
  created() {
    this.isLoading = true
    api.getAssets()
    .then((assets) => (this.assets = assets))
    .finally(() => this.isLoading = false)
  },
};
</script>
