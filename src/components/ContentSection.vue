<template>
  <section class="content-section lg:flex mb-20 md:mb-32 lg:mb-64">
    <div class="text-xl lg:text-2xl uppercase font-bold lg:w-1/4 mb-2">
      <h4 class="leading-snug md:pr-10">
        <slot name="title" />
      </h4>
    </div>

    <div class="content-section__text">
      <slot name="body" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContenctSection',
}
</script>

<style scoped lang="scss">
.content-section {
  &__text {
    @apply leading-normal;
    @apply text-gray-800;

    @screen sm {
      @apply text-lg;
      @apply w-10/12;
    }

    @screen md {
      @apply w-8/12;
    }

    @screen xl {
      @apply w-2/4;
    }

    p,
    li {
      @apply mb-4;
    }

    ul {
      @apply mb-8;
      @apply pl-8;
      @apply list-disc;
      @apply list-outside;
    }
  }
}
</style>
