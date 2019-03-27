<template>
  <article>
    <div class="container mx-auto max-w-lg px-6">
      <div class="py-8 sm:py-20 border-b border-mute-light">
        <header class="text-center mb-8">
          <time
            :datetime="post.datetime"
            class="text-mute text-xs mb-2 uppercase"
          >{{ formatPublishDate(post.datetime) }}</time>
          <h2 class="sm:text-4xl mb-2">
            <g-link
              :to="`${post.path}/`"
              class="text-default hover:text-primary no-underline"
            >{{ post.title }}</g-link>
          </h2>
          <p class="text-mute text-sm leading-normal">
            <span v-if="post.category">
              in
              <g-link
                :to="`${post.category.path}/`"
                class="text-mute text-base hover:text-primary transition-color capitalized no-underline"
              >{{ titleCase(post.category.title) }}</g-link>
            </span>
          </p>
        </header>
        <p
          class="font-body text-default leading-normal text-lg px-2 sm:px-4 md:px-10"
          v-html="excerpt(post, 280, ' ...')"
        ></p>
      </div>
    </div>
  </article>
</template>

<script>
import moment from "moment";

export default {
  props: ["post"],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format("LL");
    }
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format("LL");
    },
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt;
      }

      length = length || 280;
      clamp = clamp || " ...";
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");

      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  }
};
</script>
