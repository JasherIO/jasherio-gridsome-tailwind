import DefaultLayout from "~/layouts/Default.vue";
require("typeface-montserrat");
require("typeface-roboto");

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);

  head.htmlAttrs = { lang: "en", class: "h-full" };
  head.bodyAttrs = { class: "antialiased" };
}
