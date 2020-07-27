<template>
  <div
    class="md:flex items-center mb-20 md:mb-32 lg:mb-64"
    :class="{ 'flex-row-reverse': index % 2 === 1 }"
  >
    <div class="w-full sm:w-1/2 mb-8 sm:mb-0">
      <g-link
        :to="node.path"
        class="w-100 pb-8/12 block relative"
        :class="{ 'border-4': outline }"
        :style="{
          backgroundColor: outline ? null : node.color,
          borderColor: node.color,
        }"
      >
        <div class="absolute w-full h-full p-2 lg:p-4">
          <div class="relative w-full h-full">
            <g-image
              class="absolute w-full h-full object-contain"
              :src="node.headingSmall"
            ></g-image>
          </div>
        </div>
      </g-link>
    </div>

    <div class="w-full sm:w-1/2 sm:p-6 lg:p-12">
      <g-link :to="node.path">
        <h2 class="text-2xl lg:text-4xl leading-very-tight font-black mb-2">
          {{ node.title }}
        </h2>
      </g-link>
      <p class="lg:text-xl leading-normal mb-2">
        {{ node.overviewIntro }}
      </p>
      <g-link :to="node.path" class="link text-lg">
        view project
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectSection',
  props: {
    node: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
