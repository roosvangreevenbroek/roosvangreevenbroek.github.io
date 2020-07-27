<template>
  <header class="container mx-auto lg:pt-12 fixed top-0 left-0 right-0 z-50">
    <div class="h-16 flex items-center">
      <g-link to="/" class="p-4 lg:px-4 lg:py-0 block h-full">
        <g-image
          src="~/assets/icons/logo.svg"
          :alt="siteName"
          class="max-h-full w-auto"
        />
      </g-link>

      <nav class="ml-auto hidden lg:block">
        <a
          href="/#portfolio"
          class="inline-block p-4 font-bold hover:bg-blue hover:text-white"
        >
          portfolio
        </a>

        <g-link
          class="inline-block p-4 ml-12 font-bold hover:bg-blue hover:text-white"
          to="/about/"
        >
          about
        </g-link>
      </nav>

      <MenuButton
        class="ml-auto p-4 lg:hidden"
        :is-open="showMenu"
        @click="$emit('toggleMenu')"
      />
    </div>
  </header>
</template>

<script>
import MenuButton from '@/components/MenuButton'

export default {
  name: 'TheHeader',
  components: {
    MenuButton,
  },
  props: {
    siteName: {
      type: String,
      required: true,
    },
    showMenu: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
