<template>
  <figure
    class="mx-auto mb-20 md:mb-32 lg:mb-64"
    :class="{
      'xl:w-1/2': size === 'normal',
      'lg:w-3/4': size === 'wide',
      'w-full': size === 'full',
    }"
  >
    <slot />

    <figcaption
      v-if="caption"
      class="uppercase text-xs opacity-50 mt-12 text-center"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'ContentImage',
  props: {
    caption: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
}
</script>

<style></style>
