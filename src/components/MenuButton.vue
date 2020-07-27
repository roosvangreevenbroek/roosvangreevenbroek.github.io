<template>
  <button
    class="menu-button"
    :class="{ 'menu-button--open': isOpen }"
    aria-label="menu"
    @click="$emit('click')"
  >
    <span class="menu-button__inner" tabindex="-1">
      <span class="menu-button__icon">
        <span />
        <span />
        <span />
        <span />
      </span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-button:focus,
.menu-button__inner:focus {
  @apply outline-none;
}

.menu-button {
  @apply relative;
  @apply cursor-pointer;

  &__inner {
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply w-6;
    @apply h-6;
  }
}
.menu-button:focus > .menu-button__inner {
  outline: 5px auto -webkit-focus-ring-color;
}

.menu-button__icon {
  @apply block;
  @apply absolute;
  @apply w-6;
  @apply h-4;
  transform: rotate(0deg);
  transition: 300ms ease-in-out;

  .menu-button--open & {
    span {
      &:nth-child(1) {
        top: 50%;
        left: 50%;
        width: 0%;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
        top: 40%;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        top: 40%;
      }

      &:nth-child(4) {
        top: 50%;
        left: 50%;
        width: 0%;
      }
    }
  }

  span {
    @apply bg-black;
    @apply block;
    @apply left-0;
    @apply absolute;
    @apply w-full;
    @apply opacity-100;
    height: 2px;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      @apply top-0;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 50%;
      transform: translateY(-50%);
    }

    &:nth-child(4) {
      top: 100%;
      transform: translateY(-100%);
    }
  }
}
</style>
