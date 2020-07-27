<template>
  <div
    class="mx-auto mb-20 md:mb-32 lg:mb-64"
    :class="{
      'xl:w-1/2': size === 'normal',
      'lg:w-3/4': size === 'wide',
      'w-full': size === 'full',
    }"
  >
    <div class="relative h-0 pb-8/12">
      <iframe
        :src="url"
        frameborder="0"
        class="absolute left-0 top-0 w-full h-full"
      ></iframe>
    </div>

    <p v-if="caption" class="uppercase text-xs opacity-50 mt-12 text-center">
      {{ caption }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContentVideo',
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'normal',
    },
    caption: {
      type: String,
      default: 'normal',
    },
  },
}
</script>

<style></style>
