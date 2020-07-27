<template>
  <div class="font-body">
    <TheHeader
      :site-name="$static.metadata.siteName"
      :show-menu="showMenu"
      @toggleMenu="showMenu = !showMenu"
    />

    <TheMenu :is-open="showMenu" />

    <slot />

    <TheFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import TheMenu from '@/components/TheMenu'

export default {
  name: 'Default',
  components: {
    TheHeader,
    TheFooter,
    TheMenu,
  },
  data() {
    return {
      showMenu: false,
    }
  },
  watch: {
    showMenu(stopScroll) {
      document.body.style.overflow = stopScroll ? 'hidden' : null
    },
  },
}
</script>
