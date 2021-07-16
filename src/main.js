// importamos libreria de npm
import Vue from "vue";
//import Chart from "chart.js";
//import Chartick from "vue-chartkick";
// esta se importa diferente, mirar siempre en la documentacion
//import { VueSpinners } from "@saeris/vue-spinners";

// importamos componente padre, modulos eslint2015
import App from "./App.vue";
// importamos libreria, @ hace referencia al directorio src
import "@/assets/css/tailwind.css";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

//para usar las nuevas librerias
//Vue.use(VueSpinners);
//Vue.use(Chartick.use(Chart)); //daba error de version

// para poder utilizar este filtro, similar a un componente
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
// configuracion
Vue.config.productionTip = false;

new Vue({
  router,
  // funcion que reemplaza la instancia de la aplicacion
  // dentro de nuestro componente
  render: (h) => h(App),
}).$mount("#app");
// la funcion $mount es equivalente al anterior parametro 'el'
// new Vue({
//  el: '#app',
//  data () {
//    return {...}
//  }})
