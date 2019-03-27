<template>
  <Layout>
    <main>
      <nav class="absolute pin-t pin-l z-20 mt-6 ml-6">
        <g-link
          to="/"
          class="text-grey-dark border-grey-dark text-sm border opacity-75 hover:opacity-100 rounded-full no-underline px-4 py-2 transition-opacity"
        >&larr; Home</g-link>
      </nav>

      <header class="container max-w-lg mx-auto text-center px-6 pt-24">
        <h1 class="text-default text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">About</h1>
        <!-- <p class="text-grey-dark text-lg sm:text-3xl">Lorem ipsum dolor &hellip;</p> -->
      </header>

      <section class="container mx-auto max-w-lg px-6 sm:px-12 pt-8 border-b border-grey-lighter">
        <div class="markdown text-lg leading-normal">
          <h2>Hi! I'm Josh!</h2>
          <p>I am a software developer with an interest in esports.</p>
          <p>Languages: C, C++, JavaScript, Node.js, Python</p>
          <p>Frameworks: GatsbyJS, Gridsome, React, Scrapy, Vue</p>

          <p>This Week in Rocket League, Rocketeers, Fantasy League</p>

          <h2>Projects</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue neque, posuere non porttitor id, vulputate sit amet sapien. Mauris tincidunt ac massa vel iaculis. Ut tempus, felis ac pellentesque placerat, ligula dolor malesuada sem, vel fermentum tellus nulla a nibh. Suspendisse suscipit feugiat pulvinar. Ut laoreet, ex sed semper laoreet, felis purus sollicitudin felis, a dapibus neque nunc vestibulum sapien. Suspendisse vel mi nec ipsum tempor tincidunt. Nulla vehicula pellentesque nibh, nec finibus leo rhoncus sit amet. Duis vitae libero lobortis, vehicula tortor id, vehicula odio. In blandit ligula id enim luctus bibendum. Mauris ultrices orci nibh, at pretium quam volutpat sed. Morbi sagittis justo non nisi elementum porta. Praesent vitae dui nec magna condimentum cursus sit amet id quam. Donec ex nisl, efficitur ac leo sit amet, pharetra mattis nisl. Aenean porttitor vitae eros eget volutpat.</p>

          <h4>JasherIO</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue neque, posuere non porttitor id, vulputate sit amet sapien. Mauris tincidunt ac massa vel iaculis. Ut tempus, felis ac pellentesque placerat, ligula dolor malesuada sem, vel fermentum tellus nulla a nibh. Suspendisse suscipit feugiat pulvinar. Ut laoreet, ex sed semper laoreet, felis purus sollicitudin felis, a dapibus neque nunc vestibulum sapien. Suspendisse vel mi nec ipsum tempor tincidunt. Nulla vehicula pellentesque nibh, nec finibus leo rhoncus sit amet. Duis vitae libero lobortis, vehicula tortor id, vehicula odio. In blandit ligula id enim luctus bibendum. Mauris ultrices orci nibh, at pretium quam volutpat sed. Morbi sagittis justo non nisi elementum porta. Praesent vitae dui nec magna condimentum cursus sit amet id quam. Donec ex nisl, efficitur ac leo sit amet, pharetra mattis nisl. Aenean porttitor vitae eros eget volutpat.</p>

          <h4>Lurker</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue neque, posuere non porttitor id, vulputate sit amet sapien. Mauris tincidunt ac massa vel iaculis. Ut tempus, felis ac pellentesque placerat, ligula dolor malesuada sem, vel fermentum tellus nulla a nibh. Suspendisse suscipit feugiat pulvinar. Ut laoreet, ex sed semper laoreet, felis purus sollicitudin felis, a dapibus neque nunc vestibulum sapien. Suspendisse vel mi nec ipsum tempor tincidunt. Nulla vehicula pellentesque nibh, nec finibus leo rhoncus sit amet. Duis vitae libero lobortis, vehicula tortor id, vehicula odio. In blandit ligula id enim luctus bibendum. Mauris ultrices orci nibh, at pretium quam volutpat sed. Morbi sagittis justo non nisi elementum porta. Praesent vitae dui nec magna condimentum cursus sit amet id quam. Donec ex nisl, efficitur ac leo sit amet, pharetra mattis nisl. Aenean porttitor vitae eros eget volutpat.</p>

          <h2>Events</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue neque, posuere non porttitor id, vulputate sit amet sapien. Mauris tincidunt ac massa vel iaculis. Ut tempus, felis ac pellentesque placerat, ligula dolor malesuada sem, vel fermentum tellus nulla a nibh. Suspendisse suscipit feugiat pulvinar. Ut laoreet, ex sed semper laoreet, felis purus sollicitudin felis, a dapibus neque nunc vestibulum sapien. Suspendisse vel mi nec ipsum tempor tincidunt. Nulla vehicula pellentesque nibh, nec finibus leo rhoncus sit amet. Duis vitae libero lobortis, vehicula tortor id, vehicula odio. In blandit ligula id enim luctus bibendum. Mauris ultrices orci nibh, at pretium quam volutpat sed. Morbi sagittis justo non nisi elementum porta. Praesent vitae dui nec magna condimentum cursus sit amet id quam. Donec ex nisl, efficitur ac leo sit amet, pharetra mattis nisl. Aenean porttitor vitae eros eget volutpat.</p>
        </div>
      </section>

      <section
        class="container mx-auto max-w-lg lg:max-w-xl px-6 sm:px-12 pt-8 border-b border-grey-lighter"
      >
        <div class="overflow-x-auto">
          <events-table class="mt-6 mb-6"/>
        </div>
      </section>

      <site-footer class="py-8 sm:py-16"/>
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";
import SiteFooter from "@/components/Footer";
import EventsTable from "@/components/Table";

export default {
  components: {
    SiteFooter,
    EventsTable
  },
  metaInfo() {
    return {
      title: "About",
      meta: [
        {
          key: "description",
          name: "description",
          content: "Josh Willis. Software. Esports."
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: "About" },
        {
          property: "og:description",
          content: "Josh Willis. Software. Esports."
        },
        { property: "og:url", content: `${this.config.siteUrl}/about/` },
        { property: "og:image", content: "/images/logo.png" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "About" },
        {
          name: "twitter:description",
          content: "Josh Willis. Software. Esports."
        },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: "/images/logo.png" }
      ]
    };
  },
  computed: {
    config() {
      return config;
    }
  }
};
</script>
