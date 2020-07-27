<template>
  <footer class="border-t border-gray-300">
    <div
      class="px-4 container mx-auto flex flex-col justify-center sm:flex-row-reverse items-center py-8 sm:py-12 lg:py-16"
    >
      <nav class="text-lg flex items-center mb-4 sm:mb-0">
        <a
          href="https://www.linkedin.com/in/roos-van-greevenbroek-7b1a24101/"
          class="link"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>

        <span class="px-4 text-xs">•</span>

        <a class="link" href="mailto:roosvangreevenbroek@gmail.com">
          Email
        </a>
      </nav>

      <p class="sm:mr-auto">© {{ currentYear }} Roos van Greevenbroek</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {},
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
