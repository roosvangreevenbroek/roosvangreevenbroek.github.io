<template>
  <Layout>
    <div
      class="lg:h-90-pct bg-gray-300 relative shadow-lg"
      :style="{ backgroundColor: $page.project.color }"
    >
      <div class="px-4 container mx-auto pt-24 lg:pt-28 h-full">
        <div class="flex flex-col h-full justify-end">
          <h1 class="text-center text-2xl lg:text-4xl font-black mb-6">
            {{ $page.project.title }}
          </h1>

          <div class="lg:px-10 max-h-4/5">
            <g-image
              :src="$page.project.headingLarge"
              class="h-full w-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <main class="px-4 container mx-auto pt-20 lg:pt-40">
      <section class="md:flex mb-20 lg:mb-64">
        <div class="md:w-1/2 lg:text-xl mb-8">
          <p>{{ $page.project.intro }}</p>
        </div>

        <div class="md:w-1/2 flex">
          <div class="lg:ml-auto md:pl-16 lg:w-1/2 font-bold text-sm">
            <h6 class="uppercase text-xs opacity-50">Team</h6>
            <p class="mb-4">{{ $page.project.team }}</p>

            <h6 class="uppercase text-xs opacity-50">My Role</h6>
            <p class="mb-4">{{ $page.project.role }}</p>

            <h6 class="uppercase text-xs opacity-50">Timeline</h6>
            <p class="mb-4">{{ $page.project.timeline }}</p>
          </div>
        </div>
      </section>

      <VueRemarkContent />

      <section
        class="px-4 container mx-auto mb-20 lg:mb-40 flex justify-end items-center"
      >
        <span class="opacity-50 mr-4">Next project: </span>
        <g-link :to="$page.project.nextPath" class="link lg:text-2xl">
          {{ $page.project.nextName }}
        </g-link>
      </section>
    </main>
  </Layout>
</template>

<page-query>
query Project ($id: ID!) {
  project(id: $id) {
    title
    intro
    color
    headingSmall
    headingLarge
    team
    role
    timeline
    nextPath
    nextName
  }
}
</page-query>

<script>
export default {
  name: 'Project',
}
</script>
