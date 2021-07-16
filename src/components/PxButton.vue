<template>
  <!-- podemos substituir v-on:click por @click-->
  <button
    @click="buttonClick"
    class="
      bg-transparent
      hover:bg-green-500
      text-green-700
      font-semibold
      hover:
      text-white
      py-2
      px-2
      border border-green-500
      hover:border-transparent
      rounded
    "
  >
    <!--para reemplazar el contenido del boton por algun texto-->
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "PxButton",

  //evento click
  methods: {
    buttonClick() {
      this.$emit("click");
    },
  },
};
</script>