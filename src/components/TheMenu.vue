<template>
  <transition name="fade">
    <div
      v-show="isOpen"
      class="fixed left-0 top-0 w-full h-full pt-16 bg-white z-40"
    >
      <nav class="text-center pt-16">
        <a
          href="/#portfolio"
          class="text-xl block p-4 font-bold hover:bg-blue hover:text-white"
        >
          portfolio
        </a>

        <g-link
          class="text-xl block p-4 font-bold hover:bg-blue hover:text-white"
          to="/about/"
        >
          about
        </g-link>
      </nav>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TheMenu',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
