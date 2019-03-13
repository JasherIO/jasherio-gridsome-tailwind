<template>
  <Layout>
    <main>
      <header>
        <div
          class="container flex flex-col-reverse xl:max-w-xl mx-auto text-center px-6 pt-24 pb-10 md:py-32 border-b border-grey-lighter"
        >
          <p
            class="text-grey-dark leading-normal"
          >{{ $page.category.belongsTo.totalCount }} posts in total</p>
          <h1
            class="sm:text-4xl md:text-5xl font-sans font-bold mb-2 capitalize"
          >{{ titleCase($page.category.title) }}</h1>
          <!-- <svg
            class="w-6 fill-current text-grey mx-auto mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            role="img"
            aria-labelledby="tagIcon"
          >
            <title id="tagIcon">Posts tagged</title>
            <path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
          </svg>-->
        </div>
        <nav class="absolute pin-t pin-l z-20 mt-6 ml-6">
          <g-link
            to="/"
            class="text-sm border text-grey-darkest hover:text-green border-grey-dark hover:border-green rounded-full no-underline px-4 py-2 transition-opacity"
          >&larr; Home</g-link>
        </nav>
      </header>
      <section>
        <post-item
          v-for="edge in $page.category.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </section>
      <pagination
        :base="`${$page.category.path}`"
        :info="$page.category.belongsTo.pageInfo"
        v-if="$page.category.belongsTo.pageInfo.totalPages > 1"
      />
      <site-footer class="py-8 sm:py-16"/>
    </main>
  </Layout>
</template>

<script>
import moment from "moment";
import config from "~/.temp/config.js";
import PostItem from "@/components/PostItem";
import SiteFooter from "@/components/Footer";
import Pagination from "@/components/Pagination";

export default {
  components: {
    PostItem,
    Pagination,
    SiteFooter
  },
  metaInfo() {
    return {
      title: `${this.titleCase(this.$page.category.title)}`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `Browse posts in "${this.titleCase(
            this.$page.category.title
          )}"`
        },

        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: `Posts in "${this.titleCase(this.$page.category.title)}"`
        },
        {
          property: "og:description",
          content: `Browse posts in "${this.titleCase(
            this.$page.category.title
          )}"`
        },
        {
          property: "og:url",
          content: `${this.config.siteUrl}/${this.$page.category.path}/`
        },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: `Posts in "${this.titleCase(this.$page.category.title)}"`
        },
        {
          name: "twitter:description",
          content: `Browse posts in "${this.titleCase(
            this.$page.category.title
          )}"`
        },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    };
  },
  methods: {
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  },
  computed: {
    config() {
      return config;
    },
    ogImageUrl() {
      return `${this.config.siteUrl}/images/logo.png`;
    }
  }
};
</script>

<page-query>
query Category ($path: String!, $page: Int) {
  category (path: $path) {
    id
    title
    path
    belongsTo (page: $page, perPage: 10) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            id
            title
            datetime: date (format: "YYYY-MM-DD HH:mm:ss")
            path
            content
            excerpt
            description
            author {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>