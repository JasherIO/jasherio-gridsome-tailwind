<template>
  <footer
    class="text-mute-dark text-sm leading-normal flex flex-wrap justify-between container mx-auto max-w-lg px-6 sm:px-12"
  >
    <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
      <p>
        Based off
        <a
          href="https://github.com/hellocosmin/gridsome-starter-bleda"
          alt="Bleda"
          class="text-mute hover:text-primary no-underline transition-color border-b border-transparent hover:border-primary transition-border-color"
        >Bleda</a> by
        <a
          href="https://twitter.com/cossssmin"
          alt="cosssmin"
          class="text-mute hover:text-primary no-underline transition-color border-b border-transparent hover:border-primary transition-border-color"
        >@cossssmin</a>
      </p>
      <p class="mt-1">
        Built with
        <a
          href="https://gridsome.org"
          alt="Gridsome"
          class="text-mute hover:text-primary no-underline transition-color border-b border-transparent hover:border-primary transition-border-color"
        >Gridsome</a> &amp;
        <a
          href="https://tailwindcss.com/"
          alt="Tailwind CSS"
          class="text-mute hover:text-primary no-underline transition-color border-b border-transparent hover:border-primary transition-border-color"
        >Tailwind CSS</a>.
      </p>
    </div>
    <div class="w-full sm:w-1/2">
      <nav>
        <ul class="list-reset flex sm:justify-end -mx-2">
          <li class="px-2">
            <g-link
              to="/"
              alt="Home"
              class="text-mute hover:text-primary no-underline transition-color border-b border-transparent hover:border-primary transition-border-color"
            >Home</g-link>
          </li>
          <li class="px-2">
            <g-link
              to="/about/"
              alt="About"
              class="text-mute hover:text-primary no-underline transition-color border-b border-transparent hover:border-primary transition-border-color"
            >About</g-link>
          </li>
          <li class="px-2">
            <a
              href="/sitemap.xml"
              alt="Sitemap"
              class="text-mute hover:text-primary no-underline transition-color border-b border-transparent hover:border-primary transition-border-color"
            >Sitemap</a>
          </li>
          <li class="px-2">
            <a
              href="/feed.xml"
              alt="RSS Feed"
              class="text-mute hover:text-primary no-underline transition-color border-b border-transparent hover:border-primary transition-border-color"
            >RSS Feed</a>
          </li>
        </ul>
      </nav>
      <nav class="mt-1">
        <ul class="list-reset flex sm:justify-end -mx-2">
          <li class="px-2">
            <a
              href="https://github.com/jasherio"
              class="text-mute hover:text-primary no-underline transition-color"
            >
              <font-awesome :icon="['fab', 'github']"/>
            </a>
          </li>
          <li class="px-2">
            <a
              href="https://www.linkedin.com/in/jasherio/"
              class="text-mute hover:text-primary no-underline transition-color"
            >
              <font-awesome :icon="['fab', 'linkedin']"/>
            </a>
          </li>
          <li class="px-2">
            <a
              href="https://twitch.tv/jasherio"
              class="text-mute hover:text-primary no-underline transition-color"
            >
              <font-awesome :icon="['fab', 'twitch']"/>
            </a>
          </li>
          <li class="px-2">
            <a
              href="https://twitter.com/jasherio"
              class="text-mute hover:text-primary no-underline transition-color"
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
