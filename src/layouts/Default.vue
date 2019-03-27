<template>
  <div class="theme" :class="theme">
    <nav class="absolute pin-t pin-r z-20 mt-6 mr-6">
      <button
        class="text-sm text-default border border-default hover:text-primary hover:border-primary rounded-full opacity-75 hover:opacity-100 transition-opacity no-underline px-4 py-2"
        style="outline: none;"
        @click="theme = (theme === 'light' ? 'dark' : 'light')"
      >Toggle</button>
    </nav>
    <slot/>
  </div>
</template>

<script>
// https://stackoverflow.com/questions/3263161/cannot-set-boolean-values-in-localstorage
import config from "~/.temp/config.js";

export default {
  data: function() {
    return { theme: "light" };
  },
  computed: {
    config() {
      return config;
    }
  },
  mounted() {
    this.theme = localStorage.theme;
  },
  watch: {
    theme(value) {
      localStorage.theme = value;
    }
  }
};
</script>

<style src="~/assets/css/main.css"></style>
