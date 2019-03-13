<template>
  <footer
    class="text-grey text-sm leading-normal flex flex-wrap justify-between container mx-auto max-w-lg px-6 sm:px-12"
  >
    <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
      <p>
        Based off
        <a
          href="https://github.com/hellocosmin/gridsome-starter-bleda"
          class="text-grey-dark hover:text-green no-underline transition-color border-b border-transparent hover:border-green transition-border-color"
        >Bleda</a> by
        <a
          href="https://twitter.com/cossssmin"
          class="text-grey-dark hover:text-green no-underline transition-color border-b border-transparent hover:border-green transition-border-color"
        >@cossssmin</a>
      </p>
      <p class="mt-1">
        Built with
        <a
          href="https://gridsome.org"
          class="text-grey-dark hover:text-green no-underline transition-color border-b border-transparent hover:border-green transition-border-color"
        >Gridsome</a> &amp;
        <a
          href="https://tailwindcss.com/"
          class="text-grey-dark hover:text-green no-underline transition-color border-b border-transparent hover:border-green transition-border-color"
        >Tailwind CSS</a>.
      </p>
    </div>
    <div class="w-full sm:w-1/2">
      <nav>
        <ul class="list-reset flex sm:justify-end -mx-2">
          <li class="px-2">
            <g-link
              to="/"
              class="text-grey-dark hover:text-green no-underline transition-color border-b border-transparent hover:border-green transition-border-color"
            >Home</g-link>
          </li>
          <li class="px-2">
            <g-link
              to="/about/"
              class="text-grey-dark hover:text-green no-underline transition-color border-b border-transparent hover:border-green transition-border-color"
            >About</g-link>
          </li>
          <li class="px-2">
            <a
              href="/sitemap.xml"
              class="text-grey-dark hover:text-green no-underline transition-color border-b border-transparent hover:border-green transition-border-color"
            >Sitemap</a>
          </li>
          <li class="px-2">
            <a
              href="/feed.xml"
              class="text-grey-dark hover:text-green no-underline transition-color border-b border-transparent hover:border-green transition-border-color"
            >RSS Feed</a>
          </li>
        </ul>
      </nav>
      <nav class="mt-1">
        <ul class="list-reset flex sm:justify-end -mx-2">
          <li class="px-2">
            <a
              href="https://github.com/jasherio"
              class="text-grey-dark hover:text-green no-underline transition-color"
            >
              <font-awesome :icon="['fab', 'github']"/>
            </a>
          </li>
          <li class="px-2">
            <a
              href="https://www.linkedin.com/in/jasherio/"
              class="text-grey-dark hover:text-green no-underline transition-color"
            >
              <font-awesome :icon="['fab', 'linkedin']"/>
            </a>
          </li>
          <li class="px-2">
            <a
              href="https://twitch.tv/jasherio"
              class="text-grey-dark hover:text-green no-underline transition-color"
            >
              <font-awesome :icon="['fab', 'twitch']"/>
            </a>
          </li>
          <li class="px-2">
            <a
              href="https://twitter.com/jasherio"
              class="text-grey-dark hover:text-green no-underline transition-color"
            >
              <font-awesome :icon="['fab', 'twitter']"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
