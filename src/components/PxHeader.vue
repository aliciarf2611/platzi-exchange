<template>
  <!-- todo el ancho de pantalla y con shadow en el header -->
  <header class="shadow w-screen">
    <nav>
      <!-- ubicamos elementos con flex, color de fondo green, padding de 6 -->
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-2" />
          <!-- class: tamaño de texto y tipo de fuente -->
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >Platzi Exchange</router-link
          >
        </div>
        <!-- responsive: aplicara la clase block solo con el tamaño de pantalla sm
               o la flex al tamaño lg -->
        <div
          class="
            hidden
            sm:block
            w-full
            blok
            flex-grow
            lg:flex lg:items-center lg:wauto
          "
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="
                block
                mt-4
                lg:inline-block lg:mt-0
                ext-teañ-200
                hover:text-white
                mr-4
              "
            >
              {{ l.title }}</router-link
            >
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>
<script>
import PxIcon from "@/components/PxIcon";
export default {
  name: "PxHeader",
  components: { PxIcon },

  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
